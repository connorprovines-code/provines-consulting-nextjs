// The 39-second "what we do" video for the AI agents offer (music: Option A, Pixabay license, 2026-10-06).
// Plays only when pressed: controls, poster frame, no autoplay. The 16:9 box reserves space so nothing shifts.

export const AGENTS_VIDEO = {
  src: "/video/ai-agents.mp4",
  poster: "/video/ai-agents-poster.jpg",
  name: "AI agents for business: one operator, every system",
  description:
    "One AI operator connected to a business's website, ads, social, analytics, CRM, ERP and email, carrying plain-English requests through every system it touches, with approval before anything spends or publishes.",
  uploadDate: "2026-10-06",
  duration: "PT39S",
};

export function agentsVideoJsonLd() {
  const site = "https://www.provinesconsulting.com";
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: AGENTS_VIDEO.name,
    description: AGENTS_VIDEO.description,
    thumbnailUrl: [`${site}${AGENTS_VIDEO.poster}`],
    uploadDate: AGENTS_VIDEO.uploadDate,
    duration: AGENTS_VIDEO.duration,
    contentUrl: `${site}${AGENTS_VIDEO.src}`,
  };
}

export default function AgentsVideo({ className = "" }) {
  return (
    <div className={`relative aspect-video bg-[#060A12] border border-[var(--navy)] shadow-[0_24px_60px_-28px_rgba(3,105,161,0.55)] ${className}`}>
      <video
        className="absolute inset-0 w-full h-full"
        controls
        preload="metadata"
        playsInline
        poster={AGENTS_VIDEO.poster}
        aria-label={AGENTS_VIDEO.name}
      >
        <source src={AGENTS_VIDEO.src} type="video/mp4" />
      </video>
    </div>
  );
}
