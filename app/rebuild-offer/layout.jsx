import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Route-level layout for /rebuild-offer
// - Suppresses shared nav and footer (cold outreach landing page)
// - Injects CSS variables and Inter for headings (overrides Geist)
export default function RebuildOfferLayout({ children }) {
  return (
    <div className={inter.variable}>
      <style>{`
        :root {
          --navy: #0A1F44;
          --electric-blue: #0091FF;
          --mint: #00D9A3;
          --charcoal: #1A1A1A;
          --off-white: #F8FAFC;
        }
      `}</style>
      {children}
    </div>
  );
}
