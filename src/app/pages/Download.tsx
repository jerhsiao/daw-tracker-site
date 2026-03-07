import { useState } from "react";
import {
  Download as DownloadIcon,
  Shield,
  Lock,
  Database,
  Terminal,
  AlertTriangle,
  X,
} from "lucide-react";
import iconSvg from "../../imports/icon.svg";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const DEFAULT_DMG_URL =
  "https://github.com/jerhsiao/daw-tracker-site/releases/latest/download/Logic_Pro_Tracker.dmg";

export function Download() {
  const [showTipModal, setShowTipModal] = useState(false);
  const dmgUrl =
    (import.meta.env.VITE_DMG_URL as string | undefined)?.trim() ||
    DEFAULT_DMG_URL;

  const handleDownload = () => {
    setShowTipModal(true);
  };

  const handleSkipToDownload = () => {
    setShowTipModal(false);
    window.location.href = dmgUrl;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Download Logic Pro Tracker
          </h1>
          <p className="text-xl text-muted-foreground">
            Free, local-first, and built for music producers. Available for
            macOS.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
              <img
                src={iconSvg}
                alt="Logic Pro Tracker"
                className="h-20 w-20"
              />
            </div>
            <CardTitle className="text-2xl">macOS App</CardTitle>
            <CardDescription>
              Compatible with macOS 11.0 (Big Sur) and later
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={handleDownload}
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download for macOS
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>Built with Rust & React</p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">No Telemetry</h3>
              <p className="text-sm text-muted-foreground">
                Zero data collection. Nothing is tracked or sent anywhere.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Database className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Local First</h3>
              <p className="text-sm text-muted-foreground">
                All data stays on your machine in a local SQLite database.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Lock className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">No Account Required</h3>
              <p className="text-sm text-muted-foreground">
                No sign-up, no login. Download, install, and start tracking.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-amber-500/30 bg-amber-500/5">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
              <div>
                <h4 className="mb-1 font-semibold">Important: macOS Security Step Required</h4>
                <p className="mb-3 text-sm text-muted-foreground">
                  Because this app is not signed with an Apple Developer certificate (it costs $99/year),
                  macOS will show a "damaged and can't be opened" error. The app is completely safe — it's
                  open source and runs entirely on your machine. You just need to run one Terminal command
                  after installing.
                </p>
                <div className="rounded-lg bg-background/80 p-3">
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5" />
                    Paste this into Terminal after dragging the app to Applications:
                  </div>
                  <code className="text-sm font-medium text-foreground">
                    xattr -cr /Applications/Logic\ Pro\ Tracker.app
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Download the App</h4>
                  <p className="text-sm text-muted-foreground">
                    Click the download button above to get the latest .dmg file.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Open & Drag to Applications</h4>
                  <p className="text-sm text-muted-foreground">
                    Open the .dmg file and drag Logic Pro Tracker into your Applications folder.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Clear Gatekeeper Flag</h4>
                  <p className="text-sm text-muted-foreground">
                    Open Terminal and run:{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                      xattr -cr /Applications/Logic\ Pro\ Tracker.app
                    </code>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Launch & Grant Permissions</h4>
                  <p className="text-sm text-muted-foreground">
                    Open from Applications or Launchpad. Grant Automation permission in
                    System Settings when prompted for reliable project detection.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {showTipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-card p-6 shadow-xl">
            <button
              onClick={() => setShowTipModal(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 text-center">
              <h2 className="text-xl font-semibold">Support Development</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Logic Pro Tracker is free. If you find it useful, consider
                leaving a tip.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/50">
              <iframe
                src="https://ko-fi.com/jeremyhsiao/?hidefeed=true&widget=true&embed=true&preview=true"
                className="w-full border-none"
                height="560"
                title="Support on Ko-fi"
              />
            </div>

            <button
              onClick={handleSkipToDownload}
              className="mt-4 w-full text-center text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              No thanks, just download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
