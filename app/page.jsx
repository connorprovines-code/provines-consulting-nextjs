import HomeContent from "./HomeContent";
import { agentsVideoJsonLd } from "@/components/AgentsVideo";

const title = "Provines Consulting | AI and Marketing Consultant in San Jose";
const description =
  "San Jose AI and marketing consultant. I replace your agency with a system you own: website, CRM and ads, run by an AI operator you direct in plain English.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://www.provinesconsulting.com/",
    images: [{ url: "/og/ai-agents.png", width: 1200, height: 630, alt: "An AI operator console wired to a business's website, ads, social, analytics, CRM, ERP and email" }],
  },
  twitter: {
    title,
    description,
    images: ["/og/ai-agents.png"],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentsVideoJsonLd()) }} />
      <HomeContent />
    </>
  );
}
