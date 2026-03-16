import ScheduleContent from "./PageContent";

export const metadata = {
  title: "Book a Discovery Call",
  description:
    "30 minutes. No pitch. We'll figure out what your marketing infrastructure should look like and what to build first.",
  openGraph: {
    title: "Book a Discovery Call | Provines Consulting",
    description:
      "30 minutes, no pitch. Let's figure out what to build first.",
  },
};

export default function Schedule() {
  return <ScheduleContent />;
}
