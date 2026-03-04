import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";
import GridCrosses from "@/components/ui/grid-crosses";

export default function ProblemSection() {
  const t = useTranslations("Problem");

  const features = [
    t("feat1"),
    t("feat2"),
    t("feat3"),
    t("feat4"),
    t("feat5"),
    t("feat6"),
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-landing relative">
        {/* ── Header ── */}
        <div className="text-center mb-6 flex flex-col items-center gap-5 animate-fade-in-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            style={displayFont}
          >
            {t("title")}
            <br />
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="section-subtitle text-center mx-auto max-w-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* ── Pricing card ── */}
        <div className="max-w-3xl mx-auto mt-14 animate-fade-in-up delay-200">
          <div className="relative border border-border rounded-[3px] bg-surface overflow-visible">
            <GridCrosses corners opacity={0.25} />

            {/* Subtle primary glow */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-[100px]"
              style={{ background: "var(--primary)" }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-5">

              {/* ── Left: Price hero (3 cols) ── */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-7xl md:text-8xl font-bold text-primary leading-none"
                      style={displayFont}
                    >
                      {t("price")}
                    </span>
                    <span className="text-xl text-muted-foreground font-mono">
                      {t("priceUnit")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground/70 font-mono">
                    {t("priceCaption")}
                  </p>
                  <p className="mt-4 text-base text-foreground font-medium">
                    {t("softwareFree")}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#get-started"
                    className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-[3px] transition-all duration-200 hover:bg-primary-dark"
                    style={displayFont}
                  >
                    {t("getStarted")}
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* ── Right: Features (2 cols) ── */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <ul className="space-y-4">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="mt-0.5 flex items-center justify-center size-5 rounded-sm bg-primary/10 border border-primary/20 shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-[0.8125rem] text-foreground/85 leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Bottom bar: industry context + savings ── */}
            <div className="border-t border-border px-8 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-hover/30">
              {/* Industry context — subtle, not aggressive */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground/60">
                <span className="font-mono text-xs uppercase tracking-wider">
                  {t("industryAvg")}
                </span>
                <span className="font-mono text-muted-foreground/40 line-through decoration-1">
                  {t("industryAvgValue")}{t("industryAvgUnit")}
                </span>
                <span className="text-xs font-mono text-muted-foreground/30">
                  {t("industryAvgCaption")}
                </span>
              </div>

              {/* Annual savings */}
              <p className="text-sm text-muted-foreground">
                {t("annualSavings")}{" "}
                <span
                  className="text-primary font-bold"
                  style={displayFont}
                >
                  {t("annualSavingsValue")}
                </span>{" "}
                {t("annualSavingsEnd")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
