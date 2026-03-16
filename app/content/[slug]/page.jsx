import ArticleContent from "./PageContent";

const articles = {
  "what-ai-agents-actually-do-for-small-business": {
    title: "What AI Agents Actually Do for a Small Business",
    description:
      "Not chatbots. Not hype. Here's what AI agents look like when they're installed in a real service business.",
  },
  "manual-operations-killing-your-margins": {
    title: "The Manual Operations Quietly Killing Your Margins",
    description:
      "How to spot the manual processes silently taxing your margins — and what to do about them.",
  },
  "why-off-the-shelf-software-doesnt-fit": {
    title: "Why Off-the-Shelf Software Never Quite Fits Your Business",
    description:
      "You're paying for four platforms and a VA to stitch them together. There's another way.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Provines Consulting`,
      description: article.description,
      type: "article",
      authors: ["Connor Provines"],
    },
  };
}

export default function ArticlePage() {
  return <ArticleContent />;
}
