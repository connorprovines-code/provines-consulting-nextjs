"use client";

// The /ai-agents hero: a pilot's plain-English request plays out on an operator console wired to
// every system, then the light "what it does" sheet. Ported from
// design-directions/ai-agents/b-command-stage.html; the animation runs imperatively in one effect.

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./command-stage.css";

const NODES = [
  { k: "pilot", cls: "pilot", name: "Pilot", detail: "you direct it in plain English", icon: <><path d="M2.5 4l3.5 4-3.5 4" /><path d="M8 12.5h5.5" /></> },
  { k: "website", idx: "01", name: "Website", detail: "pages, forms, speed", icon: <><rect x="1.5" y="2.5" width="13" height="11" /><path d="M1.5 5.5h13" /></> },
  { k: "ads", idx: "02", name: "Ads", detail: "Google, Meta, budgets", icon: <><circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="2.8" /><path d="M8 8l5.5-5.5" /></> },
  { k: "social", idx: "03", name: "Social", detail: "posts, pages, insights", icon: <><circle cx="4" cy="8" r="1.9" /><circle cx="12" cy="3.8" r="1.9" /><circle cx="12" cy="12.2" r="1.9" /><path d="M5.7 7.1l4.6-2.4M5.7 8.9l4.6 2.4" /></> },
  { k: "analytics", idx: "04", name: "Analytics", detail: "traffic, conversions", icon: <><path d="M1.5 14.5h13" /><path d="M4 12V8.5M7 12V5M10 12V7M13 12V2.5" /></> },
  { k: "search", idx: "05", name: "Search data", detail: "rankings, keywords, competitors", icon: <><circle cx="7" cy="7" r="4.6" /><path d="M10.5 10.5L14.5 14.5" /></> },
  { k: "crm", idx: "06", name: "CRM", detail: "leads, pipeline, follow-up", icon: <><circle cx="8" cy="5.5" r="2.6" /><path d="M2.8 14.5c.6-3 2.6-4.5 5.2-4.5s4.6 1.5 5.2 4.5" /></> },
  { k: "erp", idx: "07", name: "ERP + accounting", detail: "jobs, documents, invoices", icon: <><path d="M3 1.5h6.5l3.5 3.5v9.5H3z" /><path d="M9.5 1.5V5H13" /><path d="M5.5 8h5M5.5 10.5h5M5.5 13h3" /></> },
  { k: "email", idx: "08", name: "Email + calendar", detail: "inbox, meetings, notes", icon: <><rect x="1.5" y="3.5" width="13" height="9.5" /><path d="M1.5 4l6.5 5 6.5-5" /></> },
  { k: "browser", cls: "browser", name: "Browser", detail: "anything without a connection", icon: <><circle cx="8" cy="8" r="6.5" /><path d="M1.5 8h13M8 1.5c1.9 2 2.8 4.1 2.8 6.5S9.9 12.5 8 14.5M8 1.5C6.1 3.5 5.2 5.6 5.2 8s.9 4.5 2.8 6.5" /></> },
];

// Outcomes are the ones Connor confirmed from real installs; no other performance claims.
const JOB_CARDS = [
  {
    title: "Launching a new service or service area",
    route: [["website", "Website"], ["ads", "Ads"], ["analytics", "Analytics"], ["crm", "CRM"]],
    what: "A landing page, a campaign aimed at the right searches, conversion tracking, and the new leads wired into follow-up.",
    outcome: "Live the same day.",
  },
  {
    title: "Answering a new lead",
    route: [["website", "Website"], ["crm", "CRM"], ["email", "Email + calendar"]],
    what: "The lead comes in from a form or an ad, lands in the CRM with where it came from, and gets a reply from your business.",
    outcome: "New leads hear back within five minutes.",
  },
  {
    title: "Publishing new pages on the website",
    route: [["search", "Search data"], ["website", "Website"]],
    what: "Writing the page, building it into the site, checking it on a phone, and getting it in front of Google.",
    outcome: "Three or four new pages a day.",
  },
];

