import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock,
  Folder,
  Music,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/button";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const featureCards: FeatureCard[] = [
  {
    icon: Clock,
    title: "Session Tracking",
    description:
      "Automatically log work time, total time, and inactive time across all your Logic Pro projects.",
  },
  {
    icon: BarChart3,
    title: "Plugin Analytics",
    description:
      "See which plugins you reach for most, organized by category and weighted by session time.",
  },
  {
    icon: Folder,
    title: "Project Library",
    description:
      "Browse every project with BPM, key, time signature, track count, and modification dates at a glance.",
  },
  {
    icon: Music,
    title: "Bounce Management",
    description:
      "Preview, tag, and organize bounce files across all your projects in one place.",
  },
  {
    icon: Sparkles,
    title: "Activity Insights",
    description:
      "Heatmaps, progress charts, and time breakdowns that show when and how you produce.",
  },
  {
    icon: Shield,
    title: "Completely Private",
    description:
      "Everything stays on your Mac. No cloud, no telemetry, no account required.",
  },
];

const overviewImagePath = "/images/overview-dashboard.png";

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              For Logic Pro on macOS
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Know how you spend
              <br />
              your studio time
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Logic Pro Tracker monitors your sessions, snapshots project
              metadata, tracks plugin usage, and organizes your bounces — all
              locally on your Mac.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/download">
                <Button
                  size="lg"
                  className="h-12 rounded-lg bg-primary px-8 text-base font-medium shadow-md shadow-primary/20 transition-shadow hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  Download for macOS
                </Button>
              </Link>
              <Link to="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-8 text-base font-medium"
                >
                  See Features
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl shadow-black/[0.04]">
              <img
                src={overviewImagePath}
                alt="Logic Pro Tracker — Overview Dashboard"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-y border-border/40 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">
              Everything you need to understand your workflow
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Session tracking, plugin analytics, project metadata, and bounce
              management — all running quietly in the background.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border/50 bg-card p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Start tracking your sessions
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Download Logic Pro Tracker and see where your production time
              actually goes. Free, private, and runs entirely on your Mac.
            </p>
            <Link to="/download">
              <Button
                size="lg"
                className="h-12 rounded-lg bg-primary px-8 text-base font-medium shadow-md shadow-primary/20 hover:bg-primary/90"
              >
                Download for macOS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
