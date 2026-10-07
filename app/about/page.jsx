import Image from "next/image";
import Link from "next/link";
import { SITE, ORG_ID, PERSON_ID, LINKEDIN_CONNOR, ADDRESS } from "@/lib/site";
import "../ai-agents/command-stage.css";

// /about: who Connor is and where he works, so search engines can tie the business to a named
// person in San Jose. Bio lines are the ones already approved on the homepage; no client names.

const title = "About Connor Provines, AI Consultant in San Jose";
const description =
  "Connor Provines founded Provines Consulting in San Jose. He installs AI operators inside small businesses after 12 years in B2B SaaS demand generation.";
const path = "/about";

export const metadata = {
  title: { absolute: `${title} | Provines Consulting` },
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | Provines Consulting`,
    description,
    url: `${SITE}${path}`,
    images: [{ url: "/og/ai-agents.png", width: 1200, height: 630, alt: "An AI operator console wired to a business's website, ads, social, analytics, CRM, ERP and email" }],
  },
  twitter: { title: `${title} | Provines Consulting`, description, images: ["/og/ai-agents.png"] },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE}${path}`,
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Connor Provines",
      jobTitle: "Founder, AI consultant",
      worksFor: { "@id": ORG_ID },
      address: ADDRESS,
      image: `${SITE}/connor.jpg`,
      url: `${SITE}${path}`,
      sameAs: [LINKEDIN_CONNOR],
      knowsAbout: ["AI agents", "AI automation", "Marketing operations", "Demand generation", "CRM", "Google Ads"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE}${path}` },
    ],
  },
];

const Arrow = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" /></svg>
);

const PROSE = "space-y-5 text-[16.5px] leading-[1.65] text-[var(--char)]";

export default function About() {
  return (
    <div className="aa">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero sub-hero">
        <div className="hero-bg" />
        <div className="noise" />
        <div className="hero-in">
          <div className="hero-copy">
            <nav aria-label="Breadcrumb" className="crumb">
              <Link href="/">Home</Link><span className="sep">/</span><span>About</span>
            </nav>
            <h1>Connor Provines</h1>
            <p className="sub">
              I founded Provines Consulting to install AI operators inside small businesses: one AI
              agent connected to the website, ads, social accounts, analytics, CRM, ERP and email,
              directed in plain English by someone on the owner&apos;s team and running on the
              company&apos;s own accounts.
            </p>
            <p className="small">
              Based in San Jose. I work with owners across the Bay Area in person, and with
              businesses elsewhere remotely.
            </p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/schedule">Book a growth audit<Arrow /></Link>
              <a className="btn btn-ghost" href={LINKEDIN_CONNOR} rel="me noopener" target="_blank">LinkedIn<Arrow /></a>
            </div>
          </div>
          <div className="about-photo">
            <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
            <Image src="/connor.jpg" alt="Connor Provines" width={800} height={800} sizes="(max-width: 859px) 100vw, 420px" priority />
            <p className="cap"><b>SAN JOSE, CA</b><span>Founder, Provines Consulting</span></p>
          </div>
        </div>
        <div className="horizon" />
      </section>

      <div className="ground">
        <section className="sheet">
          <span className="wire-in" aria-hidden="true" /><span className="wire-port top" aria-hidden="true" /><span className="wire-port" aria-hidden="true" />

          <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
            <h2 style={{ marginTop: 0 }}>Background</h2>
            <div className={PROSE}>
              <p>
                12 years in B2B SaaS building demand gen programs, managing six-figure ad budgets,
                and scaling pipeline at companies where getting it wrong had real consequences. I
                know what marketing infrastructure is supposed to look like because I&apos;ve built
                it at scale.
              </p>
              <p>
                Now I take that same approach and apply it to business owners who need the caliber
                of systems that big companies have but shouldn&apos;t have to hire a department to
                get it. I work with one client at a time, build everything in their environment, and
                hand them the keys when we&apos;re done.
              </p>
            </div>
          </div>

          <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
            <h2 style={{ marginTop: 0 }}>What I install</h2>
            <div className={PROSE}>
              <p>
                An <Link href="/ai-agents" className="ilink">AI operator</Link>: a single agent wired
                into every system the business runs on, so a request carries from the website to the
                CRM to the ad account without anyone moving it by hand. Anything that sends, spends
                or publishes waits for approval until the team decides otherwise.
              </p>
              <p>
                Every engagement starts with the <Link href="/growth-audit" className="ilink">growth audit</Link>,
                which maps those systems and picks the first job. The{" "}
                <Link href="/ai-agents/examples" className="ilink">AI agent examples</Link> show the
                range of work it takes on, and{" "}
                <Link href="/ai-consultant" className="ilink">working with an AI consultant</Link> covers
                how an install runs from the audit to the handover.
              </p>
            </div>
          </div>

          <div className="aa-block grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center bg-[var(--off)]">
            <div>
              <h2 style={{ marginTop: 0 }}>Where an install starts</h2>
              <p className="mt-6 max-w-xl text-[16.5px] leading-[1.65] text-[var(--char)]">
                The growth audit goes through your site, your CRM and your ad accounts, shows where
                leads are leaking, and names the first job worth handing to an operator.
              </p>
            </div>
            <div className="md:text-right">
              <Link href="/schedule" className="btn btn-ink">Book a growth audit<Arrow /></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
