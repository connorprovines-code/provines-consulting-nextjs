import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../ai-agents/AgentsSubpage";

// /ai-consultant: the money page for people searching for a provider ("ai consultant for small
// business", "ai automation consultant"). It owns Connor, the engagement, the handover, the
// comparisons, cost and proof; /ai-agents/examples owns the job catalog. Results and figures are
// limited to the ones Connor has confirmed from real installs and /work; no prices, no timelines.

const title = "AI Consultant for Small Business";
const description =
  "San Jose AI consultant for small business: I install one AI agent in your website, ads, CRM, ERP and email, on your own accounts, and stay until your team runs it.";
const path = "/ai-consultant";
const url = `https://www.provinesconsulting.com${path}`;
const ogTitle = `${title} in San Jose | Provines Consulting`;
const ogImage = "/og/ai-agents.png";

export const metadata = {
  title: { absolute: ogTitle },
  description,
  alternates: { canonical: path },
  openGraph: {
    title: ogTitle,
    description,
    url,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "An AI operator console wired to a business's website, ads, social, analytics, CRM, ERP and email" }],
  },
  twitter: {
    title: ogTitle,
    description,
    images: [ogImage],
  },
};

const crumbs = [{ href: "/", label: "Home" }, { label: "AI consultant" }];

const faqs = [
  {
    q: "How much does an AI consultant cost?",
    a: [
      "Three things set the price: how many systems the operator has to work in; how much connection work they need, since a platform with a clean, documented connection takes far less effort than one the operator works through in a browser or one whose data needs cleaning first; and whether I keep running some of the work after the handover.",
      "The growth audit ends with a fixed scope and price in writing, and its fee comes off the install if we go ahead. AI usage and software bill to your own accounts.",
    ],
  },
  {
    q: "What if one of our systems has no integration?",
    a: [
      "The operator works through it in a browser, the way a person on your team would: signing in, finding the record, and reading or entering what the job needs. Where the system has a supported export or import, I use that instead, because it holds up better when the screens change.",
      "If a system can only be worked by hand and it slows down work across the business, the audit flags it as a candidate to replace.",
    ],
  },
  {
    q: "Do I need an AI consultant or can I set up agents myself?",
    a: [
      "Plenty of owners set up an agent themselves, and someone capable can get one running for a single job inside a single app. The hard part comes after that: connecting it to every system safely, deciding what it may do without approval, writing down how the business works so it makes the decisions a good employee would, and keeping it reliable once the team depends on it.",
      "If someone on the team has the time and the technical comfort for that, starting on your own is reasonable. A consultant is worth the fee when the owner's time is better spent running the business, or when the operator has to reach several systems at once and hold up in daily use.",
    ],
  },
  {
    q: "How do I choose an AI consultant?",
    a: [
      "Ask to see something running. A consultant who installs agents should be able to describe jobs an operator is doing today at a real business, which systems those jobs cross and who directs them. Then ask whose accounts it runs on and what happens to it if you stop paying. If the answer involves the consultant's own platform or subscription, the business is renting the setup rather than owning it.",
      "Look for someone who has done the work the operator will do. In a small business most of that is marketing, sales follow-up and operations, and judgment about that work matters more than familiarity with the newest model. Ask how mistakes are handled, too: logs, approvals, rollback and a written record of corrections should come with the install from the first day.",
    ],
  },
];

const ilink = (href, label) => <Link href={href} className="ilink">{label}</Link>;

