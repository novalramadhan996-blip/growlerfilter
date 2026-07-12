import type { ReactNode } from "react";

import {
  Activity,
  Binary,
  Bot,
  BrainCircuit,
  Camera,
  ChevronRight,
  Clock3,
  Crosshair,
  Eye,
  FileImage,
  FileSearch,
  Globe,
  Layers3,
  Radar,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Waypoints,
} from "lucide-react";

import growlerFilterHero from "../../assets/growler logo2.png";
import growlerFilterLogo from "../../assets/growler logo2.png";
import { Button } from "../ui/button";
import {
  GrowlerMetric,
  GrowlerPanel,
  GrowlerSectionHeading,
  GrowlerStatusChip,
  GrowlerThreatMeter,
} from "./growler-primitives";
const bootLines = [
  "Initializing GROWLER FILTER Engine...",
  "Scanning Global Network...",
  "Content Filtering System: ACTIVE",
];

const liveFeed = [
  {
    title: "Detected: Suspected CSAM distribution cluster",
    source: "NCMEC-linked signal graph // 2024",
    timestamp: "03:14:28 UTC",
    risk: 97,
    detail:
      "More than 62 million suspected CSAM images were reported in 2024, with 546,000 online enticement reports reinforcing sustained exploitation pressure.",
  },
  {
    title: "Flagged: AI-generated abuse escalation",
    source: "Synthetic media classifier // IWF + 2024 trendline",
    timestamp: "03:15:01 UTC",
    risk: 95,
    detail:
      "Reports of AI-generated CSAM rose from 4,700 in 2023 to more than 67,000 in 2024, indicating industrialized synthetic abuse production.",
  },
  {
    title: "Risk Level: Severe video synthesis acceleration",
    source: "Video forensics mesh // 2025",
    timestamp: "03:15:44 UTC",
    risk: 99,
    detail:
      "IWF identified 3,440 AI-generated child abuse videos in 2025 versus 13 the prior year, with most classified in the most severe abuse category.",
  },
];

const widgets = [
  { label: "Suspected CSAM Images", value: "62M+", detail: "Reported in 2024 across intake networks" },
  { label: "Online Enticement Reports", value: "546K", detail: "Year-over-year escalation of predatory contact" },
  { label: "AI Abuse Reports", value: "67K+", detail: "Up 1,325% from the prior year" },
  { label: "AI Abuse Videos", value: "3,440", detail: "2025 discovery count from 13 the year before" },
];

const threatLandscape = [
  {
    label: "Exploitation Pressure",
    value: "192%",
    detail:
      "Online enticement growth shows how quickly coercive ecosystems adapt, recruit, and re-target vulnerable minors.",
  },
  {
    label: "Illicit Economy Scale",
    value: "$2.4B",
    detail:
      "Crypto-enabled drug sales approached $2.4 billion, while Russian-language darknet drug markets alone generated more than $1.7 billion in 2024.",
  },
  {
    label: "Gambling Expansion",
    value: "$130.2B",
    detail:
      "The online gambling market is projected to reach $130.2 billion in 2025, intensifying compliance, addiction, and youth exposure risks.",
  },
];

const impactPanels = [
  {
    label: "Psychological Harm Index",
    value: "0.96",
    detail:
      "Persistent circulation of abuse material re-victimizes children and normalizes traumatic content for young audiences exposed to it.",
  },
  {
    label: "Exploitation Risk Level",
    value: "SEV-5",
    detail:
      "AI-generated abuse creates new victims by weaponizing likenesses, while illicit networks use anonymity, payment rails, and rapid mirroring.",
  },
  {
    label: "Content Spread Velocity",
    value: "26,362%",
    detail:
      "The jump from 13 to 3,440 AI-generated abuse videos shows how synthetic pipelines can scale illegal content faster than manual enforcement.",
  },
];

const legacyMethods = [
  {
    title: "DNS Blocking",
    detail: "Easily bypassed by users who switch resolvers, leaving enforcement fragile against even basic circumvention.",
  },
  {
    title: "IP Blocking",
    detail: "Blunt blocking can disable legitimate services sharing infrastructure, as seen when overbroad actions disrupted platforms like Google Drive and YouTube.",
  },
  {
    title: "Static Filters",
    detail: "Keyword lists and signatures fail when adversaries rotate domains, encrypt traffic, and hide material inside otherwise legitimate environments.",
  },
];

