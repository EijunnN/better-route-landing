"use client";

import { useState, useEffect, useCallback } from "react";
import { Github, Menu, X, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";
import LanguageSwitcher from "@/components/ui/language-switcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: t("features"), href: "#features" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("docs"), href: "#docs" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
          <div
            className={`container-landing transition-[background-color,border-color,box-shadow,border-radius] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled
                ? "bg-surface/80 backdrop-blur-2xl border-b border-border-light/40 shadow-lg shadow-black/5"
                : "bg-transparent border-b border-transparent shadow-none"
            }`}
          >
            <nav className={`flex items-center justify-between transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "h-12" : "h-16"}`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <div className="relative">
                <div
                  className="size-7 flex items-center justify-center bg-primary rounded-[3px] transition-transform duration-300 group-hover:scale-105"
                >
                  <span
                    className="text-[11px] font-bold text-primary-foreground leading-none tracking-tight"
                    style={displayFont}
                  >
                    BR
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-bold tracking-wide text-foreground"
                  style={displayFont}
                >
                  BETTER<span className="text-primary">ROUTE</span>
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground/60 border border-border rounded-[2px] leading-none tracking-wider">
                  v1.0
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-surface/60 border border-border/50 rounded-md px-1 py-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1 text-[0.8125rem] rounded-[3px] transition-all duration-200 ${
                      activeSection === link.href
                        ? "text-foreground bg-surface-hover"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher />

              <a
                href="https://github.com/EijunnN/better-route"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>

              <div className="w-px h-4 bg-border" />

              <a
                href="#get-started"
                className="group/cta flex items-center gap-1.5 px-3.5 py-1.5 text-[0.8125rem] font-semibold bg-primary text-primary-foreground rounded-[3px] transition-all duration-200 hover:bg-primary-dark"
                style={displayFont}
              >
                {t("getStarted")}
                <ArrowRight className="size-3 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden size-9 flex items-center justify-center text-foreground rounded-[3px] hover:bg-surface-hover transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-[18px]" />
              ) : (
                <Menu className="size-[18px]" />
              )}
            </button>
          </nav>
          </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
            onClick={closeMobile}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 w-full max-w-[320px] h-full bg-surface border-l border-border animate-fade-in flex flex-col">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-border">
              <span
                className="text-sm font-bold tracking-wide text-foreground"
                style={displayFont}
              >
                BETTER<span className="text-primary">ROUTE</span>
              </span>
              <button
                type="button"
                className="size-9 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-[3px] hover:bg-surface-hover transition-colors"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <X className="size-[18px]" />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="mb-2 px-2">
                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                  {t("navigation")}
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-3 py-2.5 text-[0.9375rem] rounded-[3px] transition-all duration-200 ${
                    activeSection === link.href
                      ? "text-foreground bg-surface-hover"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              ))}

              <div className="h-px bg-border my-4 mx-2" />

              <div className="mb-2 px-2">
                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                  {t("links")}
                </span>
              </div>
              <a
                href="https://github.com/EijunnN/better-route"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2.5 text-[0.9375rem] text-muted-foreground hover:text-foreground hover:bg-surface-hover rounded-[3px] transition-all"
                onClick={closeMobile}
              >
                <Github className="size-4" />
                {t("github")}
              </a>

              <div className="h-px bg-border my-4 mx-2" />

              <div className="px-2">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile bottom CTA */}
            <div className="p-4 border-t border-border">
              <a
                href="#get-started"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-[3px] transition-all hover:bg-primary-dark"
                style={displayFont}
                onClick={closeMobile}
              >
                {t("getStarted")}
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
