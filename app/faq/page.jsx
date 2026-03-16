import FAQContent from "./PageContent";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly do you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marketing infrastructure. Website, CRM, AI assistants, content systems, SEO, lead automation — one integrated system. Everything a marketing team would build, delivered as infrastructure you own."
      }
    },
    {
      "@type": "Question",
      "name": "What are the AI assistants and how do they work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Claude-powered AI agents trained on your business. They connect to your CRM, manage content, handle lead intake, schedule appointments, and automate operations. Not a chat widget — real agents doing real work. Built on Anthropic's Claude, configured for your data and workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from hiring a marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An agency charges monthly and you never own anything. Every change, every update — you're calling them and paying for it. I build systems you own completely. After handoff — no recurring fees, no lock-in, no dependency. You run it yourself."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from a chatbot tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most chatbot tools are a widget answering questions from a knowledge base. My AI assistants are integrated into your systems — CRM, website, scheduling, pipeline. They don't just answer questions. They route leads, update your website, draft content, and manage follow-up."
      }
    },
    {
      "@type": "Question",
      "name": "What technology do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Next.js and React for websites. Supabase for databases. Vercel for hosting. Anthropic's Claude for AI. Various APIs for CRM, email, scheduling, and enrichment. Modern, open, maintainable by any developer."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need technical knowledge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Plain English management. Tell your AI to update the homepage. Check leads in your dashboard. Approve content your AI drafted. If you can write an email, you can run these systems."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every engagement is scoped to what you actually need — some businesses need one workflow, others need the full build. We figure out what makes sense on a call and you know exactly what you're getting before anything starts."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "90 days of support, full documentation, training. Then you're independent. Code yours, infrastructure yours, data yours. Any developer can maintain or extend it."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service businesses, contractors, home builders, SMB owner-operators who need marketing infrastructure but don't have or want a marketing team. Also small SaaS companies on AI integration."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website rebuild with basic AI assistants: 3-4 weeks. Full marketing infrastructure build: 6-8 weeks. Specific timeline during scoping."
      }
    }
  ]
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
