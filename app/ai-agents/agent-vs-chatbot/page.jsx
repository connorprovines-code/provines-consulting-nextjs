import Link from "next/link";
import AgentsSubpage, { subpageJsonLd } from "../AgentsSubpage";

// /ai-agents/agent-vs-chatbot: "ai agent vs chatbot" and "ai agents vs chatbots". Answers the comparison with
// the operator thesis (the difference is what it's connected to) and links back to /ai-agents and
// /ai-agents/examples. ChatGPT's agent features are described as of Oct 2026 (agents on business plans can
// connect to some workplace apps and run on a schedule); keep that paragraph current.

const PATH = "/ai-agents/agent-vs-chatbot";
const title = "AI Agent vs Chatbot: What's the Difference?";
const description =
  "AI agent vs chatbot: a chatbot answers in a chat window, while an AI agent does the work inside your systems. What the difference means for a small business.";

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

const crumbs = [{ href: "/ai-agents", label: "AI agents" }, { label: "Agent vs chatbot" }];

const ilink = (href, label) => <Link href={href} className="ilink">{label}</Link>;

const sections = [
  {
    h2: "What a chatbot does, and what an AI agent does",
    paras: [
      "A chatbot is a conversation. Someone asks, it answers, and the answer stays in the window. A website chatbot answers visitors from an FAQ or a knowledge base someone loaded into it, and a general chatbot like ChatGPT answers from its training and whatever the person pastes in. Either way, if the answer needs to become an email, a CRM record or a page on the site, a person carries it there.",
      "An AI agent is given a goal instead of a question. It has access to systems, so it can look up the customer, see which jobs are open for them, write the reply and, once it's approved, send it and note it on their record. It takes as many steps as the job needs, checks what happened at each one, and comes back with the job done or a specific question about it.",
      "The model underneath is often the same. What separates the two is what each one can reach and what it's allowed to change once it gets there.",
    ],
  },
  {
    h2: "AI agent vs chatbot, side by side",
    paras: [
      "For a business, the differences show up in five places.",
    ],
    points: [
      { title: "Where it works", text: "A chatbot works in its own window. An agent works inside the business's systems: the website, the ad accounts, the CRM, the books and the inbox." },
      { title: "What it knows about the business", text: "A chatbot knows what it was trained on and what it's been given in the conversation or its knowledge base. An agent works from standing instructions about the business and reads the live records each time, so its answer reflects today's pipeline rather than last month's export." },
      { title: "What it can change", text: "A chatbot changes nothing outside the conversation. An agent can update records, send messages, publish pages and adjust campaigns, within the limits it's been given." },
      { title: "How far it takes a job", text: "A chatbot answers one message at a time. An agent carries a job through every step and system it needs, and comes back when it's finished or stuck." },
      { title: "Who checks the work", text: "With a chatbot, the person copying the answer out is the only check. With an agent, the checks are part of the setup: every action is logged, and sends, spends and publishes wait for the pilot's approval until the team loosens that rule." },
    ],
  },
  {
    h2: "Is ChatGPT a chatbot or an AI agent?",
    paras: [
      "Mostly a chatbot, with agent features growing around it. The chat most people use answers from what it's given and hands the work back to them. OpenAI has added ways for it to browse and work through websites, connect to some workplace apps, and, on business plans, run shared agents on a schedule.",
      "So the answer depends on what it has been set up to reach, which is the same test to apply to any product sold as an AI agent. Ask which of your systems it's connected to, what it may change in each one, who approves what it does, and who keeps it working when a platform changes. A tool connected only to the inbox and the shared drive can be a capable assistant and still never touch the ad account, the CRM or the books, which is where much of a small business's work lives.",
    ],
  },
  {
    h2: "When a chatbot is the right tool",
    paras: [
      "For plenty of jobs a chatbot is enough, and cheaper. Drafting a post, summarizing a contract, thinking through a pricing change and answering routine visitor questions from a well-kept FAQ all start and end in a conversation, so nothing has to reach another system.",
      "The line is crossed when the answer has to go somewhere. A website chatbot can tell a visitor what the business offers. It takes an agent to answer them, log them in the CRM with their source, find a time with the right person and book the call. Where an operator handles this today, new leads hear back within five minutes.",
      <>
        {"The same comparison against rules-based workflows, rather than chatbots, is on "}
        {ilink("/ai-automation", "AI automation services")}
        {"."}
      </>,
    ],
  },
  {
    h2: "Why the agent worth having is an operator",
    paras: [
      "Most AI agents sold to small businesses are still single-purpose: a sales agent in the CRM, a support agent in the help desk, a scheduling assistant in the inbox. Each one is more than a chatbot inside its own app and no more than a chatbot everywhere else, so the handoffs between systems stay with a person.",
      <>
        {"An operator is one agent connected to all of them, from the website, ad and social accounts, analytics and search data to the CRM, ERP and accounting, and email and calendar, plus a browser for systems that offer no connection. Someone on the team directs it in plain English, and it carries each request through every system involved. "}
        {ilink("/ai-agents", "AI agents for business")}
        {" covers how an operator is installed and run, and the "}
        {ilink("/ai-agents/examples", "AI agent examples")}
        {" show the jobs it does, function by function. Setting one up takes either someone on the team with the time to connect each system and write its instructions, or an "}
        {ilink("/ai-consultant", "AI consultant")}
        {" who installs it and stays until the team can direct it."}
      </>,
    ],
  },
];

