import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../AgentsSubpage";

const PATH = "/ai-agents/chief-of-staff";
const TITLE = "AI Chief of Staff for Business Owners";
const description =
  "An AI chief of staff does what an AI executive assistant does in email and calendar, then carries the work into the CRM, ads, website, ERP and accounting.";

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
      "The chief of staff I install is one agent connected to the website, ad and social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar, with a browser for anything without a connection. It does what an AI executive assistant does in email and calendar, then carries on into the CRM, the ads, the website and the books. It runs on the company's own accounts and keeps standing instructions about how the business works: who handles what, which pricing rules apply and what needs approval. Given a request, it does the work in whichever systems are involved and reports back with the result and anything it couldn't settle on its own.",
      "It doesn't decide what the business should do, build relationships with clients or staff, or make the judgment calls an owner would hire a senior person to make. Its job is to carry out decisions and to put the facts for the next one in front of the owner.",
    ],
  },
  {
    h2: "AI executive assistant vs AI chief of staff",
    paras: [
      "The two overlap in email and calendar, and the difference shows up in what happens after a request is made. A chatbot like ChatGPT sits a step before both: it writes what it's asked for and hands the doing back to a person.",
    ],
    points: [
      {
        title: "An AI executive assistant",
        text: "Works in the owner's email and calendar. It sorts the inbox, drafts replies, schedules meetings and prepares briefings, and for an owner whose day runs through the inbox it covers a lot of ground. Most products sold as an AI executive assistant or AI business assistant work this way, with their reach ending at the inbox and the calendar.",
      },
      {
        title: "An AI chief of staff",
        text: "Does the same work in email and calendar and is connected to the CRM, ads, website, ERP and accounting as well. When a client emails asking for a revised quote, it pulls the quote from the CRM, revises it, and puts the new version and the reply in front of the owner to approve.",
      },
    ],
  },
  {
    h2: "A week of requests from an owner",
    paras: [
      "Requests an owner makes in an ordinary week, written the way they get typed, with the systems each one runs through and what comes back.",
    ],
    examples: [
      {
        title: "The Monday brief",
        request: "What do I need to know this week?",
        systems: ["crm", "ads", "analytics", "erp", "email"],
        result: "It builds a brief from the live systems: deals that moved or stalled in the CRM, ad spend and the leads it brought in, invoices due or unpaid in accounting, and the week's meetings, each with a note on what's open with that person.",
        approval: "Nothing to approve, since it only reads.",
      },
      {
        title: "Checking what the team committed to",
        request: "What did my team commit to in Monday's meeting, and what's slipped?",
        systems: ["email", "crm", "erp"],
        result: "It takes each commitment from the meeting notes and checks it against the CRM, the job system and sent mail, then lists what's done, what's late and who owns each item.",
        approval: "It only reports. Whether to nudge anyone about a late item is the owner's call.",
      },
      {
        title: "Getting the inbox down to what needs the owner",
        request: "Sort my inbox. What actually needs me?",
        systems: ["email", "crm", "erp"],
        result: "It reads each message against the CRM and the job system and sorts the inbox into what needs the owner, what it can answer from the records, and what can wait. Messages that need the owner come with a line on what's being asked, and the ones it can answer come with a drafted reply.",
        approval: "Replies go out from the owner's address only once the owner approves them, unless that kind of reply has been handed over.",
      },
      {
        title: "Ready for a sales call",
        request: "Get me ready for this afternoon's sales call.",
        systems: ["crm", "erp", "email"],
        result: "It writes a brief into the calendar invite: who the prospect is and what their company does, every past conversation and form submission in the CRM, any open quotes and where they stand, and the questions left unanswered at the last contact.",
      },
      {
        title: "What was promised to a client",
        request: "Before I call them back, what have we promised this client?",
        systems: ["email", "crm", "erp"],
        result: "It gathers every commitment made to that client across email threads, CRM notes and the job record, including prices quoted, dates given and extras agreed to, and lists each one with where it was made and whether it has been kept.",
      },
      {
        title: "Chasing overdue invoices",
        request: "Send reminders on everything past due.",
        systems: ["erp", "crm", "email"],
        result: "It lists every past-due invoice from accounting, checks the CRM for conversations that explain a delay, and drafts a reminder for each of the rest with the invoice attached.",
        approval: "Reminders go out once the owner approves the list, and clients marked for a personal call are left off it.",
      },
      {
        title: "Moving a meeting",
        request: "Push Thursday's planning meeting to next week and let everyone know.",
        systems: ["email", "crm"],
        result: "It checks the attendees' calendars, moves the meeting to the first slot that works for everyone, sends the new time, and logs the change on the client record in the CRM.",
        approval: "Internal attendees get the new time directly. A client's notice waits for the owner unless rescheduling has been handed over.",
      },
      {
        title: "A package for the bank",
        request: "The bank wants an updated package before we talk about the credit line. Put it together.",
        systems: ["erp", "crm"],
        result: "It pulls receivables by age and job margins from accounting and the ERP, adds the open pipeline from the CRM, and assembles them in the format the lender asked for, with a note on any figure likely to draw a question.",
        approval: "The owner reviews the package and sends it. Nothing goes to the lender from the operator.",
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
        text: "Jobs the owner has watched it handle well and chosen to hand over, such as clearing routine mail, moving internal meetings, keeping the CRM current and answering routine questions from the records.",
      },
      {
        title: "Stays with the owner",
        text: "Hiring, pricing, which clients to take on, how to handle a difficult conversation, and any decision where the right answer depends on a relationship. The operator can gather what these decisions need. It doesn't make them.",
      },
    ],
  },
  {
    h2: "Can it replace a human executive assistant?",
    paras: [
      "It takes on most of the systems work an executive assistant or operations person does: updating the CRM, filing documents, scheduling, chasing invoices, building reports and drafting routine correspondence. That's where the hours go, and the operator does it faster and keeps follow-ups moving in a busy week.",
      "Some of it runs without anyone asking. At one install, new leads hear back within five minutes with a reply that answers what they asked, offers times from the right person's calendar and books the call. Elsewhere, a monthly site and search audit runs on its own schedule and lands as a report. It also reaches work an assistant was never hired for: the agent that moves a meeting can build an ad campaign or publish a page, and one founder now publishes three or four new pages a day by directing it.",
      "What changes is the assistant's job. The setup that works best keeps the person and moves their day away from copying information between systems, toward directing the operator, checking its work and handling the parts of the role that rest on knowing people.",
    ],
  },
  {
    h2: "Setting one up yourself vs having one installed",
    paras: [
      <>
        An owner comfortable with software can set up a useful AI executive assistant in email and calendar without
        help, and for inbox triage and meeting prep that&apos;s a sensible place to start. Taking it into the CRM, the
        ads, the website and accounting means connecting each system, writing down how the business works, putting
        approvals and logs around anything that spends money or reaches a client, and maintaining all of it as the
        tools change. The trade-offs between building that yourself and having it installed are laid out in{" "}
        <Link href="/ai-consultant" className="ilink">working with an AI consultant</Link>.
      </>,
    ],
  },
];

