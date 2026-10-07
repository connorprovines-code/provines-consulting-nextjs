import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../ai-agents/AgentsSubpage";

// /ai-automation: "ai automation services" (primary), "ai automation for small business" (secondary), and
// a section for "how is agentic AI different from traditional automation" that goes past the /ai-agents
// FAQ and links to it. Stays on the service and the comparison; /ai-agents/examples owns jobs by function.
// Results are limited to the three Connor confirmed from real installs.

const PATH = "/ai-automation";
const title = "AI Automation Services for Small Businesses";
const description =
  "AI automation services for small businesses: one AI agent runs recurring work across your website, ads, CRM and books, and your team approves what goes out.";

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

const crumbs = [{ href: "/", label: "Home" }, { label: "AI automation" }];

const ilink = (href, label) => <Link href={href} className="ilink">{label}</Link>;

const sections = [
  {
    h2: "The recurring work an operator takes over",
    paras: [
      "Most of the work worth automating in a small business isn't hard. It comes around constantly, it crosses systems, and it slips in a busy week, like the CRM record nobody updated after a sales call. An operator picks that work up in three ways, and most installs use all of them.",
    ],
    points: [
      { title: "When something happens", text: "A lead fills in a form, a supplier invoice arrives, a customer replies to a quote, a page drops out of Google's index. The operator responds the way the business would want, whether that means answering, filing, flagging or drafting, and logs what it did." },
      { title: "On a schedule", text: "The Monday report on spend and leads, a monthly audit of the site and its search performance, a daily check that nothing is keeping Google out of the site. These run without anyone remembering to ask and land in the inbox of whoever needs them." },
      { title: "When someone asks", text: "Anything else the connected systems allow, requested in a sentence: build a campaign for the spring service, find the jobs that ran over budget, draft follow-ups for every quote that went quiet. A request that keeps coming back can be turned into a scheduled job." },
    ],
  },
  {
    h2: "How agentic AI is different from traditional automation",
    paras: [
      "Traditional automation runs a path someone defined in advance. Workflow tools pass data between apps when a trigger fires, and RPA bots click through screens on a script. Both are dependable for as long as every input looks like the ones they were built for. Agentic AI starts from a goal and the instructions it holds about the business, then works out the steps itself: it reads the input, decides what it means, chooses which systems to act in, checks the result, and asks a person when a case falls outside what it knows.",
      "A supplier invoice shows the difference. An RPA bot reads the amount from the spot where it expects the amount to be, and when a new supplier sends a different layout, it stops or reads the wrong number. An agent reads the invoice the way a bookkeeper would, matches it to the job and the purchase order, and puts a mismatch on a list with the reason. A website inquiry shows it too. A workflow copies the form into the CRM and sends a template reply, while an agent reads what the person asked, checks whether they're already a customer, answers the question, and offers times with the person who handles that kind of job.",
    ],
    points: [
      { title: "How the work is defined", text: "Automation follows a fixed sequence of steps built ahead of time. An agent works from a goal and standing instructions, and plans the steps for each case." },
      { title: "Input it wasn't built for", text: "Automation fails, or carries on with the wrong data and nobody notices. An agent reads what's in front of it and asks when it isn't sure." },
      { title: "Work across systems", text: "With automation, each link between two apps is its own build, maintained on its own. One agent connected to every system can take a job across all of them." },
      { title: "Changing the job", text: "Automation needs someone to edit or rebuild the workflow. An agent takes new instructions from the pilot in a sentence." },
      { title: "Cost and predictability", text: "Automation is cheap per run and does the same thing every time. An agent costs more per run and uses judgment, which is why its actions are logged and its sends, spends and publishes wait for approval." },
    ],
  },
  {
    h2: "Why most businesses keep both",
    paras: [
      "That last difference is the reason the answer is rarely one or the other. A high-volume step that never varies, like copying an order total into the books, belongs in an ordinary workflow, where it runs for almost nothing. Work that needs reading, judgment or several systems belongs with the agent. The operator can also keep an eye on the workflows a business already runs and report any that have quietly stopped firing.",
      <>
        {"The page on "}
        {ilink("/ai-agents", "AI agents for business")}
        {" shows a single request carried from the pilot's sentence to finished work, with the approval points along the way."}
      </>,
    ],
  },
  {
    h2: "Approvals: handing judgment over a step at a time",
    paras: [
      "A rules-based workflow doesn't need approvals, because it can only do what it was built to do. An agent can do far more, so the approval rules carry the weight the fixed path used to. At the start of an install, anything that reaches a customer, costs money or goes out under the company's name waits in front of the pilot, who approves it, edits it or turns it down.",
      "The line moves one kind of action at a time. Once the pilot has watched the operator handle routine CRM updates or internal scheduling well, those can run on their own while client email and ad budgets still wait. Every action is logged with the request behind it, and when the pilot corrects something, the fix is written into the operator's instructions instead of being made once by hand and forgotten.",
    ],
  },
  {
    h2: "What a done-for-you AI automation service includes",
    paras: [
      "A lot of AI automation is sold by the workflow: a build for each process, priced per workflow and maintained by whoever built it. That works well for one or two well-defined tasks. It gets expensive and fragile once a business depends on many of them, each with its own logic and nobody watching the gaps in between.",
      <>
        {"The install I do starts with a "}
        {ilink("/growth-audit", "growth audit")}
        {" that follows where the recurring work goes and picks the first job. Then I connect the systems, set down the instructions and the approval rules, and work alongside the person who will direct it until the job holds up without me. From then on, adding a recurring job mostly means describing it. The connections and instructions belong to the business, on its own accounts, and the connection work itself is covered under "}
        {ilink("/ai-integration", "AI integration services")}
        {"."}
      </>,
      <>
        {"New leads hear back within five minutes because the reply starts the moment the form arrives. A new service goes live on the day it's added because one request sets off every step that follows, and one founder now publishes three or four new pages a day by asking for them. The engagement itself, from audit to handover, is described under "}
        {ilink("/ai-consultant", "working with an AI consultant")}
        {"."}
      </>,
    ],
  },
];

