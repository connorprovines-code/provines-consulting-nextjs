import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../AgentsSubpage";

// /ai-agents/examples: worked examples of the operator by business function.
// Outcomes are limited to the three Connor confirmed from real installs (same day, five minutes,
// three or four pages a day). Everything else is described as how the job runs, with no figures.

const PATH = "/ai-agents/examples";
const title = "AI Agent Examples: Small Business Use Cases";
const description =
  "Real AI agent examples from small business installs: the request, the systems it ran through, what came back and who approved it, in marketing, sales and ops.";

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

const crumbs = [{ href: "/ai-agents", label: "AI agents" }, { label: "Examples" }];

const sections = [
  {
    h2: "What makes something an AI agent",
    paras: [
      "A chatbot answers from whatever you paste into it and leaves the doing to you, while an AI agent has its own access to the systems where the work lives, so it can read the lead in the CRM, check a calendar, send the reply once approved and log what it did. Each example below is an agentic workflow of that kind: one operator, connected to all of a company's systems at once, takes a single request from search data to the website, or from a sales call into the job system, without anyone moving it between them.",
    ],
  },
  {
    h2: "AI agent examples in marketing: pages, ads and social from one request",
    paras: [
      "Almost every marketing job crosses systems. A new page needs search data to choose the topic and the website to publish it, and a campaign needs the ad account, a landing page and the analytics that show whether it worked. When those steps sit with different people or agencies, a small job turns into a chain of handoffs. The pilot for this work is usually the owner or whoever runs marketing, and they approve anything that publishes or spends.",
    ],
    examples: [
      {
        title: "Taking a new service to market on launch day",
        request: "We're adding a new service. Build the page, set up search and social campaigns on the budget I give you, schedule the launch posts and report spend weekly.",
        systems: ["website", "ads", "social", "analytics"],
        result: "The operator writes the service page from the owner's notes, builds it into the site and checks it on a phone. It builds a Google Ads search campaign around the terms buyers use for that service, sets up the matching Meta campaign, and schedules launch posts on Facebook and Instagram. Conversion tracking goes on the new page's form, so the weekly report shows what each channel brought in. A new service goes live the same day.",
        approval: "The owner sets the budget. The page, the ad copy and the posts wait for the pilot's approval before anything publishes or spends.",
      },
      {
        title: "Publishing pages for the searches a site is missing",
        request: "Find the searches we should show up for and don't, and write the next pages.",
        systems: ["search", "website", "search"],
        result: "It compares what people search for in the business's field with what the site already covers and what the ranking pages include, then picks topics that fill a real gap instead of repeating an existing page. Each page is written, built into the site with links to related pages, checked on a phone-sized screen and submitted to Google for indexing through Search Console. One founder now publishes three or four new pages a day this way.",
        approval: "The pilot approves the topic list and decides whether pages publish on their own or wait for a read.",
      },
      {
        title: "Cutting ad spend on search terms that never become leads",
        request: "Go through the search terms we paid for and stop paying for the ones that don't turn into leads.",
        systems: ["ads", "analytics", "crm", "ads"],
        result: "It pulls the search terms report from Google Ads and checks each converting term against the leads that actually reached the CRM, since a counted conversion is sometimes spam or a job seeker. Terms that spent and produced nothing go on a list as proposed negative keywords or pauses, each with its spend and the reason. Approved changes are applied and noted, so the next report shows whether cost per lead moved.",
        approval: "The pilot approves the list line by line. The budget itself doesn't change without the owner.",
      },
      {
        title: "Asking past customers for Google reviews",
        request: "Ask the customers whose work we finished recently to leave us a Google review.",
        systems: ["crm", "email"],
        result: "It pulls every customer marked complete in the CRM and sends each a short request that mentions their work, with a direct link to the review form. A reply that raises a problem goes straight to a person.",
        approval: "The pilot approves the message before the first request goes out.",
      },
    ],
  },
  {
    h2: "Leads and sales: answering, logging and booking",
    paras: [
      "The first reply to an inquiry decides a lot of sales for a small company. The operator handles it from standing instructions written during the install: what the company offers, which questions it can answer, who handles which kind of work and whose calendar to book.",
    ],
    examples: [
      {
        title: "Replying to a new inquiry and booking the call",
        request: "When a lead comes in from the site or an ad, answer what they asked, offer times with the right person and book it.",
        systems: ["website", "crm", "email"],
        result: "The lead lands in the CRM with its source: the form, the ad and the page it came from. The reply answers the question they actually asked and offers open times from the calendar of whoever handles that kind of work. When they pick one, the call is booked with their details in the invite and the CRM record moves to the next stage. New leads hear back within five minutes.",
        approval: "The owner approved the reply rules and the routing at setup. A question outside them, like a custom price, gets a holding reply and goes to a person.",
      },
      {
        title: "Turning sales call notes into to-dos in the job system",
        request: "Take the notes from this afternoon's call and set up everything that came out of it.",
        systems: ["email", "crm", "erp"],
        result: "It reads the call notes, pulls out each commitment made on the call, and creates the to-dos and action items in the job system against the right customer, each with an owner. The CRM record gets a summary of the call and its next step, and the follow-up email the salesperson promised is drafted with the details they discussed.",
        approval: "The salesperson checks the action items, and the follow-up waits in their drafts until they send it.",
      },
      {
        title: "Drafting a proposal from what's already in the CRM",
        request: "Draft the proposal for the lead we met on Tuesday.",
        systems: ["crm", "email", "erp"],
        result: "It gathers the scope from the CRM notes, the call summary and the email thread, fills the company's proposal template and prices it from the rules the owner set. Anything it couldn't find, such as a measurement nobody recorded or an option the customer mentioned without choosing, is listed at the top instead of guessed.",
        approval: "The owner sets the final price and sends it.",
      },
      {
        title: "Following up on quotes that went quiet",
        request: "Who has an open quote and hasn't answered since we sent it? Draft the follow-ups.",
        systems: ["crm", "email"],
        result: "It lists every open deal with no reply since the quote, with the last contact and the amount quoted, and drafts a follow-up for each that refers to the customer's project rather than a generic check-in. Deals the customer already declined by email, but nobody updated, get closed in the CRM, which keeps the pipeline report accurate.",
        approval: "The pilot reads the drafts and sends them, one at a time or as a batch.",
      },
    ],
  },
  {
    h2: "Reporting: analytics, ads and search data in one brief",
    paras: [
      "Google Ads, GA4, Search Console, the Google Business Profile, Meta ads and the Facebook and Instagram insights each have their own dashboard, and none of them knows which leads turned into paying work. The operator reads all of them alongside the CRM, so one report can follow the money from the click to the job. Reporting is also the lowest-risk work it does, because reading changes nothing.",
    ],
    examples: [
      {
        title: "A weekly owner's report on ad spend, leads and results",
        request: "Every Monday, send me what we spent, what came in and what it turned into.",
        systems: ["ads", "analytics", "crm", "email"],
        result: "It pulls spend by campaign from Google Ads and Meta, leads by source from the CRM, and the calls booked and jobs won from those leads. The owner gets a short brief by email: what was spent, what came in, which channel produced the work, and anything that moved sharply from the week before, with the likely reason.",
        approval: "There's nothing to approve, since the report only reads. Changes it suggests, like moving budget between campaigns, wait for the owner.",
      },
      {
        title: "A monthly site and search audit on its own schedule",
        request: "Once a month, audit the site and our search performance and tell me what to fix first.",
        systems: ["website", "search", "analytics", "email"],
        result: "It crawls the site for broken links, missing titles and descriptions, slow pages and pages that fell out of Google's index, then compares Search Console impressions, clicks and positions with the month before. The report ties each issue to the pages it affects and orders the fixes by what they're likely to recover.",
        approval: "The pilot picks the fixes. The operator makes them with version history, so any change can be rolled back.",
      },
      {
        title: "A daily watchdog that checks Google can still crawl the site",
        request: "Tell me right away if anything stops Google from reading the site.",
        systems: ["website", "search", "email"],
        result: "Every day it checks that the key pages load, the sitemap is valid, robots.txt isn't blocking anything it shouldn't, and no page picked up a noindex tag in a recent change. Those are the problems that quietly take a site out of search after a redesign or a plugin update. When a check fails, the pilot gets an email naming the page and the cause.",
        approval: "It alerts a person and leaves the fix to them.",
      },
    ],
  },
  {
    h2: "Operations and finance: documents, jobs and invoices in the ERP and accounting",
    paras: [
      "Back-office work runs under tighter rules, because a misfiled document or a wrong invoice costs more than a weak social post. The operator reads freely here, writes only where the pilot has said it may, and leaves anything that touches money to the person who owns the books. Most back-office hours go to constant cross-system work: filing, matching invoices to purchase orders, answering where-is-this questions and keeping the job system current. With the books and the job system both connected, the operator also reads across them: job costs against budget, receivables by age, jobs running over.",
    ],
    examples: [
      {
        title: "Filing a document from cloud storage into the right job",
        request: "File the signed contract from the shared drive into the job it belongs to.",
        systems: ["erp"],
        result: "It opens the document, reads which customer and job it belongs to, finds that job in the ERP, attaches the file in the right place and replies with a link to the record. Staff ask for this in a sentence instead of downloading and re-uploading files between systems.",
        approval: "Filing can run without approval once the team trusts it. When a document could belong to more than one job, it asks which.",
      },
      {
        title: "Matching supplier invoices to jobs before they're paid",
        request: "Match this week's supplier invoices to their jobs and purchase orders, and flag anything that doesn't line up.",
        systems: ["email", "erp"],
        result: "It collects the invoices from the payables inbox, matches each one to its job and purchase order in the ERP, and codes the matched ones in the accounting system. An amount over the purchase order, an invoice with no matching job or a likely duplicate goes on a short list with the reason beside it.",
        approval: "The bookkeeper approves the matches before anything posts and resolves the flagged ones.",
      },
      {
        title: "Answering staff questions from the job system",
        request: "What's still open on the job we start next week, and who's the customer contact?",
        systems: ["erp", "crm"],
        result: "Everyone on the team can ask questions like this, because the assistant is connected to the ERP and accounting, the CRM, email and calendar, the ad accounts and the website. It answers from the records and links to them, so the answer comes from the system rather than from whoever happens to remember.",
        approval: "Reading needs no approval. Changing a record follows the same rules as every other job in the install.",
      },
    ],
  },
  {
    h2: "Email and calendar",
    paras: [
      "An inbox assistant that can't see the CRM or the job system can only summarize. With those connected, the operator drafts replies that already know a job's status and puts a lead's history into the meeting before anyone opens the invite.",
    ],
    examples: [
      {
        title: "Sorting the owner's inbox against the CRM and job system",
        request: "Go through my inbox. File what's handled, draft replies for what needs me, and tell me what's waiting on a decision.",
        systems: ["email", "crm", "erp"],
        result: "It links each customer email to its CRM record and job, files the threads that were already handled, and drafts replies using the job's current status, schedule and balance. What's left is a short list of threads that need the owner's decision, each with a line on what's being asked.",
        approval: "Drafts wait in the owner's drafts folder, and nothing goes out from the owner's address without them.",
      },
      {
        title: "A brief in the invite before every sales call",
        request: "Before each sales call, put the lead's history at the top of the invite.",
        systems: ["crm", "website", "email"],
        result: "For each sales call on the calendar it pulls the lead's form submission, earlier emails and any past quotes, and writes a short brief into the event notes, so the salesperson walks in knowing what the lead asked for and what was already promised.",
        approval: "Nothing reaches the lead, so there's nothing to approve.",
      },
    ],
  },
  {
    h2: "The five types of AI agents, in business terms",
    paras: [
      "Textbooks sort AI agents into five types: simple reflex, model-based reflex, goal-based, utility-based and learning agents. For an owner, the useful point is that one operator behaves as any of the five depending on the job, and each example above fits at least one of them.",
    ],
    points: [
      { title: "Reacting to a trigger (simple reflex)", text: "It responds to a condition by rule. The daily crawl check works this way: a page stops loading or picks up a noindex tag, and the pilot gets an email." },
      { title: "Keeping track (model-based)", text: "It acts on what it knows about the situation, not only on the latest input. Following up on quiet quotes depends on knowing what was quoted and whether the customer already answered somewhere else." },
      { title: "Working toward an outcome (goal-based)", text: "It plans the steps to a stated result. Taking a new service to market means working out the page, the campaigns, the posts and the tracking, in order, from one request." },
      { title: "Weighing trade-offs (utility-based)", text: "It chooses the best of several workable options. Deciding which search terms to cut is a judgment about cost and benefit, not a yes or no." },
      { title: "Improving from corrections (learning)", text: "It changes how it works from feedback. When the pilot corrects it, the correction goes into its standing instructions, so the same mistake doesn't come back." },
    ],
  },
  {
    h2: "Choosing your first use case",
    paras: [
      "The first job sets up the connections and teaches the team how to direct the operator, so it matters more than the ones after it. A job where a mistake reaches a customer or moves money makes a better second or third job, once the pilot has seen how the operator works. Reporting and lead response make good first jobs for that reason: one only reads, and the other runs on rules approved up front.",
      <>
        The <Link href="/work" className="ilink">case studies</Link> show where a first job has led,
        including a home builder that was overpaying for software and an owner-run company that now
        runs its own marketing system.
      </>,
    ],
    points: [
      { title: "It crosses systems and costs real hours", text: "Work inside one app is already served by that app's own tools. The hours go into the handoffs between systems." },
      { title: "Someone does it today", text: "The person who does the job now knows what good output looks like, and is the natural pilot for it." },
      { title: "The rules can be written down", text: "The operator needs what a new hire would: pricing, routing, tone and what needs approval. A job nobody can explain should wait." },
      { title: "The output is easy to check", text: "A report, a draft or a filed document can be checked at a glance. What it does on its own can widen as the team's confidence grows." },
    ],
  },
];

