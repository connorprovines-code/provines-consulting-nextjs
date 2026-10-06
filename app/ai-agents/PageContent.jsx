import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MONO = "font-[family-name:var(--font-geist-mono)]";

// FIG. 1: the eight systems around the operator, in 3x3 grid order (center inserted at index 4).
const systems = [
  { name: "Website", detail: "pages, forms, speed" },
  { name: "Ads", detail: "Google, Meta, budgets" },
  { name: "Social", detail: "posts, pages, insights" },
  { name: "Analytics", detail: "traffic, conversions" },
  { name: "Search data", detail: "rankings, keywords, competitors" },
  { name: "CRM", detail: "leads, pipeline, follow-up" },
  { name: "ERP + accounting", detail: "jobs, documents, invoices" },
  { name: "Email + calendar", detail: "inbox, meetings, notes" },
];

// Cell centers on a 6x6 viewBox; spokes run to the operator at (3,3), the ring links neighbors.
const nodes = [[1, 1], [3, 1], [5, 1], [1, 3], [5, 3], [1, 5], [3, 5], [5, 5]];
const ring = [[1, 1], [3, 1], [5, 1], [5, 3], [5, 5], [3, 5], [1, 5], [1, 3], [1, 1]];

// Jobs that run through several systems. Outcomes are the ones Connor confirmed from real installs.
const jobs = [
  {
    title: "Launching a new service or service area",
    chain: ["Website", "Ads", "Analytics", "CRM"],
    what: "A landing page, a campaign aimed at the right searches, conversion tracking, and the new leads wired into follow-up.",
    outcome: "Live the same day.",
  },
  {
    title: "Answering a new lead",
    chain: ["Website", "CRM", "Email + calendar"],
    what: "The lead comes in from a form or an ad, lands in the CRM with where it came from, and gets a reply from your business.",
    outcome: "New leads hear back within five minutes.",
  },
  {
    title: "Publishing new pages on the website",
    chain: ["Search data", "Website"],
    what: "Writing the page, building it into the site, checking it on a phone, and getting it in front of Google.",
    outcome: "Three or four new pages a day.",
  },
];

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

