import ServicesContent from "./PageContent";

export const metadata = {
  title: "Services",
  description:
    "Marketing infrastructure, AI assistants, growth consulting, website builds, and custom development. Designed by someone who's run demand gen and built pipeline for 12+ years.",
  openGraph: {
    title: "Services | Provines Consulting",
    description:
      "Marketing infrastructure, AI assistants, growth consulting, and custom development for business owners.",
  },
};

export default function Services() {
  return <ServicesContent />;
}
