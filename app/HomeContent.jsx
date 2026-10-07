import Link from "next/link";
import AgentsVideo from "@/components/AgentsVideo";
import { NODE_BY_KEY } from "./ai-agents/systems";
import "./ai-agents/command-stage.css";
import "./home.css";

// The homepage runs on the /ai-agents command-stage system (Connor, 2026-10-06: the video's style
// leads the homepage). Dark stage hero with the video as the operator console, then the light sheet.

const Arrow = ({ d = "M2 7h9M7.5 3.5L11 7l-3.5 3.5" }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true"><path d={d} /></svg>
);

const Ico = ({ k, children }) => (
  <span className="n-ico"><svg viewBox="0 0 16 16">{k ? NODE_BY_KEY[k].icon : children}</svg></span>
);

const STEPS = [
  ["Audit", "I map your current stack, find where leads leak, and show you what you're overpaying for."],
  ["Build", "The full stack in your environment: website, CRM, ads, automation. Every account and asset in your name."],
  ["Your AI operator", "Trained on your business and wired into all of it. It runs the day-to-day: follow-up, campaign adjustments, CRM upkeep, reporting. You direct it in plain English, it executes."],
  ["Handover", "I train you until you don't need me, then step back. Month to month, nothing locked in."],
];

const MODULES = [
  ["website", "Site", "Migrated. Same URLs, same rankings, zero lock-in."],
  ["crm", "CRM", "Right-sized. Follow-up in minutes, not days."],
  ["ads", "Ads", "Longtail, direct, tracked to booked revenue."],
];

const CASES = [
  {
    href: "/work/custom-home-builder",
    img: "/ts-after.png",
    alt: "Custom home builder website",
    where: "Custom Home Builder, Oklahoma City",
    title: "Legacy Lock-In to Full Control",
    body: "A 9-person home builder paying over 90% more than they needed to in software costs, with a website trapped in a CMS nobody could edit. We migrated the CRM and the site, put an AI operator on the day-to-day, and trained the team. Under four weeks, start to finish.",
  },
  {
    href: "/work/residential-construction",
    img: "/creekside-after.png",
    alt: "Residential construction website",
    where: "Custom Home Builder, Oregon",
    title: "The Bottleneck Was Never the Owner",
    body: "An owner with the creative vision and marketing instincts was stuck on a Wix site he couldn't edit, with a CRM full of automations nobody had turned on. We migrated the platform, wired ads, landing pages, and the CRM into one connected system, and now he runs the whole thing himself.",
  },
];

// Required for Google/Meta OAuth verification: the homepage must explain the purpose of the app
// requesting account access.
const PLATFORM = [
  ["ads", "Google Ads", "Reads campaign spend, clicks, and conversions to report and optimize your paid search."],
  ["analytics", "Google Analytics (GA4)", "Reads website traffic and conversion metrics to show what's working."],
  ["search", "Google Search Console", "Reads organic search clicks, impressions, and rankings for your SEO."],
  ["gbp", "Google Business Profile", "Reads local listing performance: views, calls, and direction requests."],
  ["ads", "Meta Ads", "Reads Facebook and Instagram ad spend and results alongside your Google spend."],
  ["social", "Facebook & Instagram", "Reads Page and profile insights so social sits in the same report."],
];

const PIN = <><path d="M8 14.5s-4.8-4.6-4.8-8.2a4.8 4.8 0 019.6 0c0 3.6-4.8 8.2-4.8 8.2z" /><circle cx="8" cy="6.3" r="1.7" /></>;

