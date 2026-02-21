import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL = "connorprovines@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, interest_area, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Build a mailto-friendly summary for now
    // TODO: Replace with a proper email service (Resend, SendGrid, or Railway-hosted SMTP)
    // For now, we'll use a simple approach that works:
    // 1. Log the submission (visible in Vercel logs)
    // 2. Return success so the form works
    // 3. Set up proper email forwarding as a follow-up

    const interestLabels: Record<string, string> = {
      website_rebuild: "Website Rebuild & Migration",
      ai_agents: "AI Agent Suite",
      integrations: "Integrations & Automation",
      full_transformation: "Full Digital Transformation",
      other: "Other",
    };

    const submission = {
      name,
      email,
      company: company || "Not provided",
      phone: phone || "Not provided",
      interest: interestLabels[interest_area] || interest_area || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    };

    // Log to Vercel/server logs so submissions aren't lost
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(JSON.stringify(submission, null, 2));
    console.log("=== END SUBMISSION ===");

    // If RESEND_API_KEY is set, send email via Resend
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
            subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
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
        // Don't fail the whole request if email fails — it's still logged
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