// What plays on the console for each job: request, plan, steps [system, label, action], closing word.
const JOBS = [
  {
    req: "We're adding a new service. Get the page, the campaign and the follow-up live today.",
    plan: "Service page on the website, a campaign in ads, tracking in analytics, follow-up in the CRM.",
    steps: [["website", "Website", "service page drafted"], ["ads", "Ads", "campaign built"], ["analytics", "Analytics", "conversion tracking added"], ["crm", "CRM", "follow-up wired"]],
    end: "Live.", status: "LIVE", route: "WEBSITE ▸ ADS ▸ ANALYTICS ▸ CRM",
  },
  {
    req: "A new lead just came in from the website. Log it and get them a reply.",
    plan: "Capture the lead, log it in the CRM with its source, reply from your business.",
    steps: [["website", "Website", "lead captured from the form"], ["crm", "CRM", "logged with its source"], ["email", "Email + calendar", "reply sent"]],
    end: "Answered.", status: "ANSWERED", route: "WEBSITE ▸ CRM ▸ EMAIL",
  },
  {
    req: "Write pages for the searches we're missing and get them on the site.",
    plan: "Find the gaps in search, write the pages, build them in, check them on a phone, send them to Google.",
    steps: [["search", "Search data", "missing searches found"], ["website", "Website", "pages written and built in"], ["website", "Website", "checked on a phone"], ["website", "Website", "sent to Google"]],
    end: "Published.", status: "PUBLISHED", route: "SEARCH DATA ▸ WEBSITE",
  },
];

// Desktop stage positions (900x700 canvas): node center, which side the wire leaves the node, which
// side of the console it enters, and the offset along that side.
const DESK = {
  pilot: { p: [450, 52], a: "bottom", e: "top", o: 0 },
  website: { p: [252, 52], a: "bottom", e: "top", o: -150 },
  ads: { p: [648, 52], a: "bottom", e: "top", o: 150 },
  email: { p: [88, 225], a: "right", e: "left", o: -75 },
  social: { p: [812, 225], a: "left", e: "right", o: -75 },
  erp: { p: [88, 475], a: "right", e: "left", o: 75 },
  analytics: { p: [812, 475], a: "left", e: "right", o: 75 },
  crm: { p: [252, 648], a: "top", e: "bottom", o: -150 },
  browser: { p: [450, 648], a: "top", e: "bottom", o: 0 },
  search: { p: [648, 648], a: "top", e: "bottom", o: 150 },
};
const TYPE_MS = 26;
const CANCEL = "cancel";

