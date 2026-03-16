import ContactContent from "./PageContent";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about your marketing infrastructure. Send a message or book a discovery call. No pitch, no pressure.",
  openGraph: {
    title: "Contact | Provines Consulting",
    description:
      "Send a message or book a discovery call about your marketing infrastructure.",
  },
};

export default function Contact() {
  return <ContactContent />;
}
