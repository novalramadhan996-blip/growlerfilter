import { createFileRoute } from "@tanstack/react-router";

import { GrowlerExperience } from "@/components/growler/growler-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Growler Filter — Illegal Content Filtering Engine" },
      {
        name: "description",
        content:
          "Institutional content filtering console for detecting illegal content, analyzing filtering signals, preserving evidence, and orchestrating rapid suppression.",
      },
      { property: "og:title", content: "Growler Filter — Illegal Content Filtering Engine" },
      {
        property: "og:description",
        content:
          "Live filtering interface for analyzing illegal content networks, synthetic abuse escalation, and adaptive intervention workflows.",
      },
      { name: "twitter:title", content: "Growler Filter — Illegal Content Filtering Engine" },
      {
        name: "twitter:description",
        content:
          "Interactive content filtering console for real-time detection, forensic extraction, and quantified suppression decisions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <GrowlerExperience />;
}
