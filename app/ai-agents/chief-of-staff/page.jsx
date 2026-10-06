import AgentsSubpage, { subpageJsonLd } from "../AgentsSubpage";

const PATH = "/ai-agents/chief-of-staff";
const TITLE = "AI Chief of Staff for Business Owners";
const description =
  "An AI chief of staff connected to the CRM, ads, website, ERP, accounting and email, so an owner's requests get done in those systems, not just summarized.";

export const metadata = {
  title: TITLE,
  description,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Provines Consulting`,
    description,
    url: `https://www.provinesconsulting.com${PATH}`,
    images: [{ url: "/og/ai-agents.png", width: 1200, height: 630, alt: "An AI operator console connected to a business's website, ads, CRM, ERP and accounting, and email" }],
  },
  twitter: {
    title: `${TITLE} | Provines Consulting`,
    description,
    images: ["/og/ai-agents.png"],
  },
};

const crumbs = [{ href: "/ai-agents", label: "AI agents" }, { label: "AI chief of staff" }];

const sections = [
  {
    h2: "What an AI chief of staff is, and what it isn't",
    paras: [
      "A human chief of staff makes sure the owner's decisions turn into finished work: they take a request, work out who and what it involves, follow it through, and come back when it's done or needs a decision. An AI chief of staff is useful to the extent that it can do the same across the systems the business runs on.",
      "Most of what gets written under the name describes something narrower: an assistant connected to email and calendar that summarizes the inbox, prepares a morning briefing and drafts replies. That helps an owner whose day runs through the inbox, but it stops at telling the owner about the work. It can report that a proposal is overdue. It can't open the CRM notes, write the proposal and put it in front of the owner to approve.",
      "The chief of staff I install is one agent connected to the website, ad and social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar, with a browser for anything without a connection. It runs on the company's own accounts and keeps standing instructions about how the business works: who handles what, which pricing rules apply and what needs approval. Given a request, it does the work in whichever systems are involved and reports back with the result and anything it couldn't settle on its own.",
      "It doesn't decide what the business should do, build relationships with clients or staff, or make the judgment calls an owner would hire a senior person to make. Its job is to carry out decisions and to put the facts for the next one in front of the owner.",
    ],
  },
  {
    h2: "Chief of staff, executive assistant and chatbot",
    paras: [
      "The three terms get used interchangeably, and the difference shows up in what happens after a request is made. A chatbot hands back text for someone to act on, an executive assistant acts inside email and calendar, and a chief of staff acts in whichever system the request needs.",
    ],
    points: [
      {
        title: "A chatbot",
        text: "A general assistant like ChatGPT works from whatever is pasted into it. It writes and summarizes well, but it can't see the CRM, the ad accounts or the books unless someone copies the data in, and the doing goes back to a person.",
      },
      {
        title: "An AI executive assistant",
        text: "An assistant connected to email and calendar that sorts the inbox, drafts replies, schedules meetings and prepares briefings. Most products sold as an AI executive assistant or AI business assistant sit here, and so do most of the AI chief of staff setups described online.",
      },
      {
        title: "An AI chief of staff",
        text: "An agent connected to the systems the business runs on as well as the owner's inbox. Asked to get a proposal out to a client, it reads the CRM notes, writes the proposal, attaches it to the deal, drafts the cover email and waits for approval to send it.",
      },
    ],
  },
  {
    h2: "A week of requests from an owner",
    paras: [
      "Requests an owner makes in an ordinary week, written the way they get typed. Several come directly from installs I've done, and the rest are jobs the same setup handles as a matter of course.",
    ],
    examples: [
      {
        title: "The Monday brief",
        request: "What do I need to know this week?",
        systems: ["crm", "ads", "analytics", "erp", "email"],
        result: "A brief built from the live systems rather than the inbox: deals that moved or stalled in the CRM, ad spend and the leads it brought in, invoices due or unpaid in accounting, and the week's meetings, each with a note on what's open with that person.",
        approval: "Nothing to approve, since it only reads.",
      },
      {
        title: "Turning a sales call into next steps",
        request: "Turn this morning's call notes into next steps.",
        systems: ["email", "crm", "erp"],
        result: "The notes became a summary on the contact in the CRM and action items on the job in the job system, each with an owner and a due date, along with a drafted follow-up to the client recapping what was agreed.",
        approval: "The follow-up waits for the owner to send it.",
      },
      {
        title: "Filing a document into the right job",
        request: "The signed contract for the new client is in the shared drive. File it under their job.",
        systems: ["erp"],
        result: "It found the document in cloud storage, matched it to the client's job, filed it in the ERP under the right document type, and replied with a link to where it landed.",
      },
      {
        title: "A proposal from the CRM notes",
        request: "Write up the proposal for the client we met with on Tuesday.",
        systems: ["crm", "erp", "email"],
        result: "It pulled the discovery notes and scope from the CRM, priced the work from the standing pricing rules and the line items in accounting, drafted the proposal in the company's template, and attached it to the deal with a cover email.",
        approval: "The owner reviews both before anything goes out.",
      },
      {
        title: "Chasing overdue invoices",
        request: "Send reminders on everything past due.",
        systems: ["erp", "crm", "email"],
        result: "It listed every past-due invoice from accounting, checked the CRM for conversations that explained a delay, and drafted a reminder for each of the rest with the invoice attached.",
        approval: "Reminders go out once the owner approves the list, and clients marked for a personal call are left off it.",
      },
      {
        title: "Moving a meeting",
        request: "Push Thursday's planning meeting to next week and let everyone know.",
        systems: ["email", "crm"],
        result: "It checked the attendees' calendars, moved the meeting to the first slot that worked for everyone, sent each person the new time, and logged the change on the client record in the CRM.",
      },
      {
        title: "A new service, live the same day",
        request: "We're adding a new service. Get the page, ads and social posts live today.",
        systems: ["website", "ads", "social", "analytics"],
        result: "The landing page was written and published, ad campaigns built with a budget set, social posts created and scheduled, and reporting set up to show what the spend brought in. At the install where this runs, a new service now goes live the same day.",
        approval: "The owner signs off on the page and the budget first.",
      },
      {
        title: "The weekly ad report",
        request: "Send me the ad numbers every week.",
        systems: ["ads", "analytics", "crm", "email"],
        result: "Each week since, a report of ad spend, leads and results reaches the owner's inbox, with each lead matched to its outcome in the CRM so spend is tied to booked work rather than clicks.",
      },
    ],
  },
  {
    h2: "What it needs access to, and what stays with the owner",
    paras: [
      "It needs the access a trusted senior hire would get, across every system listed above. Each connection is granted through the platform's own sign-in screen, in the company's name, and can be revoked on its own. Where a tool has no connection, the operator works through a browser signed in with an account the company controls.",
      "Access and authority are set separately. It can read everything it's connected to from the start, and what it may do on its own is decided one kind of action at a time, starting with a short list.",
    ],
    points: [
      {
        title: "Waits for approval",
        text: "Anything that spends money, reaches a client or customer, or publishes in the company's name, such as ad budgets, client email, invoices, proposals and website changes. The owner or the pilot sees the draft and approves it.",
      },
      {
        title: "Runs on its own once trusted",
        text: "Jobs the owner has watched it handle well and chosen to hand over, such as filing documents, logging call notes, keeping the CRM current, answering new leads and sending the weekly reports.",
      },
      {
        title: "Stays with the owner",
        text: "Hiring, pricing, which clients to take on, how to handle a difficult conversation, and any decision where the right answer depends on a relationship. The operator can gather what these decisions need. It doesn't make them.",
      },
      {
        title: "Logged and reversible",
        text: "Every action is logged, website changes can be rolled back through version history, and corrections go into its standing instructions so a mistake doesn't repeat.",
      },
    ],
  },
  {
    h2: "Can it replace a human executive assistant?",
    paras: [
      "It takes on most of the systems work an executive assistant or operations person does: updating the CRM, filing documents, scheduling, chasing invoices, building reports and drafting routine correspondence. That's where the hours go, and the operator does it faster and keeps follow-ups moving in a busy week.",
      "Some of it runs without anyone asking. At one install, new leads hear back within five minutes with a reply that answers what they asked, offers times from the right person's calendar and books the call. Elsewhere, a monthly site and search audit runs on its own schedule and lands as a report. It also reaches work an assistant was never hired for: the agent that moves a meeting can build an ad campaign or publish a page, and one founder now publishes three or four new pages a day by directing it.",
      "It doesn't replace what a good assistant does with people. Sensing that a client is unhappy before they say so, handling friction between two people, deciding which urgent thing the owner sees first and representing the owner in a room all depend on judgment and relationships, and a person does them better.",
      "The setup that works best keeps the person and changes how they spend the day. Instead of copying information between systems, they direct the operator, check its work, and put the time it frees into the parts of the job that need a person.",
    ],
  },
  {
    h2: "Setting one up yourself vs having an operator installed",
    paras: [
      "An owner comfortable with software can build a useful AI executive assistant without help. The mainstream assistants connect to email, calendar and documents through their own settings, and with patience they can reach a CRM or an accounting system too. For inbox triage, meeting prep and a daily briefing, that works well and is a sensible place to start.",
      "The work grows as the assistant moves from reading to doing. Every system needs its own connection and permissions, and the assistant needs written instructions about how this business works, or it fills the gaps with plausible guesses that are wrong for the company. Actions that spend money or reach clients need an approval step and a log, and all of it needs maintaining as the tools and the business change. That is achievable, and it competes with running the business for the owner's time.",
      "An installed operator is the same idea with that work done by someone who has done it before. I connect each system, write down how work moves between them and what needs approval, test it on real jobs, and run it alongside whoever will pilot it until directing it is routine. It runs on the company's accounts and machine, so nothing depends on me once the install is finished.",
      "The deciding question is scope. A do-it-yourself assistant covers a better inbox and a morning briefing. An agent that carries out requests across the CRM, ads, website and accounting, with approvals and logs in place, is mostly connections and instructions, and that's the part an install covers.",
    ],
  },
];

