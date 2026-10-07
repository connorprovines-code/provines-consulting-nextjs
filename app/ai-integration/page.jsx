import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../ai-agents/AgentsSubpage";

// /ai-integration: "ai integration services" (primary), "ai implementation services" and "ai implementation
// consultant" (secondary). Owns what gets connected, how access works, approvals, the browser path and
// what the team runs after the handover. Names what the operator touches, never how. Results are limited
// to the three Connor confirmed from real installs.

const PATH = "/ai-integration";
const title = "AI Integration Services for Small Businesses";
const description =
  "AI integration services for small businesses: one AI agent connected to your website, ads, CRM, ERP and email, on your own accounts, with approvals.";

export const metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${title} | Provines Consulting`,
    description,
    url: `https://www.provinesconsulting.com${PATH}`,
    images: [{ url: "/og/ai-agents.png", width: 1200, height: 630, alt: "An AI operator console wired to a business's website, ads, social, analytics, CRM, ERP and email" }],
  },
  twitter: {
    title: `${title} | Provines Consulting`,
    description,
    images: ["/og/ai-agents.png"],
  },
};

const crumbs = [{ href: "/", label: "Home" }, { label: "AI integration" }];

const ilink = (href, label) => <Link href={href} className="ilink">{label}</Link>;

const sections = [
  {
    h2: "What AI integration means for a small business",
    paras: [
      "In enterprise IT, AI integration usually means building models into a company's own products or data pipelines, and the firms selling AI integration services staff large projects to match. A small business bought its software rather than built it, so the useful version of AI integration is an AI agent working inside the website, the CRM, the ad accounts and the books the business already runs on.",
      "Most of those systems now ship an AI feature of their own: the CRM drafts emails, the ad platform suggests headlines, the accounting software sorts transactions. Each feature sees only its own app, so the work between systems, which is where a small team loses its hours, still runs through a person copying from one screen to another. Integrating one agent with all of them at once lets a request start with a form on the website and end with a booked call, with the CRM updated along the way.",
    ],
  },
  {
    h2: "What gets connected, and what the operator does there",
    paras: [
      "A connection means the operator can read what a system holds and, within the limits you set, make changes there the way someone on your team would. These are the systems an install connects, and the work each connection makes possible.",
    ],
    points: [
      { title: "Website", text: "It edits and publishes pages, fixes broken links and missing metadata, adds tracking to forms, and checks each change on a phone-sized screen before it goes live. Every edit goes through version history, so a bad one can be undone." },
      { title: "Ad and social accounts", text: "Campaigns, budgets, keywords and audiences in the Google and Meta ad accounts, and posts on the business's social pages. The same connection that builds a campaign also reads its performance, so the operator can prune what isn't working as well as launch what's new." },
      { title: "Analytics and search data", text: "Traffic, conversions, rankings and the searches the site appears for. These connections mostly read, and they are what lets the operator say whether a page or a campaign actually did anything." },
      { title: "CRM", text: "Leads, contacts, deals and their history. The operator logs each new lead with its source, moves deals between stages, and reads a customer's whole record before it drafts anything to them." },
      { title: "ERP and accounting", text: "Jobs, documents, purchase orders and invoices. Back-office connections usually start read-only and gain write access as each kind of change proves itself, and anything involving money stays with whoever keeps the books." },
      { title: "Email and calendar", text: "The shared inbox, the owner's inbox if they want it included, and the team's calendars. This is how the operator's work reaches people: replies, invites and reports go out from here once they're approved." },
    ],
  },
  {
    h2: "Access on your accounts, approval before anything goes out",
    paras: [
      "Every connection is authorized from inside the platform it belongs to, in the company's name, by someone who already has admin rights there. Each one shows up in that platform's own settings, so it can be removed there without affecting the rest. The operator itself runs on a machine the business owns, and the AI usage and software it works through bill to the company directly. If we stop working together, nothing needs migrating or handing back, because none of it ever sat outside the business.",
      "Being connected and being allowed to act are separate settings. From the first day the operator can read everything it's connected to, while what it may change on its own is granted action by action. At the start, nothing that sends to a customer, spends money or publishes in the company's name goes out before someone on your team approves it. Every action lands in a log that names the system, the record and the request it came from.",
    ],
  },
  {
    h2: "Systems with no connection: the browser path",
    paras: [
      "Plenty of small businesses depend on software that offers no connection at all: an older job-costing system, a supplier portal, an insurer's website, an industry tool that was never built to connect to anything. Integration doesn't stop at those. The operator has its own browser, logged in under a company-owned account, and works those screens the way a staff member would, reading what's on the page and entering what the job needs.",
      "Browser work is slower than a direct connection and more sensitive to a redesigned screen, so it's the route for systems with nothing better, and its results get checked more closely. It runs under the same logs and approval rules as everything else the operator does.",
    ],
  },
  {
    h2: "AI integration vs AI implementation",
    paras: [
      "The two terms get used interchangeably, but they describe different amounts of work. Integration is the connections: the operator can reach a system and act in it. Implementation is everything that makes those connections get used: written instructions about how the business works, the approval rules, a person on the team trained to direct the operator, and enough real requests run together that directing it becomes part of their day.",
      <>
        {"Many AI implementation services end at a working connection or a pilot project and leave the rest to the client. That's the point where a lot of AI projects stall, because a connected agent that nobody directs does nothing. I do both, and an engagement isn't finished until your team runs the operator without me. How that goes from the first audit to the handover is laid out in "}
        {ilink("/ai-consultant", "working with an AI consultant")}
        {"."}
      </>,
    ],
  },
  {
    h2: "What your team runs after the handover",
    paras: [
      "After the handover, someone on your team directs the operator by typing what they want and reviewing what comes back. Because every system is already connected, most new jobs need no new integration work, only instructions for how the business wants the job done and a decision about what needs approval. When a platform changes, the documentation shows which connection is affected, whether your team updates it or I do.",
      "Each result so far depends on more than one connection. New leads hear back within five minutes because the website, the CRM and the calendar are all within the operator's reach. A new service goes live the same day because the site, the ad accounts and the social pages can be worked in one run. One founder now publishes three or four new pages a day with search data and the website connected together.",
      <>
        {"Those jobs and others are written out in the "}
        {ilink("/ai-agents/examples", "AI agent examples")}
        {", with the systems each one crosses, and the recurring work it takes over once connected is covered under "}
        {ilink("/ai-automation", "AI automation services")}
        {"."}
      </>,
    ],
  },
];