const growlerMethods = [
  {
    title: "Adaptive intelligence",
    detail: "Treats each site as an ecosystem of signals instead of a single URL or keyword hit.",
  },
  {
    title: "Pattern recognition",
    detail: "Combines reputation, historical illegality, redirects, multimedia cues, and cross-site relationships to surface unseen threats.",
  },
  {
    title: "Context-aware filtering",
    detail: "Produces a deterministic verdict with quantified confidence, enabling graduated intervention or automatic suppression.",
  },
];

const governanceSignals = [
  {
    label: "Blocked Domains Reviewed",
    value: "43K+",
    detail: "Major studies found tens of thousands of blocked domains spread across fragmented provider enforcement.",
  },
  {
    label: "Consistently Blocked",
    value: "1,414",
    detail: "Only a small subset appeared blocked across all six major ISPs surveyed, exposing inconsistent execution.",
  },
  {
    label: "Operational Reality",
    value: "Patchwork",
    detail: "Smaller ISPs face logistical strain while larger telcos automate selectively, creating uneven protection for users.",
  },
];

const engineLayers = [
  {
    name: "Layer 1",
    title: "Signal Collection",
    detail:
      "Continuously ingests domain registrations, reputation histories, crawled HTML, forums, multimedia assets, redirects, and graph relationships.",
  },
  {
    name: "Layer 2",
    title: "Semantic Analysis",
    detail:
      "Interprets keyword density, coded language, page meaning, and contextual cues rather than relying on brittle literal matches.",
  },
  {
    name: "Layer 3",
    title: "Behavioral Modeling",
    detail:
      "Maps network structures, repeat operators, traffic patterns, and link behaviors to identify illegal ecosystems before they fully proliferate.",
  },
  {
    name: "Layer 4",
    title: "Risk Scoring Engine",
    detail:
      "Calculates site-wide likelihood of illegality using historical records, human reference data, multimedia training, and multi-signal convergence.",
  },
  {
    name: "Layer 5",
    title: "Decision Layer",
    detail:
      "Outputs deterministic illegal-or-not results with valid confidence scores and routes alerts, review queues, or blocking actions accordingly.",
  },
];

const capabilities = [
  {
    title: "Universal Content Format Coverage",
    detail: "Documents, images, videos, websites, domains, forums, and mixed-media environments are evaluated with the same forensic rigor.",
  },
  {
    title: "High-Throughput Parallel Processing",
    detail: "Hundreds or thousands of targets can be analyzed simultaneously without creating operational bottlenecks.",
  },
  {
    title: "Deterministic Results with Quantified Confidence",
    detail: "Operators receive a clear verdict plus evidence strength, reducing ambiguity and false positive friction.",
  },
  {
    title: "Persistent Historical Analytics",
    detail: "Every verdict, score, and evidence package is retained so the model can compare, track, and re-learn over time.",
  },
  {
    title: "Elastic Scalability and Sub-Second Latency",
    detail: "The platform expands from local deployments to national-scale traffic oversight while keeping decisions fast enough for point-of-access intervention.",
  },
];

const logs = [
  "03:15:12 // Analyzing domain registration and reputation trail...",
  "03:15:13 // Correlating historical illegal content signatures...",
  "03:15:14 // Semantic intent model detects coercive funnel...",
  "03:15:15 // Confidence threshold exceeded for intervention...",
  "03:15:16 // Evidence block committed with custody token...",
];

const timeline = [
  {
    time: "03:11:02",
    event: "Crawler mesh identifies a forum chain matching prior abuse and trafficking infrastructure patterns.",
    status: "signal" as const,
  },
  {
    time: "03:12:40",
    event: "Relational graph links the target to known illegal mirrors, redirect hubs, and payment-routing behavior.",
    status: "danger" as const,
  },
  {
    time: "03:15:16",
    event: "Suppression workflow initiates while forensic extraction preserves screenshots, HTML, hashes, and linked assets.",
    status: "success" as const,
  },
];

