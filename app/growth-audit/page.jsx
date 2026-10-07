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
  },
};

export default function GrowthAudit() {
  return <PageContent />;
}
