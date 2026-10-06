import Link from "next/link";
import CommandStage from "./CommandStage";
import AgentsVideo from "@/components/AgentsVideo";

export const faqs = [
  {
    q: "What can an AI agent actually do for my business?",
    a: [
      "The operational work that runs through your systems: building, budgeting and reporting on ad campaigns; writing and scheduling social posts; writing and publishing pages on the website; answering new leads and booking the calls; keeping the CRM clean and chasing follow-ups; filing documents and data into the ERP and accounting; researching search terms and competitors; and pulling the numbers into the reports you actually read. The work that crosses several systems is where an AI agent saves the most, because that's the work that takes longest by hand and is the easiest to drop.",
      "It doesn't decide what your business should do. Someone on your team does that, and the operator carries it out and flags what deserves their attention.",
    ],
  },
  {
    q: "Is ChatGPT an AI agent?",
    a: [
      "Not in the sense that matters here. What most people use is the chat: a capable assistant that works from whatever you paste into it and hands the doing back to you. OpenAI has added an agent mode that can browse and click through a few connected apps, but it's still a session you start from a chat window and watch, working only from what you tell it in that moment. That's barely an agent in the way a business needs one.",
      "An operator lives inside your business instead. It runs on your company's accounts, on a machine you own, connected to your website, ad accounts, CRM, ERP and accounting at the same time, and it keeps standing instructions about how your business works: your services, your pricing rules, who handles what, and what needs approval. That's what lets a job move from one system to the next without anyone rebuilding the context each time.",
    ],
  },
  {
    q: "What is the best AI agent for business?",
    a: [
      "The one connected to the systems where your work actually happens. A well-reviewed tool that only sees its own app still leaves your team carrying information between the website, the CRM and the ad account by hand, which is the part that eats the hours.",
      "When owners ask me which AI agent to buy, I ask which job costs them the most hours across the most systems, because that decides what the agent needs to reach.",
    ],
  },
  {
    q: "How is an AI agent different from automation?",
    a: [
      "An automation follows a path someone set up in advance, like copying every new form entry into the CRM, and it works until the input changes, at which point it breaks or quietly does the wrong thing. An AI agent works from a goal and from standing instructions about your business, so it can read a lead that arrived in an unusual format, decide where it belongs, and ask the pilot when it isn't sure.",
      "The automations you already have can keep running alongside it. Often the operator ends up watching them and fixing the ones that fail.",
    ],
  },
  {
    q: "Is my business ready for an AI agent?",
    a: [
      "A business is ready when the work it wants done already runs through software: a website, an ad account, a CRM, an accounting or job system, and a shared inbox and calendar. It also needs one person who knows how the business works and has time to direct the operator and check its work.",
      "Messy data isn't a reason to wait, since keeping the CRM clean is one of the jobs the operator does. The harder case is a business where the important work lives only in one person's head, because there's nothing yet for an operator to connect to.",
    ],
  },
  {
    q: "What does it need access to, and who owns it?",
    a: [
      "The same accounts your team already logs into, granted through each platform's own sign-in screens, in your company's name. It runs under your accounts on a machine you own, so nothing about it lives on a platform you'd lose if we stopped working together, and you can revoke any connection whenever you like.",
    ],
  },
  {
    q: "How much does an AI agent cost for a small business?",
    a: [
      "There are two parts. The first is the install: the audit, the connections, the standing instructions, and my time alongside your team until they run it without me. The second is the running cost, meaning the AI usage and the software it works through, and because the operator runs on your own accounts, those bills come to you directly.",
      "The growth audit is where the first job gets scoped, so the price reflects your systems and that job rather than a package.",
    ],
  },
  {
    q: "Who on my team runs it?",
    a: [
      "Someone who knows the business, not a developer. The pilot tells the operator what to do in plain English and reviews what it did. At the start, nothing gets sent, spent or published without their approval, and as the team sees how it handles things, they decide what it can do on its own.",
      "Most of my time in an install goes into this part: running it next to your people until directing it is part of their normal day.",
    ],
  },
  {
    q: "What happens when it gets something wrong?",
    a: [
      "Every install is built on the assumption that it will. Everything it does is logged, every change to the website goes through version history so any of them can be rolled back, and anything that spends money or reaches a customer waits for approval until you've decided otherwise. When it makes a mistake, the correction goes into its standing instructions so the same mistake doesn't come back.",
    ],
  },
  {
    q: "How is this different from an AI workshop for my team?",
    a: [
      "A workshop shows your team what AI can do, and then everyone goes back to their desks, where the AI still can't see the CRM, the campaigns or the website. Using it means copying and pasting between windows, which is why the habit rarely sticks.",
      "Consistent use comes from the AI sitting inside the tools where the work already happens, so asking it is faster than doing the job by hand, and from someone staying with the team until that's how they work.",
    ],
  },
];