const faqs = [
  {
    q: "What is an AI chief of staff?",
    a: [
      "An agent that takes an owner's requests and carries them through to finished work, the way a human chief of staff turns decisions into results. Many setups sold under the name are an assistant connected to email and calendar that writes briefings and drafts replies. The version I install is also connected to the CRM, ad accounts, website, analytics, ERP and accounting, so it does the work a request calls for instead of reporting on it.",
    ],
  },
  {
    q: "Can an AI be an executive assistant?",
    a: [
      "For the systems side of the job, yes. Connected to email and calendar, an AI can sort the inbox, draft replies, schedule and reschedule meetings, prepare briefings and keep notes. Connected to the CRM and accounting as well, it can log calls, chase invoices and keep records current.",
      "The people side is different. Reading a room, managing relationships and deciding what matters most when priorities conflict stay with a person.",
    ],
  },
  {
    q: "What tasks can an AI chief of staff handle?",
    a: [
      "Anything that runs through a connected system and can be described in a sentence: briefings built from the CRM, ads and accounting; proposals drafted from CRM notes; overdue invoices chased; meetings moved and attendees notified; documents filed into the right job; call notes turned into action items; new leads answered and booked; and campaigns, pages and social posts set up and reported on.",
      "It saves the most time on work that crosses several systems, which takes longest by hand and is the easiest to drop.",
    ],
  },
  {
    q: "Is an AI chief of staff safe with company data?",
    a: [
      "That depends on where it runs and what it's allowed to do. The operator I install runs on the company's own accounts, on a machine the company owns, and every connection can be revoked at any time.",
      "Every action is logged, website changes can be rolled back, and at the start nothing that spends money, reaches a client or publishes in the company's name happens without approval. The owner decides what it can do on its own as they see how it handles things.",
    ],
  },
  {
    q: "Who directs it day to day?",
    a: [
      "The owner, or someone on the team the owner trusts to act for them. Directing it takes no technical skill: the pilot types what they want in plain English and reviews what comes back. Some owners direct it themselves, and others hand the day-to-day piloting to an office or operations manager and keep the approvals for themselves.",
    ],
  },
];