const sections = [
  {
    h2: "What an AI automation consultant actually does",
    paras: [
      "An AI automation consultant takes work that people in a business do by hand across its systems and gets an AI agent doing it inside those systems, with someone on the team in charge. The titles vary, from AI automation consultant to AI agent consultant to agentic AI consultant, and so does what gets delivered. A lot of AI consulting ends with a strategy deck, a list of recommended tools, or a workshop, after which the team goes back to software the AI still can't see.",
      "What I deliver is a working operator: one agent connected to the systems the business already runs on, with standing instructions about how the business works, including its services, pricing rules, who handles what and which actions need approval. It has a browser for anything without a clean connection, so it can work through a web page the way a person would. When the pilot asks for something in plain English, the operator carries the job through every system it touches and reports back. The first job is where the install starts. After that, almost any operational work that runs through those systems can be handed to it in a sentence.",
      "Most of the consulting is in the connections: where a lead lands, what turns it into a job, which system holds the customer record and where documents get filed. It's the same handoff work I did in demand generation, where every program depended on marketing, sales and operations passing work cleanly between them.",
    ],
  },
  {
    h2: "Who I work with",
    paras: [
      "I work with owners and CEOs of small businesses, where the person deciding what the business should do is close enough to the work to direct an operator or choose who will. I don't specialize in an industry. The shape of the business matters more: work that moves through several systems, a team where the same people sell, deliver and keep the records, and an owner who wants the setup in the company's name.",
      "The work looks different from one business to the next, but underneath it's the same each time: connect the systems, write down how work moves between them, and put someone on the team in charge of the operator.",
      "It's a poor fit when nobody on the team has the time or the interest to direct it. An operator without a pilot drifts, and I would rather say so during the audit than after an install.",
    ],
  },
  {
    h2: "What gets installed and handed over",
    paras: [
      "Everything I install belongs to the business from the first day, and nothing about the operator depends on me after the handover. This is what stays with you.",
    ],
    points: [
      { title: "Your accounts", text: "The operator connects through each platform's own sign-in screens, in your company's name, and any connection can be revoked whenever you like. If every account isn't in your name when we're done, you don't pay the final invoice." },
      { title: "A machine you own", text: "It runs on hardware the business owns, so it keeps working the same way if we stop working together." },
      { title: "Standing instructions", text: "A written record of how the business works: services, pricing rules, who handles what and how customers are spoken to. When the operator gets something wrong, the correction goes in here so the same mistake doesn't come back." },
      { title: "Approvals", text: "At the start, nothing gets sent, spent or published without the pilot's sign-off. As the team sees how the operator handles things, they decide what it can do on its own." },
      { title: "Logs and version history", text: "Everything the operator does is logged, and every change to the website goes through version history, so any change can be traced and rolled back." },
      { title: "Documentation", text: "Every connection and every job is written down, so the next person to pilot it, or the next consultant, can pick it up without me." },
      { title: "A trained pilot", text: "Someone on your team who directs the operator and reviews its work. The install isn't finished until they run it without me." },
    ],
  },
  {
    h2: "Results from the work",
    paras: [
      "Across installs, new leads hear back within five minutes, a new service goes live across the site, ads and social the same day, and one founder now publishes three or four new pages a day. The same operators file documents and log sales calls into the ERP, and give a whole team one place to ask about a job, a customer or a campaign.",
      <>
        {"Two engagements are written up in full on the "}
        {ilink("/work", "work page")}
        {". At a 9-person builder that was overpaying for software by more than 90%, I migrated the CRM and website in under four weeks. At the other, the owner now runs his own marketing system."}
      </>,
      <>
        {"The jobs behind these results, and others an operator takes on, are in "}
        {ilink("/ai-agents/examples", "the full set of examples, by business function")}
        {"."}
      </>,
    ],
  },
  {
    h2: "How an engagement runs: audit, install, run it together, hand over",
    paras: [
      <>
        {"Every engagement starts with a "}
        {ilink("/growth-audit", "growth audit")}
        {". I go through the systems the business runs on and how work moves between them, and pick the job where an operator would save the most hours across the most systems. The operator takes on that one job first, and each job after it goes faster because the connections it needs are already in place. I've laid out what each side provides at each stage on "}
        {ilink("/how-it-works", "how it works")}
        {"."}
      </>,
    ],
    points: [
      { title: "1. Audit", text: "I map the systems, the handoffs between them and where the team's time goes, then name the first job. You get the findings in writing with a fixed scope and price for the install." },
      { title: "2. Install", text: "I connect each system the first job needs, write the standing instructions, set the approvals, and test the job end to end on your accounts before anyone relies on it." },
      { title: "3. Run it together", text: "I work next to the pilot on real requests. They ask, I watch what comes back, and we adjust the instructions until the results are right without me stepping in." },
      { title: "4. Hand over", text: "When the team runs it without me, I step back. From then on it's month to month with nothing locked in, whether that means help with the next job or no involvement at all." },
    ],
  },
  {
    h2: "AI consultant, agency, freelancer or packaged AI tool",
    paras: [
      "There are four common ways to get AI doing work in a small business, and each one is the right choice for somebody. The difference that matters most is who owns the result and who knows how to run it afterward.",
    ],
    points: [
      { title: "An agency", text: "An agency does the work for you, often on accounts and tools it manages, and the knowledge of how things run stays with its staff. That suits an owner who wants the work handled for good and has no interest in directing it, though most of what was learned usually leaves when the retainer ends." },
      { title: "A freelancer", text: "A freelancer is often the best value for one well-defined build, such as an automation between two tools or a chatbot on the website. You get that piece, and connecting it to everything else and deciding what it does next stays with you." },
      { title: "An off-the-shelf AI tool", text: "Packaged tools are quick to start and cheap to try, and some are very good at the one job they were built for inside the one app they live in. They can't see the rest of the business, so work that crosses systems still lands on a person." },
      { title: "An AI consultant who installs", text: "This is how I work: one operator connected to all of the systems, installed on your accounts, with a trained person directing it before I step back. It takes more setup than a packaged tool and needs someone on the team to own it, and in return the business owns an operator it knows how to run." },
    ],
  },
];

const related = [
  { href: "/ai-agents", title: "AI agents for business", text: "What the operator does once it's installed, and how one request moves through every system it touches." },
  { href: "/ai-agents/examples", title: "AI agent examples", text: "Real jobs operators run inside businesses and the systems each one crosses." },
  { href: "/work", title: "Case studies", text: "The 9-person builder whose CRM and website were migrated, and the owner who now runs his own marketing system." },
];

export default function AiConsultant() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI consultant for small businesses: one agent, installed in your systems"
      byline=", AI consultant · San Jose, California"
      lede="I'm Connor Provines, an AI consultant for small businesses. I install one AI agent, which I call an operator, inside your company and connect it to your website, ads, social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar. It runs on your accounts and a machine you own, someone on your team directs it in plain English, and I stay until they run it without me."
      small="I'm based in San Jose and work with owners across the Bay Area in person, and with businesses elsewhere remotely. Before this work I spent 12 years in B2B SaaS demand generation, building demand gen programs and managing six-figure ad budgets."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="One operator, connected to every system below on your company's accounts, with a browser for anything that has no connection."
      sections={sections}
      faqs={faqs}
      related={related}
      cta={{
        h2: "Start with a growth audit of the systems your business runs on.",
        text: "I map how work moves between those systems, name the first job I would hand to an operator, and price the install. The findings are yours whether or not we go ahead.",
      }}
      jsonLd={subpageJsonLd({ path, title, description, crumbs, faqs })}
    />
  );
}
