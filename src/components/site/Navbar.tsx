import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { usePrefs } from "@/lib/prefs";
import { navItems, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function Toggles({ onDone }: { onDone?: () => void }) {
  const { theme, toggleTheme, lang, setLang } = usePrefs();
  return (
    <div className="flex items-center gap-3">
      <div className="glass flex items-center rounded-full p-1">
        {(["en", "bn"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => {
              setLang(l);
              onDone?.();
            }}
            className={cn(
              "min-h-9 rounded-full px-3 text-xs font-semibold transition-colors",
              l === "bn" && "font-bangla",
              lang === l
                ? "bg-gradient-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l === "en" ? "EN" : "বাংলা"}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle colour theme"
        className="glass flex size-10 items-center justify-center rounded-full transition-colors hover:text-primary"
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-2 shadow-elegant" : "py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
            {site.initials}
          </span>
          <span className="font-signature text-2xl leading-none">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group relative inline-flex min-h-11 items-center px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Toggles />
        </div>

        <button
          type="button"
          className="glass flex size-11 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-flex min-h-11 items-center text-3xl font-bold tracking-tight data-[status=active]:text-gradient"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Toggles onDone={() => setOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
