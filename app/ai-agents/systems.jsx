// The systems an operator connects to: shared by the /ai-agents stage and its subpages.

export const NODES = [
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

export const NODE_BY_KEY = Object.fromEntries(NODES.map((n) => [n.k, n]));