const crawlingMatrix = [
  {
    label: "Suspected Source Discovery",
    detail: "Multi-criteria crawling identifies data sources, domain names, forums, and behavioral patterns associated with illegal content.",
  },
  {
    label: "Intelligence Repository",
    detail: "Large collections of suspected sources and evidence are retained for trend analysis, enforcement support, and longitudinal tracking.",
  },
  {
    label: "Forensic Extraction",
    detail: "Once flagged, the system captures screenshots, metadata, HTML, multimedia assets, and related materials in audit-ready form.",
  },
  {
    label: "Efficient Browsing Engine",
    detail: "Throttled, parallelized, bandwidth-aware retrieval keeps crawling effective while minimizing cost, latency, and defensive disruption.",
  },
];

export function GrowlerExperience() {
  return (
    <main className="console-stage terminal-noise dark min-h-screen overflow-hidden bg-background text-foreground">
      <div className="data-stream" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <section className="console-section min-h-[92svh] pt-6 sm:pt-10">
          <div className="console-panel rounded-lg px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <GrowlerStatusChip label="Content Filtering Active" tone="signal" />
                <span className="console-label">Growler Filter System</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="signal-chip">LAT 51.5074 • LON 0.1278</span>
                <span className="signal-chip">UTC 03:15:44</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 pt-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <img
                src={growlerFilterHero}
                alt="Growler Filter — Intelligence Against Illegal Content"
                className="mr-auto w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto object-contain"
              />
              <div className="space-y-3">
                {bootLines.map((line, index) => (
                  <div className="boot-line" key={line} style={{ animationDelay: `${index * 180}ms` }}>
                    <span className={index === 2 ? "status-dot status-dot--success" : "status-dot"} />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="console-kicker">Illegal Content Filtering Engine</p>
                <h1 className="console-title glitch-text max-w-4xl text-balance">
                  Growler Filter — Institutional Defense Against Illegal Content
                </h1>
                <p className="console-copy text-base sm:text-lg">
                  Real-time content filtering detection, analysis, and suppression of harmful digital ecosystems for ISPs, governments, and platform operators.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@growlerfilter.com&su=Request%20for%20Demo"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="signal"
                    className="flex items-center justify-center gap-2 font-mono uppercase"
                  >
                    Contact Team
                    <ChevronRight className="w-4 h-4 text-black" />
                  </Button>
                </a>

                                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@growlerfilter.com&su=Joining%20The%20Team"
                  target="_blank"
                >
                  <Button
                    className="font-mono uppercase"
                    size="lg"
                    variant="console"
                  >
                    Apply Job
                  </Button>
                </a>
              </div>
            </div>

            <GrowlerPanel className="surface-glow overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="console-label">System Overview</p>
                  <p className="mt-2 text-lg font-medium">Escalation curves now exceed legacy filtering capacity</p>
                </div>
                <Radar className="text-primary" />
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-4 sm:grid-cols-2">
                {widgets.map((widget) => (
                  <GrowlerMetric key={widget.label} {...widget} />
                ))}
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-3 font-mono text-xs text-muted-foreground">
                {logs.map((log) => (
                  <div className="flex items-center gap-3" key={log}>
                    <span className="status-dot" />
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Live Filtering Feed"
            title="Continuous content filtering detection across abuse media, gambling ecosystems, trafficking forums, and covert link maps"
            description="Illegal content is not a narrow category anymore. It is a scaled, adaptive underground economy powered by synthetic media, crypto rails, and rapid infrastructure rotation."
          />
          <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {liveFeed.map((item) => (
                <GrowlerPanel className="group transition-transform duration-200 hover:-translate-y-1" key={item.title}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <GrowlerStatusChip label={item.timestamp} tone="danger" />
                        <span className="console-label">{item.source}</span>
                      </div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="max-w-2xl text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                    <div className="min-w-56 space-y-3 lg:max-w-64">
                      <GrowlerThreatMeter value={item.risk} />
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-md border border-border bg-surface/70 p-3">
                          <p className="console-label">Threat Class</p>
                          <p className="mt-2 font-mono text-primary">ILLEGAL CONTENT</p>
                        </div>
                        <div className="rounded-md border border-border bg-surface/70 p-3">
                          <p className="console-label">Priority</p>
                          <p className="mt-2 font-mono text-danger">Immediate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GrowlerPanel>
              ))}
            </div>
            <GrowlerPanel>
              <p className="console-label">Detected Activity Timeline</p>
              <div className="mt-5 space-y-4">
                {timeline.map((item) => (
                  <div className="grid grid-cols-[auto_1fr] gap-4" key={item.time}>
                    <div className="flex flex-col items-center gap-2">
                      <GrowlerStatusChip label={item.time} tone={item.status} />
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-4 text-sm text-muted-foreground">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hud-divider my-5" />
              <div className="grid gap-3 sm:grid-cols-2">
                <GrowlerMetric label="Online Gambling Market" value="$118.35B" detail="Estimated 2024 scale with further expansion projected for 2025" />
                <GrowlerMetric label="Adult Content Market" value="$69.8B" detail="Regulatory gray zones can obscure illegal or exploitative distribution paths" />
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Threat Landscape"
            title="The scale is no longer anecdotal. It is measurable, accelerating, and directly harmful to victims and society."
            description="Exposure, addiction, exploitation, and anonymity-driven commerce all intensify when illegal ecosystems become easier to discover, cheaper to operate, and faster to replicate."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {threatLandscape.map((panel) => (
              <GrowlerPanel key={panel.label}>
                <p className="console-label">{panel.label}</p>
                <p className="mt-6 font-mono text-4xl text-foreground">{panel.value}</p>
                <p className="mt-4 text-sm text-muted-foreground">{panel.detail}</p>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Impact Visualization"
            title="Analytical panels quantify re-victimization, exploitation intensity, and the speed at which harmful material spreads"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {impactPanels.map((panel, index) => (
              <GrowlerPanel key={panel.label} className="overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <p className="max-w-40 text-base font-medium">{panel.label}</p>
                  {index === 0 ? (
                    <BrainCircuit className="text-primary" />
                  ) : index === 1 ? (
                    <ShieldAlert className="text-danger" />
                  ) : (
                    <Activity className="text-warning" />
                  )}
                </div>
                <p className="mt-8 font-mono text-4xl text-foreground">{panel.value}</p>
                <p className="mt-4 text-sm text-muted-foreground">{panel.detail}</p>
                <GrowlerThreatMeter className="mt-6" value={index === 0 ? 96 : index === 1 ? 98 : 94} />
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Suppression Benchmark"
            title="ISP and government filtering remains necessary, but current methods are inconsistent, overbroad, and easy to evade"
            description="Blocking cannot be the whole answer when infrastructure changes faster than orders propagate and enforcement varies by provider, jurisdiction, and technical capacity."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <GrowlerPanel>
              <div className="flex items-center gap-3">
                <Siren className="text-danger" />
                <h3 className="text-xl font-medium">Old Methods</h3>
              </div>
              <div className="mt-6 space-y-3">
                {legacyMethods.map((item) => (
                  <div className="rounded-md border border-border bg-surface/60 p-4" key={item.title}>
                    <p className="font-mono text-sm text-muted-foreground">{item.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
            <GrowlerPanel className="surface-glow">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" />
                <h3 className="text-xl font-medium">Growler Filter</h3>
              </div>
              <div className="mt-6 space-y-3">
                {growlerMethods.map((item) => (
                  <div className="rounded-md border border-primary/25 bg-primary/10 p-4" key={item.title}>
                    <p className="font-mono text-sm text-primary">{item.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </GrowlerPanel>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {governanceSignals.map((signal) => (
              <GrowlerPanel key={signal.label}>
                <p className="console-label">{signal.label}</p>
                <p className="mt-6 font-mono text-4xl text-foreground">{signal.value}</p>
                <p className="mt-4 text-sm text-muted-foreground">{signal.detail}</p>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Inside the Growler Filter Engine"
            title="Five layers coordinate signal intake, semantic reasoning, behavioral modeling, historical comparison, and final decisions"
            description="Growler Filter moves from static blocking to intelligent evaluation by combining reputational, relational, semantic, and human-validated evidence."
          />
          <div className="grid gap-3 lg:grid-cols-5">
            {engineLayers.map((layer, index) => (
              <GrowlerPanel key={layer.title} className="flex min-h-64 flex-col justify-between gap-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="console-kicker">{layer.name}</span>
                  {index === 0 ? (
                    <Globe className="text-primary" />
                  ) : index === 1 ? (
                    <Bot className="text-primary" />
                  ) : index === 2 ? (
                    <Waypoints className="text-primary" />
                  ) : index === 3 ? (
                    <Binary className="text-primary" />
                  ) : (
                    <Crosshair className="text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{layer.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{layer.detail}</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="status-dot" />
                  <span>{index === engineLayers.length - 1 ? "Actionable output ready" : "Streaming to next layer"}</span>
                </div>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Deep Analysis Simulation"
            title="See text, imagery, links, and historical context converge into one confidence-driven legality decision"
            description="The engine performs deep page-by-page and site-wide analytics to determine whether a target is likely facilitating illegal activity."
          />
          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <GrowlerPanel>
              <div className="flex items-center justify-between gap-3">
                <p className="console-label">Live Object Review</p>
                <GrowlerStatusChip label="Confidence: 92%" tone="signal" />
              </div>
              <div className="mt-5 grid gap-4">
                <div className="rounded-md border border-border bg-surface/60 p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FileSearch className="size-4 text-primary" />
                    <span className="font-mono text-primary">Text Fragment</span>
                  </div>
                  <p className="mt-3 font-mono text-sm leading-6 text-muted-foreground">
                    “private vault / no trace / fast invite / new model set / access after crypto confirmation”
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <GrowlerStatusChip label="Intent Detected" tone="danger" />
                    <GrowlerStatusChip label="Context Classified" tone="signal" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <FileImage className="size-4 text-warning" />
                      <span className="font-mono text-warning">Image Flagged</span>
                    </div>
                    <div className="forensic-grid mt-4 aspect-[4/3] rounded-md border border-border bg-card/40 p-3">
                      <div className="flex h-full items-center justify-center rounded-md border border-danger/30 bg-danger/10">
                        <Eye className="text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Waypoints className="size-4 text-primary" />
                      <span className="font-mono text-primary">Link Mapping</span>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <div className="rounded-md border border-border p-3">Hub → mirror-17 → vault-store</div>
                      <div className="rounded-md border border-border p-3">Alias overlap detected in 3 nodes</div>
                      <div className="rounded-md border border-border p-3">Distribution graph expands at 14.2x baseline</div>
                    </div>
                  </div>
                </div>
              </div>
            </GrowlerPanel>

            <GrowlerPanel>
              <p className="console-label">Decision Trace</p>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                <TraceNode icon={<ScanLine className="text-primary" />} title="Parse" detail="Entity + keyword extraction" />
                <Layers3 className="mx-auto hidden text-primary lg:block" />
                <TraceNode icon={<BrainCircuit className="text-warning" />} title="Context" detail="Semantic + historical matching" />
                <Layers3 className="mx-auto hidden text-primary lg:block" />
                <TraceNode icon={<ShieldAlert className="text-danger" />} title="Action" detail="Deterministic verdict + evidence retention" />
              </div>
              <div className="hud-divider my-6" />
              <div className="grid gap-4 md:grid-cols-3">
                <GrowlerMetric label="Intent Score" value="0.87" detail="Suspicious solicitation cues elevated" />
                <GrowlerMetric label="Context Match" value="0.93" detail="Aligned with archived illegal ecosystems" />
                <GrowlerMetric label="Suppression Path" value="AUTO" detail="Immediate escalation to intervention layer" />
              </div>
            </GrowlerPanel>
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Operational Capabilities"
            title="Built for universal media coverage, parallel throughput, deterministic decisions, and continuous learning"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {capabilities.map((capability, index) => (
              <GrowlerPanel key={capability.title} className="min-h-56 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="console-kicker">0{index + 1}</span>
                    <Activity className="text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-balance">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.detail}</p>
                  </div>
                </div>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Efficient & Effective Crawling"
            title="The discovery layer identifies suspect sources early, preserves them completely, and scales extraction without waste"
            description="This is the shift from reactive blocklists to proactive intelligence gathering and evidence-grade capture."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {crawlingMatrix.map((item) => (
              <GrowlerPanel key={item.label} className="min-h-56">
                <p className="console-label">{item.label}</p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </GrowlerPanel>
            ))}
          </div>
        </section>

        <section className="console-section space-y-6">
          <GrowlerSectionHeading
            eyebrow="Forensic Extraction Mode"
            title="A digital crime lab interface for capture, metadata validation, and evidence preservation"
          />
          <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <GrowlerPanel>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="console-label">Capture Interface</p>
                  <p className="mt-2 text-lg font-medium">Visual evidence session locked</p>
                </div>
                <Camera className="text-primary" />
              </div>
              <div className="forensic-grid mt-5 aspect-[16/9] rounded-lg border border-border bg-card/50 p-4">
                <div className="flex h-full flex-col justify-between rounded-md border border-primary/20 bg-panel/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <GrowlerStatusChip label="Screenshot Capture" tone="signal" />
                    <span className="console-label">Frame 0042</span>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Source</p>
                      <p className="mt-2 font-mono text-sm">hidden-service.onion</p>
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Hash</p>
                      <p className="mt-2 font-mono text-sm">91AF:77D2</p>
                    </div>
                    <div className="rounded-md border border-border bg-surface/60 p-3">
                      <p className="console-label">Operator</p>
                      <p className="mt-2 font-mono text-sm">Node R-17</p>
                    </div>
                  </div>
                </div>
              </div>
            </GrowlerPanel>

            <div className="grid gap-4">
              <GrowlerPanel>
                <div className="flex items-center gap-3">
                  <Clock3 className="text-warning" />
                  <p className="text-lg font-medium">Metadata Logs</p>
                </div>
                <div className="mt-5 space-y-3 font-mono text-xs text-muted-foreground">
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:22 // EXIF stripped, origin inferred via transport chain</div>
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:25 // Visual fingerprint aligned with archived evidence pack</div>
                  <div className="rounded-md border border-border bg-surface/60 p-3">03:15:30 // Raw HTML, multimedia assets, and related links preserved</div>
                </div>
              </GrowlerPanel>
              <GrowlerPanel>
                <div className="flex items-center gap-3">
                  <FileSearch className="text-primary" />
                  <p className="text-lg font-medium">Evidence Storage Blocks</p>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Case ID", "GR-2084"],
                    ["Retention", "Immutable"],
                    ["Jurisdiction", "Multi-region"],
                  ].map(([label, value]) => (
                    <div className="rounded-md border border-border bg-surface/60 p-3" key={label}>
                      <p className="console-label">{label}</p>
                      <p className="mt-2 font-mono text-sm text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </GrowlerPanel>
            </div>
          </div>
        </section>

        <section className="console-section pb-12">
          <GrowlerPanel className="surface-glow">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="console-kicker">Final Interface Access</p>
                <h2 className="console-title max-w-3xl text-balance">Request System Access</h2>
                <p className="console-copy text-sm sm:text-base">
                  Authorized teams gain access to live filtering intelligence, forensic extraction workflows, adaptive suppression controls, and persistent historical analytics.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@growlerfilter.com&su=Request%20for%20Demo"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="signal"
                    className="flex items-center justify-center gap-2 font-mono uppercase"
                  >
                    Contact Team
                    <ChevronRight className="w-4 h-4 text-black" />
                  </Button>
                </a>

                                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@growlerfilter.com&su=Joining%20The%20Team"
                  target="_blank"
                >
                  <Button
                    className="font-mono uppercase"
                    size="lg"
                    variant="console"
                  >
                    Apply Job
                  </Button>
                </a>
              </div>
            </div>
          </GrowlerPanel>
        </section>

        <footer className="border-t border-border py-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img src={growlerFilterLogo} alt="Growler Filter" className="h-10 w-auto object-contain" />
              <p className="font-mono text-sm text-foreground">Growler Filter System</p>
            </div>
              <div className="text-center">
                Filtering • Analyzing • Protecting
              </div>
            <div>The Octagon, Singapore · 069534</div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function TraceNode({
  icon,
  title,
  detail,
}: {
  icon: ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface/60 p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="font-mono text-sm text-primary">{title}</p>
          <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
      </div>
    </div>
  );
}