const faqs = [
  {
    q: "Is a chatbot AI?",
    a: [
      "Most of today's are. Older chatbots followed scripted decision trees and matched keywords to canned answers, with no AI involved. Chatbots built now generally run on a large language model, so they understand a question however it's phrased and write each answer fresh. Being AI doesn't make a chatbot an agent, though: it still answers rather than acts.",
    ],
  },
  {
    q: "Is an AI agent the same as a bot?",
    a: [
      "No. A bot is any software that does a task automatically, from a scripted chatbot to a program that posts on a schedule. An AI agent is a particular kind: it works toward a goal, decides its own steps and acts in other systems, checking the results as it goes. Every AI agent is a bot in the loose sense, but most bots aren't agents.",
    ],
  },
  {
    q: "What is the difference between an AI agent and an AI assistant?",
    a: [
      "An AI assistant helps a person do their work: it drafts, summarizes, schedules and answers, and the person decides what happens next. An AI agent is trusted with the next step itself and carries a job through to a result within the limits it's been given. Many products sit in between, assisting by default and acting when asked.",
      "For an owner, the practical difference is who does the last mile. With an assistant, someone on the team still takes the draft and puts it where it belongs. With an agent, the draft goes there once it's approved.",
    ],
  },
  {
    q: "Does a small business need a chatbot or an AI agent?",
    a: [
      "Often both, for different jobs. A chatbot on the website handles routine visitor questions, and a general chatbot helps the team draft and think. An agent is worth it when the hours go into moving work between systems, such as following up on leads, keeping the CRM current, launching campaigns and reporting across the ad accounts and the books.",
      "The growth audit looks at where those hours go and names the first job an agent should take on.",
    ],
  },
];

const related = [
  { href: "/ai-agents", title: "AI agents for business", text: "The full picture of the operator: what it's connected to, who directs it, and how it gets installed." },
  { href: "/ai-agents/examples", title: "AI agent examples", text: "Worked examples sorted by business function: the request, the route through the systems, and who signs off." },
  { href: "/ai-automation", title: "AI automation services", text: "How an agent compares with rules-based automation, and the recurring work it takes over." },
];

export default function AgentVsChatbot() {
  return (
    <AgentsSubpage
      crumbs={crumbs}
      h1="AI agent vs chatbot: the difference is what it's connected to"
      lede="A chatbot answers in a conversation, from what it was trained on and what you give it. An AI agent works inside the systems where the business runs, takes the steps a job needs and comes back with the work done. For a small business, the agent worth having is an operator: one agent connected to the website, ads, CRM, ERP and accounting, and email and calendar, directed in plain English by someone on the team."
      small="A chatbot is still the right tool for work that starts and ends in a conversation. The difference matters once the answer has to land in another system."
      systems={["website", "ads", "social", "analytics", "search", "crm", "erp", "email"]}
      panelNote="A chatbot works outside all of these, from what's pasted into it. An agent is connected to them and can act in each one."
      sections={sections}
      faqs={faqs}
      related={related}
      cta={{
        h2: "When the work has to leave the chat window, it needs an agent.",
        text: (
          <>
            The <Link href="/growth-audit" className="ilink">growth audit</Link> goes through the systems your
            business runs on, finds where your team&apos;s hours go into carrying work between them, and
            names the first job to hand to an operator.
          </>
        ),
      }}
      jsonLd={subpageJsonLd({ path: PATH, title, description, crumbs, faqs })}
    />
  );
}
