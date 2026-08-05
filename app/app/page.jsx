import Link from "next/link";

// Dedicated application home page for OAuth verification. The consent screen's
// "Application home page" field points HERE, not the marketing root — so the
// page a Google/Meta reviewer lands on is unmistakably about the app:
//   - it leads with the exact consent-screen app name ("Provines Consulting"),
//   - it describes what the app does and why it needs Google/Meta data ABOVE
//     the fold (no login wall, no scrolling to find it),
//   - it links the privacy policy + terms.
// Both platforms reject home pages that don't explain purpose or whose app name
// doesn't match the consent screen; this page exists to satisfy both.

export const metadata = {
  title: "Provines Consulting — Marketing Platform",
  description:
    "Provines Consulting operates a marketing platform that securely connects to a business's own Google and Meta marketing accounts to report on and manage their campaigns in one place.",
};

const CONNECTIONS = [
  ["Google Ads", "Reads campaign spend, clicks, and conversions to report on and optimize paid search."],
  ["Google Analytics (GA4)", "Reads website traffic and conversion metrics to show what's driving results."],
  ["Google Search Console", "Reads organic search clicks, impressions, and rankings to guide SEO."],
  ["Google Business Profile", "Reads local-listing performance — profile views, calls, and direction requests."],
  ["Meta Ads", "Reads Facebook and Instagram ad spend and results alongside Google spend."],
  ["Facebook & Instagram", "Reads Page and profile insights so social sits in the same report."],
];

export default function AppHomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero — leads with the app name that matches the consent screen */}
      <section className="border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          <p className="inline-block border border-[var(--line)] bg-white px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.08em] text-slate-500 mb-8">
            MARKETING PLATFORM · DATA ACCESS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--navy)] leading-[1.05] tracking-tighter mb-6">
            Provines Consulting
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Provines Consulting operates a marketing platform — <span className="font-semibold text-[var(--navy)]">Golden Kit</span> —
            that helps a business see and run its entire marketing operation in one place. With the
            business owner&apos;s permission, granted through Google&apos;s and Meta&apos;s own
            sign-in screens, the platform securely connects to the marketing accounts they already
            own and reads their performance data so an AI operator can report on results and manage
            their campaigns. This page explains what the application accesses and why.
          </p>
        </div>
      </section>

      {/* What the app does with account access */}
      <section className="bg-[var(--off-white)] border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[var(--navy)] mb-4">
            What the application accesses
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mb-10">
            When a client connects an account, Provines Consulting requests read-only access to that
            account&apos;s reporting data — never more than is needed to produce the client&apos;s
            marketing reports and manage the campaigns they ask us to run.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
            {CONNECTIONS.map(([name, desc]) => (
              <div key={name} className="bg-white px-6 py-6">
                <h3 className="font-bold text-[var(--navy)] text-base tracking-tight mb-1.5">{name}</h3>
                <p className="text-[13px] leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we handle the data */}
      <section className="border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[var(--navy)] mb-8">
            How we handle your data
          </h2>
          <ul className="space-y-4 text-slate-600 leading-relaxed max-w-2xl">
            <li><span className="font-semibold text-[var(--navy)]">Least access.</span> We request only the read-only permissions needed to build your reports and run the campaigns you approve.</li>
            <li><span className="font-semibold text-[var(--navy)]">Encrypted &amp; private.</span> Access tokens are stored encrypted. Your data is used only to provide your service — it is never sold or used for advertising.</li>
            <li><span className="font-semibold text-[var(--navy)]">Yours to revoke.</span> You can disconnect any account at any time from your Google or Meta security settings, and the access ends immediately.</li>
            <li><span className="font-semibold text-[var(--navy)]">Limited Use.</span> Our use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-[var(--electric-blue)] hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</li>
          </ul>
          <p className="mt-10 text-slate-600">
            Full details are in our{" "}
            <Link href="/legal" className="text-[var(--electric-blue)] font-medium hover:underline">Privacy Policy and Terms of Service</Link>.
          </p>
          <div className="mt-10">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--navy)] text-white font-semibold hover:bg-[var(--electric-blue)] transition-colors"
            >
              Talk to Provines Consulting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