const faqs = [
  {
    q: "What is an AI chief of staff?",
    a: [
      "An agent that takes an owner's requests and carries them through to finished work, the way a human chief of staff turns decisions into results. The version I install works in email and calendar and is connected to the CRM, ad accounts, website, analytics, ERP and accounting, so a request ends with the work done in those systems and a result for the owner to review.",
    ],
  },
  {
    q: "Can an AI be an executive assistant?",
    a: [
      "Yes, for the work that runs through email and calendar. An AI can sort the inbox, draft replies, schedule and reschedule meetings, prepare briefings and keep notes. Connected to the CRM and accounting as well, it can answer questions from the records, chase invoices and keep the records current.",
    ],
  },
  {
    q: "What tasks can an AI chief of staff handle?",
    a: [
      "The owner's own requests: a weekly brief from the CRM, ads and accounting; checking what the team committed to and what slipped; sorting the inbox down to what needs the owner; preparing for sales calls; pulling together what was promised to a client; assembling a package for the bank; chasing overdue invoices; and moving meetings with everyone notified.",
      "It saves the most time on requests that cross several systems, which take longest by hand and are the easiest to drop.",
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
      lede="An AI chief of staff takes an owner's requests and carries them out. The one I install is connected to the CRM, ad accounts, website, ERP and accounting as well as email and calendar, so a request gets done in those systems and comes back as a result to review."
      small="It runs on the company's own accounts, on a machine the company owns. Anything that spends money or reaches a client waits for the owner's approval until the owner decides otherwise."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="An owner's requests run through every system the business uses, so the chief of staff is connected to all of them."
      sections={sections}
      faqs={faqs}
      related={related}
      cta={{
        h2: "The install starts with the work that costs the owner the most time.",
        text: "The growth audit goes through the systems the business runs on and how work moves between them, and picks the job where an operator would save the most hours. That job gets connected and handed to the pilot first, and the rest of the chief of staff work builds on the connections it puts in place.",
      }}
      jsonLd={subpageJsonLd({ path: PATH, title: TITLE, description, crumbs, faqs })}
    />
  );
}