function startStage(root) {
  const $ = (s) => root.querySelector(s);
  const stage = $("#stage"), wrap = $("#stageWrap"), con = $("#console"), svg = $("#wires"), atmos = $("#atmos");
  const reqEl = $("#req"), planEl = $("#plan"), stepsEl = $("#steps"), doneEl = $("#done"), wordEl = $("#doneWord"), routeEl = $("#doneRoute"), statusEl = $("#status"), bodyEl = $("#cbody"), caret = $("#caret");
  const tabs = Array.from(root.querySelectorAll(".tab")), cards = Array.from(root.querySelectorAll(".job"));
  const echoes = Array.from(stage.querySelectorAll(".echo"));
  const nodes = {};
  stage.querySelectorAll(".node").forEach((n) => { nodes[n.dataset.sys] = n; });
  const mqDesk = matchMedia("(min-width: 860px)"), mqRM = matchMedia("(prefers-reduced-motion: reduce)");
  let wires = {}, lit = {}, scale = 1, runId = 0, stopped = false;

  const rect = (el) => {
    const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect();
    return { x: (r.left - s.left) / scale, y: (r.top - s.top) / scale, w: r.width / scale, h: r.height / scale };
  };
  const f = (n) => Math.round(n * 10) / 10;

  function layout() {
    const desk = mqDesk.matches;
    if (desk) {
      scale = Math.min(1, wrap.clientWidth / 900);
      wrap.style.setProperty("--s", scale);
      for (const k in DESK) { nodes[k].style.left = DESK[k].p[0] + "px"; nodes[k].style.top = DESK[k].p[1] + "px"; }
    } else {
      scale = 1;
      wrap.style.removeProperty("--s");
    }
    draw(desk);
  }

  // Route an orthogonal-then-45-degree wire from each node to its port on the console.
  function draw(desk) {
    const W = desk ? 900 : stage.offsetWidth, H = desk ? 700 : stage.offsetHeight;
    svg.setAttribute("width", W); svg.setAttribute("height", H); svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const c = rect(con), cx = c.x + c.w / 2, cy = c.y + c.h / 2;
    const fu = `filterUnits="userSpaceOnUse" x="-50" y="-50" width="${W + 100}" height="${H + 100}"`;
    let h = `<defs><filter id="glow" ${fu}><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>` +
      `<filter id="bloom" ${fu}><feGaussianBlur stdDeviation="5" result="b"/><feGaussianBlur in="SourceGraphic" stdDeviation="1.6" result="c"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
    if (desk) h += `<ellipse class="orbit" cx="${f(cx)}" cy="${f(cy)}" rx="396" ry="346"/>`;
    for (const k in nodes) {
      const n = nodes[k];
      if (getComputedStyle(n).display === "none") continue;
      const r = rect(n);
      let a, e, o;
      if (desk) { ({ a, e, o } = DESK[k]); }
      else {
        if (k === "pilot" || k === "browser") continue;
        const above = r.y + r.h / 2 < cy;
        a = above ? "bottom" : "top"; e = above ? "top" : "bottom"; o = (r.x + r.w / 2 - cx) * 0.72;
      }
      const G = 3;
      let A, P;
      if (a === "bottom") A = [r.x + r.w / 2, r.y + r.h + G]; else if (a === "top") A = [r.x + r.w / 2, r.y - G];
      else if (a === "left") A = [r.x - G, r.y + r.h / 2]; else A = [r.x + r.w + G, r.y + r.h / 2];
      if (e === "top") P = [cx + o, c.y - G]; else if (e === "bottom") P = [cx + o, c.y + c.h + G];
      else if (e === "left") P = [c.x - G, cy + o]; else P = [c.x + c.w + G, cy + o];
      let pts, dx = P[0] - A[0], dy = P[1] - A[1], s;
      if (a === "top" || a === "bottom") {
        if (Math.abs(dx) > Math.abs(dy)) { P[0] = A[0] + Math.sign(dx) * Math.abs(dy); dx = P[0] - A[0]; }
        s = (Math.abs(dy) - Math.abs(dx)) / 2 * Math.sign(dy);
        pts = [A, [A[0], A[1] + s], [P[0], P[1] - s], P];
      } else {
        if (Math.abs(dy) > Math.abs(dx)) { P[1] = A[1] + Math.sign(dy) * Math.abs(dx); dy = P[1] - A[1]; }
        s = (Math.abs(dx) - Math.abs(dy)) / 2 * Math.sign(dx);
        pts = [A, [A[0] + s, A[1]], [P[0] - s, P[1]], P];
      }
      const d = "M" + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join(" L");
      h += `<g class="wire" data-k="${k}"><path class="w-base${k === "browser" ? " dash" : ""}" d="${d}"/><path class="w-lit" d="${d}" filter="url(#glow)"/><path class="w-flow" d="${d}"/><path class="w-amb" d="${d}" filter="url(#glow)"/><path class="w-pulse" d="${d}" filter="url(#bloom)"/>` +
        `<rect class="port" x="${f(A[0] - 2.5)}" y="${f(A[1] - 2.5)}" width="5" height="5"/><rect class="port" x="${f(P[0] - 2.5)}" y="${f(P[1] - 2.5)}" width="5" height="5"/></g>`;
    }
    svg.innerHTML = h;
    wires = {};
    svg.querySelectorAll(".wire").forEach((g) => {
      const k = g.getAttribute("data-k"), p = g.querySelector(".w-pulse");
      wires[k] = { g, pulse: p, amb: g.querySelector(".w-amb"), len: p.getTotalLength() };
      if (lit[k]) g.classList.add("on");
    });
    atmos.style.left = f(cx) + "px"; atmos.style.top = f(cy) + "px";
    echoes.forEach((el) => { el.style.left = f(c.x) + "px"; el.style.top = f(c.y) + "px"; el.style.width = f(c.w) + "px"; el.style.height = f(c.h) + "px"; });
  }

  function pulse(k, dir, dur) {
    const w = wires[k];
    if (!w || mqRM.matches || !w.pulse.animate) return Promise.resolve();
    const L = w.len, seg = Math.min(56, L * 0.6);
    w.pulse.style.strokeDasharray = `${seg} ${L + seg + 40}`;
    const from = dir === "in" ? seg : -L, to = dir === "in" ? -L : seg;
    const an = w.pulse.animate([{ strokeDashoffset: from, opacity: 1 }, { strokeDashoffset: to, opacity: 1 }], { duration: dur, easing: "cubic-bezier(.45,0,.3,1)" });
    return an.finished.catch(() => {});
  }

  // Ambient telemetry: every system quietly reports in to the operator.
  const SYS = ["website", "ads", "social", "analytics", "search", "crm", "erp", "email", "browser"];
  let ambLast = "";
  function ambient() {
    if (mqRM.matches || document.hidden) return;
    const pool = SYS.filter((k) => wires[k] && k !== ambLast && !nodes[k].classList.contains("working"));
    if (!pool.length) return;
    const k = pool[Math.floor(Math.random() * pool.length)], w = wires[k];
    if (!w.amb.animate) return;
    ambLast = k;
    const L = w.len, seg = Math.min(26, L * 0.4);
    w.amb.style.strokeDasharray = `${seg} ${L + seg + 40}`;
    w.amb.animate([{ strokeDashoffset: seg, opacity: 0.75 }, { strokeDashoffset: -L, opacity: 0.75 }], { duration: 1100 + Math.random() * 500, easing: "linear" });
  }
  const ambTimer = setInterval(ambient, 520);

  const sleep = (ms, id) => new Promise((res, rej) => { setTimeout(() => (id === runId && !stopped ? res() : rej(CANCEL)), ms); });
  const check = (id) => { if (id !== runId || stopped) throw CANCEL; };

  const setNode = (k, st) => { const n = nodes[k]; if (!n) return; n.classList.remove("working", "done", "flash"); if (st) n.classList.add(st); };
  const light = (k) => { lit[k] = true; if (wires[k]) wires[k].g.classList.add("on"); };
  const chip = (i, k) => { cards[i].querySelectorAll(`.rc[data-k="${k}"]`).forEach((c) => c.classList.add("on")); };

  function bar(i, ms) {
    tabs.forEach((t, j) => {
      const b = t.querySelector(".bar i");
      b.style.transition = "none"; b.style.transform = `scaleX(${j === i && ms === 0 ? 1 : 0})`;
    });
    if (ms > 0) {
      const b = tabs[i].querySelector(".bar i");
      void b.offsetWidth;
      b.style.transition = `transform ${ms}ms linear`; b.style.transform = "scaleX(1)";
    }
  }

  function reset(i) {
    bodyEl.style.opacity = 1;
    con.classList.remove("is-live"); stage.classList.remove("is-live"); con.dataset.state = "idle"; statusEl.textContent = "READY";
    reqEl.textContent = ""; planEl.textContent = ""; stepsEl.innerHTML = "";
    doneEl.style.transition = "none"; doneEl.classList.remove("show"); void doneEl.offsetWidth; doneEl.style.transition = "";
    caret.hidden = false;
    lit = {};
    for (const k in wires) wires[k].g.classList.remove("on");
    for (const n in nodes) setNode(n, null);
    tabs.forEach((t, j) => { t.classList.toggle("on", j === i); t.setAttribute("aria-selected", j === i); });
    cards.forEach((c, j) => { c.classList.toggle("is-on", j === i); c.querySelectorAll(".rc").forEach((r) => r.classList.remove("on")); });
  }

  function addStep(name, action, ok) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="st"><svg viewBox="0 0 12 12"><path d="M3 6.2l2 2 4-4.4"/></svg></span><span class="txt"><b></b><span class="dot">·</span><span class="act"></span></span><span class="tag">${ok ? "DONE" : "WORKING"}</span>`;
    li.querySelector("b").textContent = name; li.querySelector(".act").textContent = action;
    if (ok) { li.classList.add("ok"); li.style.animation = "none"; }
    stepsEl.appendChild(li);
    return li;
  }

  function finish(J) {
    con.dataset.state = "live"; statusEl.textContent = J.status;
    wordEl.textContent = J.end; routeEl.textContent = J.route;
    doneEl.classList.add("show"); con.classList.add("is-live"); stage.classList.add("is-live");
  }

  async function runJob(i, id) {
    const J = JOBS[i], words = J.plan.split(" ");
    reset(i);
    bar(i, 200 + J.req.length * TYPE_MS + 300 + 200 + words.length * 38 + 450 + J.steps.length * 1300 + 2700);
    await sleep(200, id);
    con.dataset.state = "listen"; statusEl.textContent = "LISTENING";
    setNode("pilot", "working"); pulse("pilot", "in", 800);
    for (let c = 0; c < J.req.length; c++) { reqEl.textContent = J.req.slice(0, c + 1); await sleep(TYPE_MS, id); }
    await sleep(300, id);
    caret.hidden = true; setNode("pilot", "done"); light("pilot"); pulse("pilot", "in", 600);
    con.dataset.state = "plan"; statusEl.textContent = "PLANNING";
    await sleep(200, id);
    for (let w = 0; w < words.length; w++) { planEl.textContent = words.slice(0, w + 1).join(" "); await sleep(38, id); }
    await sleep(450, id);
    con.dataset.state = "work"; statusEl.textContent = "WORKING";
    let prev = null;
    for (const [k, name, action] of J.steps) {
      const li = addStep(name, action, false);
      if (prev) { await pulse(prev, "in", 420); check(id); }
      pulse(k, "out", 560); setNode(k, "working");
      await sleep(prev ? 640 : 1000, id);
      li.classList.add("ok"); li.querySelector(".tag").textContent = "DONE";
      setNode(k, "done"); light(k); chip(i, k);
      prev = k;
      await sleep(240, id);
    }
    finish(J);
    echoes.forEach((el) => { el.classList.remove("go"); void el.offsetWidth; el.classList.add("go"); });
    const seen = {};
    J.steps.forEach(([k]) => {
      if (seen[k]) return;
      seen[k] = 1;
      pulse(k, "out", 700);
      const n = nodes[k];
      n.classList.remove("flash"); void n.offsetWidth; n.classList.add("flash");
    });
    await sleep(2700, id);
    bodyEl.style.opacity = 0;
    await sleep(450, id);
  }

  async function play(i) {
    const id = ++runId;
    try {
      for (;;) { await runJob(i, id); i = (i + 1) % JOBS.length; }
    } catch {
      // Cancelled by a tab click, a reduced-motion switch, or unmount.
    }
  }

  // Reduced motion: show a job's finished state with nothing moving.
  function still(i) {
    runId++;
    const J = JOBS[i];
    reset(i);
    reqEl.textContent = J.req; caret.hidden = true; planEl.textContent = J.plan;
    setNode("pilot", "done"); light("pilot");
    J.steps.forEach(([k, name, action]) => { addStep(name, action, true); setNode(k, "done"); light(k); chip(i, k); });
    finish(J);
    bar(i, 0);
  }

  const onTab = (e) => { const i = Number(e.currentTarget.dataset.i); if (mqRM.matches) still(i); else play(i); };
  tabs.forEach((t) => t.addEventListener("click", onTab));

  let raf = 0;
  const onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); };
  window.addEventListener("resize", onResize);

  const start = () => { if (stopped) return; layout(); if (mqRM.matches) still(0); else play(0); };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start, start);

  return () => {
    stopped = true;
    runId++;
    clearInterval(ambTimer);
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    tabs.forEach((t) => t.removeEventListener("click", onTab));
  };
}