const faqs = [
  {
    q: "How can I automate my business using AI?",
    a: [
      "List what the team does by hand every week and sort it. Work that never varies suits an ordinary workflow. Work that needs reading or judgment, or that touches several systems, suits an AI agent. Hand the agent one job from that second group first, with its drafts held for approval, and add the next job once the first runs cleanly.",
      "The hours are usually in the handoffs between systems rather than inside any one app, so an agent that can reach the website, the CRM and the inbox together saves more than a tool that automates a task inside one of them.",
    ],
  },
  {
    q: "What does an AI automation agency do?",
    a: [
      "Most build automations for clients, such as workflows between apps, website chatbots, voice agents or lead follow-up sequences, usually on platforms the agency picks and often maintained by the agency on a retainer. The good ones are very good at the specific build they sell.",
      "The question to ask is who owns and runs the result. If the automations live on the agency's accounts and only its staff understand them, the business is renting them. An install like mine puts one operator on the company's own accounts and leaves a trained person on the team directing it.",
    ],
  },
  {
    q: "Is intelligent automation the same as agentic AI?",
    a: [
      "Not quite. Intelligent automation usually means traditional automation with AI added at certain steps, such as reading a document or sorting an email, inside a process that is still designed in advance. Agentic AI decides the process itself: given a goal, it chooses the steps and the systems, and comes back to a person when it's unsure.",
      "In practice the line blurs, and the label matters less than two questions: does it cope with input it wasn't built for, and can it take a job across several systems without someone building a new workflow?",
    ],
  },
  {
    q: "What best distinguishes agentic AI from traditional RPA?",
    a: [
      "RPA repeats recorded steps on a screen, while agentic AI decides which steps to take. An RPA bot is fast and dependable on identical, high-volume work and breaks when a screen or a document changes. An agent reads the screen or the document for meaning, so a new layout or an unusual case doesn't stop it, and it can be pointed at a new job with instructions rather than a rebuild.",
    ],
  },
  {
    q: "Can you give me an example of agentic AI?",
    a: [
      "An owner tells the operator that the business is adding a new service and needs it in front of buyers. The agent writes the page and builds it into the website, sets up search and social campaigns within the budget the owner names, schedules the launch posts, and puts tracking on the page's form so spend can be traced to leads. Nobody defined those steps in advance; it planned them from the goal, and the page, ads and posts waited for approval before anything went live.",
    ],
  },
];

const related = [
  { href: "/ai-agents", title: "AI agents for business", text: "The operator behind the automation, how a request moves through it, and who on the team directs it." },
  { href: "/ai-agents/examples", title: "AI agent examples", text: "The jobs themselves, by business function, with the systems each one crosses and who approves it." },
  { href: "/ai-integration", title: "AI integration services", text: "What gets connected, how access works on your own accounts, and what happens with systems that have no connection." },
];

export default function AiAutomation() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI automation services for small businesses: recurring work, run by one agent"
      lede="AI automation services hand the work your team repeats every week to software. What I install is one AI agent, connected to your website, ads, social accounts, analytics, search data, CRM, ERP and accounting, and email and calendar, that runs that work when something happens, on a schedule, or when someone on your team asks for it in plain English."
      small="Nothing sends, spends or publishes without approval until your team decides it can. The workflows you already run can stay where they are."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="Recurring work runs through every one of these systems, and a single run often crosses several."
      sections={sections}
      faqs={faqs}
      related={related}
      cta={{
        h2: "Start with the recurring work that costs your team the most.",
        text: (
          <>
            The <Link href="/growth-audit" className="ilink">growth audit</Link> follows the work your team
            repeats each week through the systems it touches, then picks the job an operator should take
            first and the approval rules it would run under. The install starts with that job.
          </>
        ),
      }}
      jsonLd={subpageJsonLd({ path: PATH, title, description, crumbs, faqs, serviceType: "AI automation services" })}
    />
  );
}
