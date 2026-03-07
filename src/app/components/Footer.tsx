import iconSvg from "../../imports/icon.svg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={iconSvg} alt="Logic Pro Tracker" className="h-6 w-6" />
            <span className="font-semibold">Logic Pro Tracker</span>
          </div>

          <p className="text-sm text-muted-foreground">
            Local-first session tracking for Logic Pro. No telemetry. No cloud.
          </p>
        </div>
      </div>
    </footer>
  );
}