const faqs = [
  {
    q: "What are some examples of AI agents?",
    a: [
      "Familiar ones include customer service bots that answer on a website, coding assistants that read and edit software, ChatGPT's agent mode browsing on someone's behalf, and scheduling assistants that book meetings over email. Each acts on its own inside one environment.",
      "Inside a small business, the examples that pay off cross systems: answering a new lead and booking the call, taking a new service live across the website, ads and social, a weekly report on spend and leads, and filing documents into the right job in the ERP. One operator connected to all of those systems can run every one of them.",
    ],
  },
  {
    q: "What are the 5 types of AI agents?",
    a: [
      "The standard five are simple reflex, model-based reflex, goal-based, utility-based and learning agents. They describe how an agent decides: by a fixed rule, by tracking what has happened, by planning toward a goal, by weighing options, or by improving from feedback.",
      "In a business these aren't five products to buy. One well-connected operator behaves as each of them depending on the job, from a crawl alert that fires by rule to a service launch it plans toward a goal.",
    ],
  },
  {
    q: "Is ChatGPT an AI agent?",
    a: [
      "It's barely one in the sense a business needs. Most people use the chat, which works from what you paste in and hands the doing back to you. Its agent mode can browse and click through a few connected apps, but it's still a session you start and watch, with no standing knowledge of how your business works.",
      "An operator lives inside the business instead. It runs on the company's own accounts, stays connected to the website, ads, CRM, ERP and email, and keeps standing instructions about services, pricing rules and who approves what. That's what lets it run the jobs above without someone rebuilding the context each time.",
    ],
  },
  {
    q: "What can AI agents do for a small business?",
    a: [
      "They can take on the operational work that runs between systems: answering and booking new leads, running and reporting on ad campaigns, publishing website pages, keeping the CRM current, filing documents and drafting invoices in the ERP and accounting, and turning the numbers into a report the owner reads.",
      "They don't decide what the business should do. Someone on the team directs the operator, approves anything that spends money, publishes or reaches a customer, and widens what it can do alone as they see how it handles the work.",
    ],
  },
  {
    q: "What is an agentic workflow?",
    a: [
      "An agentic workflow is a job an AI agent carries out in several steps, using what it finds at each step to decide the next, usually across more than one system. A fixed automation in a tool like Zapier runs the same recipe every time and stalls when an input doesn't fit, while an agentic workflow reads the input and adapts.",
      "Answering a lead is a typical example. The agent reads the inquiry, logs it in the CRM, works out who should take it, checks that person's calendar, writes a reply that fits the question and books the call. Existing automations can stay in place, with the operator taking the steps that need reading and judgment.",
    ],
  },
];