export default function AiAgentsContent() {
  return (
    <div className="bg-white">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--navy)] leading-[1.02] tracking-tighter mb-10">
              AI agents for business, wired into every system you run.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-xl">
              Most people meet AI as a chat window that can&apos;t see anything about their
              business. I build an operator that works inside your website, ads, social
              accounts, analytics, CRM, ERP and email, and reaches all of them at once, so the
              operational work your team does by hand gets done in a fraction of the time.
            </p>
            <p className="text-sm text-slate-500 mb-10 max-w-md">
              Someone on your team pilots it. I stand it up inside your company, on your
              accounts, and stay until your people run it without me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--navy)] text-white font-semibold text-lg hover:bg-[var(--electric-blue)] transition-colors"
              >
                Book a growth audit
              </Link>
              <a
                href="#what-it-does"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--navy)] font-medium text-lg border-b border-slate-300 hover:border-[var(--navy)] transition-colors bg-transparent"
              >
                See what it does
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE CONNECTED PICTURE: FIG. 1 + why connection is the point  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-12 max-w-3xl">
            What makes it useful is that one operator can reach every system at once.
          </h2>

          <p className={`flex items-baseline gap-3 ${MONO} text-[11px] uppercase tracking-[0.07em] text-slate-500 mb-7`}>
            FIG. 1 · ONE OPERATOR, EVERY SYSTEM
            <span className="flex-1 border-b border-dotted border-slate-400/60"></span>
          </p>

          <div className="relative max-w-3xl mx-auto">
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 6 6"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polyline
                points={ring.map(([x, y]) => `${x},${y}`).join(" ")}
                fill="none"
                stroke="#94A3B8"
                strokeWidth="1"
                strokeDasharray="2 4"
                vectorEffect="non-scaling-stroke"
              />
              {nodes.map(([x, y]) => (
                <line
                  key={`${x}-${y}`}
                  x1={x}
                  y1={y}
                  x2={3}
                  y2={3}
                  stroke="#0369A1"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
              {[...systems.slice(0, 4), null, ...systems.slice(4)].map((s, i) =>
                s ? (
                  <div key={s.name} className="bg-white border border-[var(--navy)] p-2.5 sm:p-4 md:p-5 min-h-[84px] sm:min-h-[104px]">
                    <div className={`${MONO} text-[9px] sm:text-[10px] text-slate-500 mb-1.5 sm:mb-2`}>
                      SYS {String(i < 4 ? i + 1 : i).padStart(2, "0")}
                    </div>
                    <p className="font-bold text-[13px] sm:text-base md:text-lg text-[var(--navy)] tracking-tight leading-tight mb-1">
                      {s.name}
                    </p>
                    <p className="hidden sm:block text-[12px] md:text-[13px] leading-snug text-slate-600">{s.detail}</p>
                  </div>
                ) : (
                  <div key="operator" className="bg-white border-2 border-[var(--electric-blue)] p-2.5 sm:p-4 md:p-5 min-h-[84px] sm:min-h-[104px]">
                    <div className={`${MONO} text-[9px] sm:text-[10px] text-[var(--electric-blue)] mb-1.5 sm:mb-2`}>OPERATOR</div>
                    <p className="font-bold text-[13px] sm:text-base md:text-lg text-[var(--navy)] tracking-tight leading-tight mb-1">
                      Sees the whole board
                    </p>
                    <p className="hidden sm:block text-[12px] md:text-[13px] leading-snug text-slate-600">Executes what you say.</p>
                  </div>
                )
              )}
            </div>
          </div>

          <p className={`${MONO} text-[11px] text-slate-500 mt-7 max-w-3xl mx-auto leading-relaxed`}>
            every path between systems mapped · a browser for anything without a connection
            · <span className="text-[var(--electric-blue)]">you direct it in plain English</span>
          </p>

          <div className="max-w-2xl mt-16 space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Most of what gets sold as an AI agent does one job inside one app. A chat widget
              answers questions on your website, an email tool writes follow-ups, a sales bot
              books meetings. Each of them is useful in a narrow way, and each of them is blind
              to everything happening outside its own box, which is where most of the real work
              in a business lives.
            </p>
            <p>
              The connections are the part I build. I connect each system your business runs on,
              map the paths between them, and give the operator a browser for anything without a clean
              connection, so it can work through a web page the way a person would. Once
              that&apos;s in place there&apos;s very little operational work it can&apos;t take
              on, and the job left for your people is the part that needs them: deciding what
              should happen, and checking that it did.
            </p>
            <p>
              In the companies where I&apos;ve set this up, the operator files documents into the
              ERP when someone asks for it in a sentence, turns a sales call into to-dos in the
              job system, runs the monthly site and search audit on its own schedule, and builds
              the landing page and the campaign for an idea the owner had that morning. None of
              those is the product. They&apos;re what happens once one operator can reach
              everything.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT IT DOES: jobs that run through several systems           */}
      {/* ============================================================ */}
      <section id="what-it-does" className="bg-[var(--off-white)] border-b border-[var(--line)] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-6 max-w-3xl">
            Work that used to pass between people now runs through one operator.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mb-14">
            Each of these jobs normally moves through several tools, and usually several people,
            before it&apos;s done. These three come from businesses where the operator runs them now.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
            {jobs.map((job) => (
              <div key={job.title} className="bg-white flex flex-col px-6 py-8 md:px-7">
                <h3 className="font-bold text-lg text-[var(--navy)] tracking-tight leading-snug mb-3">{job.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-6">{job.what}</p>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 mb-8">
                  {job.chain.map((t, i) => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      {i > 0 && <span className={`${MONO} text-[11px] text-[var(--electric-blue)]`} aria-hidden="true">▸</span>}
                      <span className={`${MONO} text-[10px] uppercase tracking-[0.06em] text-slate-600 border border-[var(--navy)] px-2 py-0.5`}>
                        {t}
                      </span>
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-5 md:min-h-[4.5rem] border-t border-[var(--line)] font-bold text-lg text-[var(--navy)] tracking-tight leading-snug">
                  {job.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT TO EXPECT                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-6 max-w-3xl">
            What to expect if you bring an operator into your business.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mb-14">
            If you&apos;ve been hearing about agents for a year and still aren&apos;t sure what
            one would actually do in your company, these are the questions owners ask me first,
            with the answers I give them.
          </p>
          <div className="max-w-2xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((f) => (
              <div key={f.q} className="py-8">
                <h3 className="text-xl font-bold text-[var(--navy)] tracking-tight mb-4">{f.q}</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  {f.a.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-5">
                The first step is finding the job it should take on first.
              </h2>
              <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                That&apos;s what the <Link href="/growth-audit" className="text-[var(--electric-blue)] hover:underline">growth audit</Link> is
                for. I go through what your business runs on, find where your team&apos;s hours
                go, and show you where an operator would take the most off their plate. Most AI
                consultants hand you a strategy deck. I hand you a working operator inside your
                company, and I stay until your team runs it.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-10 py-5 bg-[var(--navy)] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Book a growth audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
