import { Link, useLocation } from "react-router";
import iconSvg from "../../imports/icon.svg";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-card/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={iconSvg} alt="Logic Pro Tracker" className="h-7 w-7" />
            <span className="font-semibold">Logic Pro Tracker</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/features" className={linkClass("/features")}>
              Features
            </Link>
            <Link to="/download" className={linkClass("/download")}>
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
