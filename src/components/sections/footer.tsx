import { Github } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";

export default function Footer() {
  const t = useTranslations("Footer");

  const productLinks = [
    { label: t("features"), href: "#features" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("techStack"), href: "#tech-stack" },
  ];

  const resourceLinks = [
    { label: t("documentation"), href: "#" },
    {
      label: t("githubRepo"),
      href: "https://github.com/EijunnN/better-route",
      external: true,
    },
    { label: t("apiReference"), href: "#" },
    { label: t("community"), href: "#" },
  ];

  const legalLinks = [
    { label: t("mitLicense"), href: "#" },
    { label: t("privacyPolicy"), href: "#" },
    { label: t("termsOfService"), href: "#" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-landing section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 mb-4"
            >
              {/* Logo mark */}
              <div className="relative size-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-sm bg-primary/15" />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="relative z-10"
                >
                  <path
                    d="M3 14L7.5 5L11 10L15 3"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="3" cy="14" r="1.5" fill="var(--primary)" />
                  <circle cx="15" cy="3" r="1.5" fill="var(--primary)" />
                </svg>
              </div>
              <span
                className="text-base font-semibold tracking-tight text-foreground"
                style={displayFont}
              >
                BETTER<span className="text-primary font-bold">ROUTE</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              {t("description")}
            </p>
            <a
              href="https://github.com/EijunnN/better-route"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t("starOnGithub")}</span>
            </a>
          </div>

          {/* Product column */}
          <div>
            <h3
              className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
              style={displayFont}
            >
              {t("product")}
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3
              className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
              style={displayFont}
            >
              {t("resources")}
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3
              className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
              style={displayFont}
            >
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            {t("copyright")}
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            {t("builtBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