const Arrow = ({ d }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true"><path d={d} /></svg>
);

export default function CommandStage({ children }) {
  const rootRef = useRef(null);
  useEffect(() => startStage(rootRef.current), []);

  return (
    <div ref={rootRef}>
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="noise" />
        <div className="hero-in">
          <div className="hero-copy">
            <span className="chip"><i />AI agents<span className="sep">/</span>for small teams</span>
            <h1>AI agents for business, wired into <span className="hl">every system you run.</span></h1>
            <p className="sub">
              Most people meet AI as a chat window that can&apos;t see anything about their business.
              I build an operator that works inside your website, ads, social accounts, analytics,
              CRM, ERP and email, and reaches all of them at once, so the operational work your team
              does by hand gets done in a fraction of the time.
            </p>
            <p className="small">
              Someone on your team pilots it. I stand it up inside your company, on your accounts,
              and stay until your people run it without me.
            </p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/schedule">Book a growth audit<Arrow d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" /></Link>
              <a className="btn btn-ghost" href="#what">See what it does<Arrow d="M7 2v9M3.5 7.5L7 11l3.5-3.5" /></a>
            </div>
          </div>

          <div className="stage-wrap" id="stageWrap">
            <p className="sr">
              An operator console sits at the center of eight business systems: website, ads, social,
              analytics, search data, CRM, ERP and accounting, and email and calendar, plus a browser
              for anything without a connection. A pilot on your team types a request in plain
              English; the operator plans it and carries it out across the systems.
            </p>
            <div className="stage-fit" aria-hidden="true">
              <div className="stage" id="stage">
                <div className="atmos" id="atmos"><div className="agrid" /><div className="glow" /><div className="core" /><div className="flare" /></div>
                <svg className="wires" id="wires" />
                <div className="echo e1" /><div className="echo e2" />

                {NODES.map((n) => (
                  <div key={n.k} className={`node${n.cls ? ` ${n.cls}` : ""}`} data-sys={n.k}>
                    <span className="n-ico"><svg viewBox="0 0 16 16">{n.icon}</svg></span>
                    <span className="n-txt"><b>{n.name}</b><i>{n.detail}</i></span>
                    {n.idx && <span className="n-idx">{n.idx}</span>}
                  </div>
                ))}

                <div className="console" id="console" data-state="idle">
                  <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
                  <div className="c-head"><span className="c-mark" /><span className="c-title">OPERATOR</span><span className="c-status"><i /><span id="status">READY</span></span></div>
                  <div className="c-body" id="cbody">
                    <div className="c-label">Pilot <em>/</em> plain English</div>
                    <div className="c-req"><span id="req" /><span className="caret" id="caret" /></div>
                    <div className="c-op">
                      <div className="c-label">Operator <em>/</em> plan</div>
                      <div className="c-plan" id="plan" />
                    </div>
                    <ol className="c-steps" id="steps" />
                    <div className="c-done" id="done"><span className="c-word" id="doneWord">Live.</span><span className="c-route" id="doneRoute" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stage-foot">
              <p className="cap"><b>FIG. 1</b><span>The operator. Sees the whole board. Executes what you say.</span></p>
              <div className="tabs" role="tablist" aria-label="Jobs">
                {["New service", "New lead", "New pages"].map((label, i) => (
                  <button key={label} className={`tab${i === 0 ? " on" : ""}`} role="tab" data-i={i}>
                    <em>{String(i + 1).padStart(2, "0")}</em>{label}<span className="bar"><i /></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="horizon" />
      </section>

      <div className="ground" id="what">
        <section className="sheet">
          <span className="wire-in" aria-hidden="true" /><span className="wire-port top" aria-hidden="true" /><span className="wire-port" aria-hidden="true" />
          <div className="sheet-in">
            <div className="what-head">
              <div>
                <div className="fig">FIG. 2 <span style={{ color: "var(--t3)" }}>/</span> Three jobs</div>
                <h2>What it does</h2>
              </div>
              <p className="what-lede">Three of the jobs it runs, and the systems each one passes through.</p>
            </div>
            <div className="jobs">
              {JOB_CARDS.map((job, i) => (
                <article key={job.title} className="job" data-i={i}>
                  <div className="job-top"><span>Job {String(i + 1).padStart(2, "0")}</span><span className="onstage"><i />On stage</span></div>
                  <h3>{job.title}</h3>
                  <div className="route">
                    {job.route.map(([k, label], j) => (
                      <span key={k} className="contents">
                        {j > 0 && <span className="arr">▸</span>}
                        <span className="rc" data-k={k}>{label}</span>
                      </span>
                    ))}
                  </div>
                  <p>{job.what}</p>
                  <div className="outcome"><div className="outcome-in"><div className="fig">Outcome</div><strong>{job.outcome}</strong></div></div>
                </article>
              ))}
            </div>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}
