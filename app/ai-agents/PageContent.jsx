import Link from "next/link";
import CommandStage from "./CommandStage";

export const faqs = [
  {
    q: "What can an AI agent actually do for my business?",
    a: [
      "The operational work that runs through your systems: building, budgeting and reporting on ad campaigns; writing and scheduling social posts; writing and publishing pages on the website; answering new leads and booking the calls; keeping the CRM clean and chasing follow-ups; filing documents and data into the ERP and accounting; researching search terms and competitors; and pulling the numbers into the reports you actually read. The work that crosses several systems is where it saves the most, because that's the work that takes longest by hand and is the easiest to drop.",
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
    q: "Where does it start?",
    a: [
      "With the job that crosses the most systems and costs your team the most hours, which is what the growth audit finds. That job gets connected, tested and handed to your pilot first.",
      "Every job after it goes faster, because the connections it needs are already in place.",
    ],
  },
  {
    q: "What does it need access to, and who owns it?",
    a: [
      "The same accounts your team already logs into, granted through each platform's own sign-in screens, in your company's name. It runs under your accounts on a machine you own, so nothing about it lives on a platform you'd lose if we stopped working together, and you can revoke any connection whenever you like.",
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
        {/* Why one operator: the argument behind the stage */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <h2 style={H2_FLUSH}>What makes it useful is that one operator can reach every system at once.</h2>
          <div className={`space-y-5 ${PROSE}`}>
            <p>
              Most of what gets sold as an AI agent does one job inside one app. A chat widget
              answers questions on your website, an email tool writes follow-ups, a sales bot books
              meetings. Each of them is useful in a narrow way, and each of them is blind to
              everything happening outside its own box, which is where most of the real work in a
              business lives.
            </p>
            <p>
              The connections are the part I build. I connect each system and write down how work
              moves between them: where a lead lands in the CRM, what turns it into a job, where
              documents get filed, and which actions need someone&apos;s approval. Then I give the
              operator a browser for anything without a clean connection, so it can work through a
              web page the way a person would. Once that&apos;s in place, the job left for your
              people is deciding what should happen and checking that it did.
            </p>
          </div>
        </div>

        {/* What to expect: the questions searchers ask */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 style={H2_FLUSH}>What to expect if you bring an operator into your business.</h2>
            <p className={`mt-6 ${PROSE}`}>
              These are the questions owners ask me before an install, with the answers I give them.
            </p>
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
            <h2 style={H2_FLUSH}>The first step is finding the job it should take on first.</h2>
            <p className={`mt-6 max-w-xl ${PROSE}`}>
              That&apos;s what the <Link href="/growth-audit" className="ilink">growth audit</Link> is
              for. I go through the systems your business runs on and how work moves between them,
              and pick the job where an operator would save the most hours across the most systems.
              The install starts with that job.
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
