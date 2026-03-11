import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

type FeatureHighlight = {
  title: string;
  description: string;
};

type FeatureTab = {
  value: string;
  label: string;
  title: string;
  description: string;
  imagePath: string;
  highlights: FeatureHighlight[];
};

const featureTabs: FeatureTab[] = [
  {
    value: "overview",
    label: "Overview",
    title: "Overview Dashboard",
    description:
      "Get a complete view of your production activity with time tracking, progress charts, activity heatmaps, and top plugins weighted by session time.",
    imagePath: "/images/overview-dashboard.png",
    highlights: [
      {
        title: "Time Tracking",
        description:
          "Track total, work, and inactive time so you can see exactly where your sessions go.",
      },
      {
        title: "Progress Charts",
        description:
          "Visualize project growth over time with charts for tracks, audio files, and bounces.",
      },
      {
        title: "Activity Heatmap",
        description:
          "Spot productivity patterns across the week and identify your strongest hours.",
      },
      {
        title: "Billing Export",
        description:
          "Export session timesheets to CSV with duration, active time, project stage, and notes for easy invoicing.",
      },
    ],
  },
  {
    value: "plugins",
    label: "Plugins",
    title: "Plugin Analytics",
    description:
      "Discover which plugins you use most across your projects. Analyze usage by folder, stage, and date range.",
    imagePath: "/images/plugins-analytics.png",
    highlights: [
      {
        title: "Auto-Categorization",
        description:
          "Plugins are grouped by type (Instrument, Audio FX, MIDI FX) and can be re-assigned when auto-detection is wrong.",
      },
      {
        title: "Usage Charts",
        description:
          "See top plugins by session-weighted usage, broken down by folder or project stage.",
      },
    ],
  },
  {
    value: "library",
    label: "Library",
    title: "Project Library",
    description:
      "Browse all your Logic projects with rich metadata including BPM, key, time signature, track count, and file size.",
    imagePath: "/images/project-library.png",
    highlights: [
      {
        title: "Rich Metadata",
        description:
          "Review BPM, key, time signature, and track count for every project at a glance.",
      },
      {
        title: "Advanced Filtering",
        description:
          "Filter by stage, key, time signature, BPM range, and search text to find projects fast.",
      },
      {
        title: "Distribution Charts",
        description:
          "Understand your catalog with charts showing BPM, key, and time signature distributions.",
      },
    ],
  },
  {
    value: "deliverables",
    label: "Deliverables",
    title: "Bounce Deliverables",
    description:
      "Manage bounce files in one place with inline playback, custom tags, and project-linked metadata.",
    imagePath: "/images/bounce-deliverables.png",
    highlights: [
      {
        title: "Audio Playback",
        description:
          "Preview bounce files directly in the app with quick play and stop controls.",
      },
      {
        title: "Custom Tags",
        description:
          "Tag bounces to organize versions, stems, and finals — then filter by tag to find what you need.",
      },
    ],
  },
  {
    value: "projects",
    label: "Projects",
    title: "Project Detail",
    description:
      "Inspect any project in depth with session history, progress snapshots, plugin list, bounces, and notes.",
    imagePath: "/images/project-detail.png",
    highlights: [
      {
        title: "Session History",
        description:
          "See timestamps and duration for every session to understand your time investment.",
      },
      {
        title: "Progress Tracking",
        description:
          "Review how track and audio file counts evolve over time for each project.",
      },
      {
        title: "Project Notes",
        description:
          "Capture version notes, client requests, and production ideas alongside your project data.",
      },
    ],
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Add Your Projects",
    description:
      "Launch Logic Pro Tracker and point it at your Logic projects folder. A quick scan imports all your project metadata.",
  },
  {
    step: "2",
    title: "Work as Usual",
    description:
      "Open Logic Pro and produce normally. Tracker detects your active project and logs sessions automatically in the background.",
  },
  {
    step: "3",
    title: "Review Your Data",
    description:
      "Browse analytics anytime — tracked time, plugin usage, project progress, and deliverables are all kept up to date.",
  },
];

function FeatureSection({ tab }: { tab: FeatureTab }) {
  return (
    <TabsContent value={tab.value} className="space-y-6">
      <div className="rounded-xl border border-border/50 bg-card p-8">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {tab.title}
        </h2>
        <p className="mb-6 text-muted-foreground">{tab.description}</p>
        <div className="overflow-hidden rounded-lg border border-border/40 shadow-lg shadow-black/[0.03]">
          <img
            src={tab.imagePath}
            alt={`${tab.title} screenshot`}
            className="w-full"
          />
        </div>
      </div>

      <div
        className={`grid gap-4 ${tab.highlights.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
      >
        {tab.highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-xl border border-border/50 bg-card p-5"
          >
            <h3 className="mb-1.5 font-semibold">{highlight.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </TabsContent>
  );
}

export function Features() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">Features</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Session tracking, plugin analytics, project metadata, and bounce
            management — built for Logic Pro producers who want to understand
            their workflow.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-5">
            {featureTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {featureTabs.map((tab) => (
            <FeatureSection key={tab.value} tab={tab} />
          ))}
        </Tabs>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border/50 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
