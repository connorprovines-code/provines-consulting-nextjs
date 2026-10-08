import PageContent from "./PageContent";

const description =
  "A marketing and operations audit for owner-operated businesses: your website, CRM, ad accounts and team hours, read from inside your own accounts, with what each gap costs.";

export const metadata = {
  title: "Growth Audit: Marketing and Operations Audit",
  description,
  alternates: { canonical: "/growth-audit" },
  openGraph: {
    title: "Growth Audit: Marketing and Operations Audit | Provines Consulting",
    description,
    url: "https://www.provinesconsulting.com/growth-audit",
    images: [{ url: "/og/growth-audit.png", width: 1200, height: 630, alt: "A marketing audit that shows what you own and what you rent." }],
  },
  twitter: {
    title: "Growth Audit: Marketing and Operations Audit | Provines Consulting",
    description,
    images: ["/og/growth-audit.png"],
  },
};

export default function GrowthAudit() {
  return <PageContent />;
}