const related = [
  {
    href: "/ai-agents",
    title: "AI agents for business",
    text: "The full operator: one agent connected to every system a business runs on, and how an install works.",
  },
  {
    href: "/ai-agents/examples",
    title: "AI agent examples",
    text: "More jobs the operator runs inside small businesses, from answering new leads to filing documents in the ERP.",
  },
  {
    href: "/ai-consultant",
    title: "Working with an AI consultant",
    text: "What an engagement looks like, from the growth audit to the day the team runs the operator without me.",
  },
];

export default function ChiefOfStaff() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI chief of staff: an agent that runs the business systems, not just the inbox"
      lede="An AI chief of staff takes an owner's requests and carries them out. Most versions read email and calendar and write a briefing. The one I install is also connected to the CRM, ad accounts, website, ERP and accounting, so a request gets done in those systems and comes back as a result to review."
      small="It runs on the company's own accounts, on a machine the company owns. Anything that spends money or reaches a client waits for the owner's approval until the owner decides otherwise."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="An owner's requests run through every system the business uses, so the chief of staff is connected to all of them."
      sections={sections}
      faqs={faqs}
      faqIntro="These are the questions owners ask me about an AI chief of staff, with the answers I give them."
      related={related}
      cta={{
        h2: "The install starts with the work that costs the owner the most time.",
        text: "The growth audit goes through the systems the business runs on and how work moves between them, and picks the job where an operator would save the most hours. That job gets connected and handed to the pilot first, and the rest of the chief of staff work builds on the connections it puts in place.",
      }}
      jsonLd={subpageJsonLd({ path: PATH, title: TITLE, description, crumbs, faqs })}
    />
  );
}
