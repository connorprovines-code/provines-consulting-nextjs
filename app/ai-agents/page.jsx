import PageContent, { faqs } from "./PageContent";

const description =
  "What AI agents can actually do inside a business: one operator wired into your website, ads, CRM, analytics, ERP and email, piloted by your own team.";

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
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI agents for business",
    serviceType: "AI agent implementation",
    description,
    url: "https://www.provinesconsulting.com/ai-agents",
    areaServed: "US",
    provider: {
      "@type": "ProfessionalService",
      name: "Provines Consulting",
      url: "https://www.provinesconsulting.com",
    },
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
