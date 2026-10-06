import Link from "next/link";
import CommandStage from "./CommandStage";

export const faqs = [
  {
    q: "Is ChatGPT an AI agent?",
    a: [
      "Not the way most people use it. ChatGPT in a browser tab is a very capable assistant that knows nothing about your business beyond what you paste into it, and it can't do anything outside the chat window. An agent is the same kind of model with two things added: access to your systems, and permission to act in them.",
      "The operator I build is that idea extended to everything you run, with the paths between your systems mapped, so it can carry a piece of work from one to the next the way a person would.",
    ],
  },
  {
    q: "What can an AI agent actually do for my business?",
    a: [
      "Almost any operational task a person does at a computer: updating the website, building and adjusting campaigns, reading analytics, researching search terms and competitors, keeping the CRM clean, chasing follow-ups, moving documents and data between systems, and putting together the reports nobody wants to build.",
      "Where it earns its keep is the work that crosses systems, because that's the work that eats hours and quietly falls through the cracks. It doesn't replace judgment. It's very good at doing what someone who knows the business asks of it, and at noticing the things worth bringing to their attention.",
    ],
  },
  {
    q: "Where does it start?",
    a: [
      "With one job. In the first conversation we find the piece of work that costs your team the most hours across the most systems, and the operator takes that on first. It's usually something unglamorous, like follow-up that never happens on time or a monthly report that eats someone's whole day.",
      "Once your team trusts it with that job, the next one comes on faster, because the connections it needs are already in place.",
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
      "Most of my time in an install goes into this part: running it next to your people until directing it feels as ordinary as directing a good employee.",
    ],
  },
  {
    q: "What happens when it gets something wrong?",
    a: [
      "It will, the way a new hire does. Everything it does is logged, every change to the website goes through version history so any of them can be rolled back, and anything that spends money or reaches a customer waits for approval until you've decided otherwise. When it makes a mistake, the correction goes into its standing instructions so the same mistake doesn't come back.",
    ],
  },
  {
    q: "How is this different from an AI workshop for my team?",
    a: [
      "A workshop shows your team what AI can do, and then everyone goes back to their desks, where the AI still can't see the CRM, the campaigns or the website. Using it means copying and pasting between windows, which is why the habit rarely sticks.",
      "Consistent use comes from the AI sitting inside the tools where the work already happens, so asking it is faster than doing the job by hand, and from someone staying with the team until that's how they work. That's what an install is.",
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
              The connections are the part I build. I connect each system your business runs on,
              map the paths between them, and give the operator a browser for anything without a
              clean connection, so it can work through a web page the way a person would. Once
              that&apos;s in place there&apos;s very little operational work it can&apos;t take on,
              and the job left for your people is the part that needs them: deciding what should
              happen, and checking that it did.
            </p>
            <p>
              In the companies where I&apos;ve set this up, the operator files documents into the ERP
              when someone asks for it in a sentence, turns a sales call into to-dos in the job
              system, runs the monthly site and search audit on its own schedule, and builds the
              landing page and the campaign for an idea the owner had that morning. None of those is
              the product. They&apos;re what happens once one operator can reach everything.
            </p>
          </div>
        </div>

        {/* What to expect: the questions searchers ask */}
        <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 style={H2_FLUSH}>What to expect if you bring an operator into your business.</h2>
            <p className={`mt-6 ${PROSE}`}>
              If you&apos;ve been hearing about agents for a year and still aren&apos;t sure what one
              would actually do in your company, these are the questions owners ask me first, with
              the answers I give them.
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
              for. I go through what your business runs on, find where your team&apos;s hours go, and
              show you where an operator would take the most off their plate. Most AI consultants
              hand you a strategy deck. I hand you a working operator inside your company, and I stay
              until your team runs it.
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
