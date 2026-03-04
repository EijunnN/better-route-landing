import { ArrowRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";

export default function CtaSection() {
  const t = useTranslations("CTA");

  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Solid dark background with border accent */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-primary/30" />

      <div className="container-landing section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={displayFont}
          >
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>?
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            {t("subtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a
              href="#get-started"
              className="btn-primary text-base px-8 py-3.5"
            >
              {t("getStartedFree")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/EijunnN/better-route"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-3.5"
            >
              <Github className="w-4 h-4" />
              {t("starOnGithub")}
            </a>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-sm text-muted-foreground font-mono animate-fade-in-up delay-300">
            {t("trustText")}
          </p>
        </div>
      </div>
    </section>
  );
}