const faqs = [
  {
    q: "What are examples of AI integration?",
    a: [
      "In a small business, the useful examples connect two or more systems in a single job. A lead arrives through the website form, gets logged in the CRM with its source, receives a reply that answers the question, and ends up on the right person's calendar. Notes from a sales call become action items in the job system and a follow-up in the salesperson's drafts. Search data picks the topics for new pages, and the website publishes them. Ad spend gets checked against the leads that showed up in the CRM.",
      "Each of those used to be a person moving information between screens. With the systems integrated, the operator moves it and a person approves the result.",
    ],
  },
  {
    q: "How do I integrate AI into my business?",
    a: [
      "Start from one job rather than from a product. Pick work that crosses several systems, happens every week, and that someone can explain well enough to write down. Connect the systems that job touches, write the instructions and approval rules, and run it next to the person who does it today until the results hold without corrections.",
      "The second job is easier than the first, because most of the systems it needs are already connected. That's why choosing the first job matters more than choosing an AI product.",
    ],
  },
  {
    q: "How much does AI integration cost?",
    a: [
      "Most of the cost is connection work, so it scales with the systems the first job needs and the state they're in. A well-documented platform connects quickly. An older system the operator has to work through a browser, or a CRM whose records need cleaning before anything can rely on them, takes longer. Later jobs reuse those connections, so most of that work is done once.",
      "The growth audit prices the install in writing before any integration work starts. After that, the running costs are AI usage and the software the operator works through, both billed to your own accounts.",
    ],
  },
  {
    q: "What does an AI implementation consultant do?",
    a: [
      "Takes AI from a decision to something the team uses every day. That means choosing the first job, connecting the systems it needs, recording how the business runs, from pricing rules to who handles what, so the AI has what a new hire would be told, putting approvals and logs around anything risky, and training the person who will direct it.",
      "The test of the work is whether the team keeps using it after the consultant steps away. A roadmap or a pilot project can be useful, but on its own it leaves that part to the business.",
    ],
  },
];

const related = [
  { href: "/ai-agents", title: "AI agents for business", text: "The operator once it's connected: one agent working across every system a business runs on, directed by someone on the team." },
  { href: "/ai-automation", title: "AI automation services", text: "The recurring work the operator takes over once the systems are connected, and how an agent differs from rules-based automation." },
  { href: "/ai-consultant", title: "Working with an AI consultant", text: "The engagement behind an install: the audit, the work alongside your pilot, and what changes hands at the end." },
];

export default function AiIntegration() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI integration services: one agent connected to the systems your business already runs"
      lede="AI integration for a small business means connecting an AI agent to the software you already pay for, so it can do the work there instead of describing it. I connect one agent, which I call an operator, to your website, ads, social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar, on your company's accounts, and stay until someone on your team directs it in plain English."
      small="Each system is connected through its own sign-in, in your company's name. Anything that sends, spends or publishes waits for approval until your team decides otherwise."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="Integration connects the operator to each of these on your accounts. Where a system has no connection, it uses a browser."
      sections={sections}
      faqs={faqs}
      related={related}
      cta={{
        h2: "Integration starts with the job that needs it.",
        text: (
          <>
            The <Link href="/growth-audit" className="ilink">growth audit</Link> goes through the systems your
            business runs on, finds the job where an operator would save the most hours, and names the
            connections that job needs. You get the scope and the price of the install in writing before any
            connection work starts.
          </>
        ),
      }}
      jsonLd={subpageJsonLd({ path: PATH, title, description, crumbs, faqs, serviceType: "AI integration services" })}
    />
  );
}
