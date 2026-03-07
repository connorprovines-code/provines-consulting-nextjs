import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL = "connorprovines@gmail.com";
const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL ||
  "https://connorprovines.app.n8n.cloud/webhook/contact-me-consulting";

// Rate limiting: track IPs with timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 3;

// Spam patterns
const SPAM_URL_REGEX = /https?:\/\/|www\.|\.com\/|\.net\/|\.org\//i;
const SPAM_KEYWORDS = [
  "crypto", "bitcoin", "nft", "casino", "viagra", "cialis",
  "buy now", "click here", "free money", "act now", "limited time",
  "earn extra", "work from home", "mlm", "double your",
  "SEO services", "web traffic", "backlinks", "guest post",
];

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  rateLimitMap.set(ip, recent);

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function hasSpamPatterns(data: {
  name: string;
  email: string;
  message: string;
  company?: string;
}): string | null {
  if (SPAM_URL_REGEX.test(data.name)) {
    return "Invalid name";
  }

  const messageLower = data.message.toLowerCase();
  for (const keyword of SPAM_KEYWORDS) {
    if (messageLower.includes(keyword.toLowerCase()) && messageLower.length < 100) {
      return "Message flagged as spam";
    }
  }

  if (SPAM_URL_REGEX.test(data.message) && data.message.length < 150) {
    return "Message flagged as spam";
  }

  if (data.name.length > 3 && data.name === data.name.toUpperCase()) {
    return "Invalid name format";
  }

  if (/\d{3,}/.test(data.name)) {
    return "Invalid name";
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      phone,
      interest_area,
      message,
      website, // honeypot
      formLoadedAt,
    } = body;

    // 1. Honeypot check — if filled, it's a bot
    if (website) {
      return NextResponse.json({ success: true });
    }

    // 2. Time-based check — reject if submitted too fast (<3 seconds)
    if (formLoadedAt) {
      const elapsed = Date.now() - formLoadedAt;
      if (elapsed < 3000) {
        return NextResponse.json({ success: true }); // silent reject
      }
    }

    // 3. Required field validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 4. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // 5. Rate limiting
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // 6. Spam pattern detection
    const spamResult = hasSpamPatterns({ name, email, message, company });
    if (spamResult) {
      return NextResponse.json({ success: true }); // silent reject
    }

    // All checks passed — build submission
    const interestLabels: Record<string, string> = {
      ai_agents: "AI Agents & Assistants",
      process_automation: "Process Automation",
      website_rebuild: "Website Rebuild & Migration",
      integrations: "System Integrations",
      custom_tools: "Custom Tool Development",
      full_engagement: "Full Engagement (Multiple Services)",
      other: "Not Sure / Other",
    };

    const submission = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "Not provided",
      phone: phone?.trim() || "Not provided",
      interest: interestLabels[interest_area] || interest_area || "Not specified",
      interest_area: interest_area || "",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Log to Vercel/server logs so submissions aren't lost
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(JSON.stringify(submission, null, 2));
    console.log("=== END SUBMISSION ===");

    // Forward to n8n webhook
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...submission,
            submission_timestamp: submission.timestamp,
          }),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
      }
    }

    // Send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Provines Consulting <onboarding@resend.dev>",
            to: [CONTACT_EMAIL],
            reply_to: email,
            subject: `New inquiry from ${submission.name}${submission.company !== "Not provided" ? ` (${submission.company})` : ""}`,
            text: [
              `Name: ${submission.name}`,
              `Email: ${submission.email}`,
              `Company: ${submission.company}`,
              `Phone: ${submission.phone}`,
              `Interest: ${submission.interest}`,
              "",
              "Message:",
              submission.message,
              "",
              `Submitted: ${submission.timestamp}`,
            ].join("\n"),
          }),
        });

        if (!emailRes.ok) {
          console.error("Resend error:", await emailRes.text());
        }
      } catch (emailError) {
        console.error("Email send failed:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