const related = [
  { href: "/ai-agents", title: "AI agents for business", text: "The full operator: how one agent connects to every system a business runs, who pilots it, and what an install involves." },
  { href: "/ai-agents/chief-of-staff", title: "An AI chief of staff for the owner", text: "The same operator pointed at the owner's own work: the inbox, the calendar, the follow-ups and the numbers that need a decision." },
  { href: "/work", title: "Case studies", text: "What the work looked like from start to finish at client businesses, and what each team runs on its own now." },
];

const jsonLd = subpageJsonLd({ path: PATH, title, description, crumbs, faqs });

export default function AiAgentExamples() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI agent examples: real jobs one agent runs inside a small business"
      lede="These are jobs one AI operator runs inside the small businesses where I install it: a single agent connected to the website, ads, social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar, directed by someone on the team in plain English. Each example gives the request, the systems the work runs through, what comes back and who approves it."
      small="Most of them run at client businesses today. The rest are jobs the same connections handle when a team asks for them."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="The examples run through every system the operator is connected to, and most single jobs cross several of them."
      sections={sections}
      faqs={faqs}
      faqIntro="The questions owners ask when they look at examples like these, with the answers I give them."
      related={related}
      cta={{
        h2: "The first example worth running in your business is the one the audit finds.",
        text: (
          <>
            The <Link href="/growth-audit" className="ilink">growth audit</Link> goes through the systems
            your business runs on and how work moves between them, then picks the job where an operator
            would save the most hours across the most systems. The install starts there, and every job
            after it reuses the connections the first one put in place.
          </>
        ),
      }}
      jsonLd={jsonLd}
    />
  );
}
