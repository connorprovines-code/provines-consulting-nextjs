import AboutContent from "./PageContent";

export const metadata = {
  title: "About",
  description:
    "12+ years in B2B SaaS marketing — demand gen, GTM, pipeline ops. Now I build the marketing infrastructure that business owners actually own and run themselves.",
  openGraph: {
    title: "About Connor Provines | Provines Consulting",
    description:
      "12+ years in B2B SaaS marketing leadership, now building marketing infrastructure for business owners.",
  },
};

export default function About() {
  return <AboutContent />;
}