const H2_FLUSH = { marginTop: 0 };
const PROSE = "text-[16.5px] leading-[1.65] text-[var(--char)]";

export default function AiAgentsContent() {
  return (
    <div className="aa">
      <CommandStage>
        {/* The "what we do" video */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16 items-center">
          <div>
            <h2 style={H2_FLUSH}>Watch one operator run it, start to finish</h2>
            <p className={`mt-6 ${PROSE}`}>
              A request made in plain English, carried through the website, the ads, the CRM and
              the calendar, with your approval wherever money or a customer is involved.
            </p>
          </div>
          <AgentsVideo />
        </div>

        {/* Kinds of agents, and why one connected operator */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <h2 style={H2_FLUSH}>The kinds of AI agents a business can run</h2>
          <div className={`space-y-5 ${PROSE}`}>
            <p>
              Most AI agents sold to businesses fall into a handful of kinds: chatbots that answer
              customer questions on a website, sales agents that research prospects and draft
              outreach, inbox and scheduling assistants, support agents that sort and answer tickets,
              and automations with an AI step in the middle. Each one works inside a single app and
              sees only what that app holds.
            </p>
            <p>
              An operator is a different kind of AI agent. It&apos;s connected to all of those systems
              at once, so one request can move from the website to the CRM to the ad account without
              anyone carrying it between them. For an owner, the same operator can work as an{" "}
              <Link href="/ai-agents/chief-of-staff" className="ilink">AI chief of staff</Link> that runs
              the business systems instead of summarizing the inbox.
            </p>
            <h3 className="pt-3 text-[21px] font-bold tracking-tight text-[var(--ink2)]">
              Why one connected operator beats a stack of single-purpose bots
            </h3>
            <p>
              A stack of separate tools means separate logins, separate places where instructions
              live, and nobody watching the handoffs between them, which is where work gets dropped.
              One operator holds the standing instructions once, sees every system, and carries the
              work across those handoffs itself.
            </p>
          </div>
        </div>

        {/* What an install involves */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <h2 style={H2_FLUSH}>What an AI agent install involves</h2>
          <div className={`space-y-5 ${PROSE}`}>
            <p>
              An install starts with the <Link href="/growth-audit" className="ilink">growth audit</Link>,
              which maps the systems your business runs on and picks the first job. I connect each of
              those systems through its own sign-in screen, in your company&apos;s name, and write down
              how work moves between them: where a lead lands in the CRM, what turns it into a job,
              where documents get filed, and which actions need someone&apos;s approval. That becomes
              the standing instructions the operator works from, along with your services, your
              pricing rules and who handles what. Anything without a clean connection, the operator
              works through in a browser, the way a person would.
            </p>
            <p>
              The first job is tested end to end and handed to your pilot with every send, spend and
              publish waiting for their sign-off. I stay alongside your team until directing it is
              part of their normal day, and every job after the first reuses the connections already
              in place. If you&apos;re comparing <Link href="/ai-consultant" className="ilink">AI consultants</Link>,
              ask each one how they handle this stretch, because it decides whether the operator gets
              used.
            </p>
          </div>
        </div>

        {/* Questions owners ask (People also ask targets) */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 style={H2_FLUSH}>Questions owners ask about AI agents</h2>
          </div>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-[19px] font-bold tracking-tight text-[var(--ink2)] mb-3">{f.q}</h3>
                <div className="space-y-3 text-[15.5px] leading-[1.65] text-[#475569]">
                  {f.a.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="aa-block grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center bg-[var(--off)]">
          <div>
            <h2 style={H2_FLUSH}>Where an AI agent install starts</h2>
            <p className={`mt-6 max-w-xl ${PROSE}`}>
              The <Link href="/growth-audit" className="ilink">growth audit</Link> maps the systems your
              business runs on and how work moves between them, and picks the job where an AI agent
              would save the most hours across the most systems. That job is where the install starts.
            </p>
          </div>
          <div className="md:text-right">
            <Link href="/schedule" className="btn btn-ink">
              Book a growth audit
              <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" /></svg>
            </Link>
          </div>
        </div>
      </CommandStage>
    </div>
  );
}
