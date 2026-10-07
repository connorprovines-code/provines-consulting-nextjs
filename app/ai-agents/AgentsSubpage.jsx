// Shared layout for /ai-agents/* topic pages: the same dark stage language as the pillar page,
// a panel showing which systems the topic runs through, then the light sheet with sections,
// questions, related pages and the call to action. Each page supplies only its content.

import Image from "next/image";
import Link from "next/link";
import { NODES, NODE_BY_KEY } from "./systems";
import { ORG_ID, AREA_SERVED } from "@/lib/site";
import "./command-stage.css";

const NODE_LABEL = Object.fromEntries(Object.entries(NODE_BY_KEY).map(([k, n]) => [k, n.name]));

const SITE = "https://www.provinesconsulting.com";
const H2_FLUSH = { marginTop: 0 };
const PROSE = "text-[16.5px] leading-[1.65] text-[var(--char)]";

export function subpageJsonLd({ path, title, description, crumbs, faqs }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: "AI agent implementation",
      description,
      url: `${SITE}${path}`,
      areaServed: AREA_SERVED,
      provider: { "@id": ORG_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${SITE}${c.href || path}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") } })),
    },
  ];
}

const Arrow = ({ d }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true"><path d={d} /></svg>
);

export default function AgentsSubpage({ crumbs, h1, byline, lede, small, systems, panelNote, sections, faqs, faqIntro, related, cta, jsonLd }) {
  const lit = new Set(systems);
  const here = crumbs[crumbs.length - 1].label;
  return (
    <div className="aa">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero sub-hero">
        <div className="hero-bg" />
        <div className="noise" />
        <div className="hero-in">
          <div className="hero-copy">
            <nav aria-label="Breadcrumb" className="crumb">
              {crumbs.map((c, i) => (
                <span key={c.label} className="contents">
                  {i > 0 && <span className="sep">/</span>}
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
            <h1>{h1}</h1>
            {byline && (
              <p className="byline">
                <Image src="/connor.jpg" alt="" width={80} height={80} sizes="40px" />
                <span><Link href="/about">Connor Provines</Link>{byline}</span>
              </p>
            )}
            <p className="sub">{lede}</p>
            {small && <p className="small">{small}</p>}
            <div className="ctas">
              <Link className="btn btn-primary" href="/schedule">Book a growth audit<Arrow d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" /></Link>
              <Link className="btn btn-ghost" href="/ai-agents">See the full operator<Arrow d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" /></Link>
            </div>
          </div>

          <div className="sys-panel" aria-label={`Systems the operator works in: ${here}`}>
            <div className="sys-op">
              <div className="c-head"><span className="c-mark" /><span className="c-title">OPERATOR</span><span className="c-status"><i /><span>CONNECTED</span></span></div>
              <p>{panelNote}</p>
            </div>
            <div className="sysgrid">
              {NODES.filter((n) => n.idx).map((n) => (
                <div key={n.k} className={`node${lit.has(n.k) ? " done" : ""}`} data-sys={n.k}>
                  <span className="n-ico"><svg viewBox="0 0 16 16">{n.icon}</svg></span>
                  <span className="n-txt"><b>{n.name}</b></span>
                </div>
              ))}
            </div>
            <p className="cap"><b>FIG. 1</b><span>Lit systems are the ones this work runs through. The operator is connected to all of them.</span></p>
          </div>
        </div>
        <div className="horizon" />
      </section>

      <div className="ground">
        <section className="sheet">
          <span className="wire-in" aria-hidden="true" /><span className="wire-port top" aria-hidden="true" /><span className="wire-port" aria-hidden="true" />

          {sections.map((s) => (
            <div key={s.h2} className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
              <div className="md:sticky md:top-28 md:self-start"><h2 style={H2_FLUSH}>{s.h2}</h2></div>
              <div className={`space-y-5 ${PROSE}`}>
                {s.paras.map((p, i) => <p key={i}>{p}</p>)}
                {s.examples && (
                  <div className="examples">
                    {s.examples.map((ex) => (
                      <article key={ex.title} className="example">
                        <h3>{ex.title}</h3>
                        {ex.request && <p className="ex-req"><span className="ex-k">Request</span>{ex.request}</p>}
                        <div className="route">
                          {ex.systems.map((k, j) => (
                            <span key={`${k}-${j}`} className="contents">
                              {j > 0 && <span className="arr">▸</span>}
                              <span className="rc on">{NODE_LABEL[k]}</span>
                            </span>
                          ))}
                        </div>
                        <p className="ex-body">{ex.result}</p>
                        {ex.approval && <p className="ex-ok"><span className="ex-k">Approval</span>{ex.approval}</p>}
                      </article>
                    ))}
                  </div>
                )}
                {s.points && (
                  <div className="points">
                    {s.points.map((pt) => (
                      <div key={pt.title} className="point"><b>{pt.title}</b><span>{pt.text}</span></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="aa-block grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-28 md:self-start">
              <h2 style={H2_FLUSH}>Questions owners ask</h2>
              {faqIntro && <p className={`mt-6 ${PROSE}`}>{faqIntro}</p>}
            </div>
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map((f) => (
                <div key={f.q} className="py-7">
                  <h3 className="text-[19px] font-bold tracking-tight text-[var(--ink2)] mb-3">{f.q}</h3>
                  <div className="space-y-3 text-[15.5px] leading-[1.65] text-[#475569]">
                    {f.a.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aa-block">
            <div className="fig mb-6">Related</div>
            <div className="related">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="rel">
                  <b>{r.title}</b>
                  <span>{r.text}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="aa-block grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center bg-[var(--off)]">
            <div>
              <h2 style={H2_FLUSH}>{cta.h2}</h2>
              <p className={`mt-6 max-w-xl ${PROSE}`}>{cta.text}</p>
            </div>
            <div className="md:text-right">
              <Link href="/schedule" className="btn btn-ink">
                Book a growth audit
                <Arrow d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
