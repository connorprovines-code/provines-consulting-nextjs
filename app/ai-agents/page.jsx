import PageContent, { faqs } from "./PageContent";
import { agentsVideoJsonLd } from "@/components/AgentsVideo";
import { ORG_ID, AREA_SERVED } from "@/lib/site";

const description =
  "AI agents for small business: one operator connected to your website, ads, CRM, ERP and email, installed by an AI consultant and directed by your own team.";

export const metadata = {
  title: "AI Agents for Business",
  description,
  alternates: { canonical: "/ai-agents" },
  openGraph: {
    title: "AI Agents for Business | Provines Consulting",
    description,
    url: "https://www.provinesconsulting.com/ai-agents",
    images: [{ url: "/og/ai-agents.png", width: 1200, height: 630, alt: "An AI operator console wired to a business's website, ads, social, analytics, CRM, ERP and email" }],
  },
  twitter: {
    title: "AI Agents for Business | Provines Consulting",
    description,
    images: ["/og/ai-agents.png"],
  },
};

const jsonLd = [
  agentsVideoJsonLd(),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI agents for business",
    serviceType: "AI agent implementation",
    description,
    url: "https://www.provinesconsulting.com/ai-agents",
    areaServed: AREA_SERVED,
    provider: { "@id": ORG_ID },
    audience: { "@type": "BusinessAudience", audienceType: "Owners and CEOs of small businesses" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.provinesconsulting.com" },
      { "@type": "ListItem", position: 2, name: "AI agents", item: "https://www.provinesconsulting.com/ai-agents" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  },
];

export default function AiAgents() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageContent />
    </>
  );
}