export default function HomeContent() {
  return (
    <div className="aa home">
      {/* ============================================================ */}
      {/* HERO: dark stage, copy left, the video as the operator console */}
      {/* ============================================================ */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="noise" />
        <div className="hero-in">
          <div className="hero-copy">
            <span className="chip"><i />The owner-operated growth stack<span className="rev"><span className="sep">/</span>Rev 2026.10</span></span>
            <h1>
              Stop renting your marketing.{" "}
              <span className="hl">Start <span className="own">owning<span className="dim" aria-hidden="true">in your name</span></span> it.</span>
            </h1>
            <p className="sub">
              I replace your marketing agency with a system you own: website, CRM, and ads,
              all connected, run day-to-day by an AI operator you direct in plain English.
              I build it, hand you the keys, and get out of the way.
            </p>
            <p className="small">
              12 years of B2B SaaS marketing. Now applied to business owners
              who need the same infrastructure without hiring a department.
            </p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/schedule">Book a growth audit<Arrow /></Link>
              <Link className="btn btn-ghost" href="/work">See the work<Arrow /></Link>
            </div>
          </div>

          <div className="stage-wrap vid-wrap">
            <div className="atmos" aria-hidden="true"><div className="agrid" /><div className="glow" /><div className="core" /></div>
            <div className="vid-console">
              <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
              <div className="c-head"><span className="c-mark" /><span className="c-title">OPERATOR</span><span className="c-status"><i />0:39</span></div>
              <AgentsVideo className="vid" />
            </div>
            <div className="stage-foot">
              <p className="cap"><b>FIG. 1</b><span>One operator connected to every system, directed in plain English.</span></p>
              <Link className="vid-link" href="/ai-agents">AI agents for business<Arrow /></Link>
            </div>
          </div>
        </div>
        <div className="horizon" />
      </section>

      <div className="ground">
        <section className="sheet">
          <span className="wire-in" aria-hidden="true" /><span className="wire-port top" aria-hidden="true" /><span className="wire-port" aria-hidden="true" />

          {/* ============================================================ */}
          {/* THE ENGAGEMENT: steps 01-04, operator as the lit centerpiece */}
          {/* ============================================================ */}
          <div className="sheet-in">
            <div className="what-head">
              <div>
                <div className="fig">FIG. 2 <span className="slash">/</span> The engagement, step 01 ▸ 04</div>
                <h2>I build it. An AI operator runs it. You own all of it.</h2>
              </div>
              <p className="what-lede">
                The first thing I do is scope what you actually need versus what you&apos;re paying for.
                Most owners I talk to are either paying an agency they can&apos;t see into, where the
                accounts, the data, and the know-how all live on someone else&apos;s side of the
                fence, or they&apos;re spread across tools that don&apos;t talk to each other.
                I look at the whole picture and build a plan around what matters.
              </p>
            </div>

            <div className="steps">
              {STEPS.map(([title, body], i) => (
                <div key={title} className={`step${i === 2 ? " op" : ""}`}>
                  <div className="job-top">
                    <span>Step {String(i + 1).padStart(2, "0")}</span>
                    {i === 2 && <span className="onstage"><i />Operator</span>}
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            {/* What you own when we're done: the modules wired into the operator */}
            <figure className="own-panel">
              <figcaption className="own-head">
                <span className="fig">FIG. 3 <span className="slash">/</span> What you own when we&apos;re done</span>
              </figcaption>
              <div className="mods">
                {MODULES.map(([k, name, body], i) => (
                  <div key={name} className="mod">
                    <div className="mod-top"><Ico k={k} /><span className="mod-idx">MOD {String(i + 1).padStart(2, "0")}</span></div>
                    <h3>{name}</h3>
                    <p>{body}</p>
                  </div>
                ))}
                <div className="mod op">
                  <div className="mod-top"><Ico k="pilot" /><span className="mod-idx">MOD 04 · OPERATOR</span></div>
                  <h3>Orchestrator</h3>
                  <p>Sees the whole board. Executes what you say.</p>
                </div>
              </div>
              <p className="own-cap"><span>every path between modules mapped at build</span> <i>·</i> <b>you direct it in plain English</b> <i>·</i> <span>nothing locked in</span></p>
            </figure>

            <div className="two">
              <p>
                Then I build the systems in your environment. Your website moves to a modern stack.
                Your CRM gets right-sized. Your ads, email, and content tools get wired together.
                And I stand up the operator: a dedicated AI, trained on your business, that manages
                the site, follows up with leads, adjusts campaigns, and keeps the CRM clean. No
                developer required.
              </p>
              <p>
                We work together 1:1 until you&apos;re comfortable directing it. I train you on the
                system, flag what needs attention, and make sure nothing falls through the cracks
                during the transition. When you don&apos;t need me anymore, I step back. You own
                everything: the code, the data, the accounts, the machine it all runs on.
              </p>
            </div>
            <div className="links">
              <Link href="/how-it-works" className="ilink">Full process breakdown<Arrow /></Link>
              <Link href="/ai-agents" className="ilink">What the operator can do across your business<Arrow /></Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CONNOR                                                       */}
          {/* ============================================================ */}
          <div className="aa-block about">
            <img src="/connor.jpg" alt="Connor Provines" />
            <div>
              <h2>Connor Provines</h2>
              <div className="prose">
                <p>
                  12 years in B2B SaaS building demand gen programs, managing six-figure
                  ad budgets, and scaling pipeline at companies where getting it wrong had real
                  consequences. I know what marketing infrastructure is supposed to look like
                  because I&apos;ve built it at scale.
                </p>
                <p>
                  Now I take that same approach and apply it to business owners who need the
                  caliber of systems that big companies have but shouldn&apos;t have to hire
                  a department to get it. I work with one client at a time, build everything
                  in their environment, and hand them the keys when we&apos;re done.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CASE STUDIES                                                 */}
          {/* ============================================================ */}
          <div className="aa-block">
            <h2 className="cases-h">Every engagement ends the same way: the client owns everything.</h2>
            <div className="cases">
              {CASES.map((c) => (
                <article key={c.href} className="case">
                  <Link href={c.href} className="case-img"><img src={c.img} alt={c.alt} /></Link>
                  <div className="case-in">
                    <div className="fig">{c.where}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <Link href={c.href} className="ilink case-link">Read the case study<Arrow /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* THE PLATFORM: what the app connects to and does with it      */}
          {/* ============================================================ */}
          <div id="platform" className="aa-block platform">
            <div className="fig">The platform <span className="slash">/</span> What it connects to</div>
            <h2>One secure connection puts your whole marketing picture in one place.</h2>
            <p className="plat-lede">
              Provines Consulting builds and runs a marketing platform, <b>Golden Kit</b>, for
              each client. With your permission, granted through the official Google and Meta sign-in
              screens one click each, Golden Kit securely connects to the marketing accounts you already
              own and reads their performance data so your AI operator can report on results and manage
              your campaigns in one place. We only request the access needed to do that, your data is
              stored encrypted, it is never sold, and you can revoke the connection at any time.
            </p>
            <div className="ptiles">
              {PLATFORM.map(([k, name, desc]) => (
                <div key={name} className="ptile">
                  {k === "gbp" ? <Ico>{PIN}</Ico> : <Ico k={k} />}
                  <div><h3>{name}</h3><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <p className="plat-foot">
              How we handle the data we access is described in our{" "}
              <Link href="/legal">Privacy Policy</Link>.
            </p>
          </div>

          {/* ============================================================ */}
          {/* CTA                                                          */}
          {/* ============================================================ */}
          <div className="aa-block cta">
            <div>
              <h2>Let&apos;s figure out what you need.</h2>
              <p>
                The first step is a <Link href="/growth-audit" className="ilink">growth audit</Link>. I go
                through your site, your CRM, and your ad spend, show you where leads are leaking, and map
                what you&apos;ll own when we&apos;re done.
              </p>
            </div>
            <div className="cta-act">
              <Link href="/schedule" className="btn btn-ink">Book a growth audit<Arrow /></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
