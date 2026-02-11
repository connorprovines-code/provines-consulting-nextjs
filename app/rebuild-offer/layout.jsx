import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

// Route-level layout for /rebuild-offer
// - Suppresses shared nav and footer (cold outreach landing page)
// - Injects CSS variables and Lora serif font for headings
export default function RebuildOfferLayout({ children }) {
  return (
    <div className={lora.variable}>
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
