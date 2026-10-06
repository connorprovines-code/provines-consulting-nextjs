import HomeContent from "./HomeContent";
import { agentsVideoJsonLd } from "@/components/AgentsVideo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentsVideoJsonLd()) }} />
      <HomeContent />
    </>
  );
}
