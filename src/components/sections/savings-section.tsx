import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";
import GridCrosses from "@/components/ui/grid-crosses";

export default function SavingsSection() {
  const t = useTranslations("Savings");

  const cards = [
    { value: t("card1Value"), label: t("card1Label"), desc: t("card1Desc") },
    { value: t("card2Value"), label: t("card2Label"), desc: t("card2Desc") },
    { value: t("card3Value"), label: t("card3Label"), desc: t("card3Desc") },
  ];

  return (
    <section id="savings" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="container-landing relative">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-5 animate-fade-in-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            style={displayFont}
          >
            {t("title")}
            <br />
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="section-subtitle text-center mx-auto max-w-md">
            {t("subtitle")}
          </p>
        </div>

        {/* Ownership triptych */}
        <div className="relative border border-border rounded-[3px] bg-surface/30 overflow-visible animate-fade-in-up delay-200">
          <GridCrosses corners cols={3} rows={1} opacity={0.3} breakpoint="md" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={card.label}
                className={`group p-8 md:p-10 transition-colors duration-200 hover:bg-surface-hover/50 ${
                  i < cards.length - 1
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                }`}
              >
                {/* Value + label */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-3xl md:text-4xl font-bold text-primary leading-none"
                    style={displayFont}
                  >
                    {card.value}
                  </span>
                </div>
                <span
                  className="text-xs font-bold tracking-widest text-foreground/70 uppercase"
                  style={displayFont}
                >
                  {card.label}
                </span>

                {/* Description */}
                <p className="mt-4 text-[0.8125rem] text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Savings callout */}
        <div className="mt-16 text-center animate-fade-in-up delay-400">
          <span className="text-[0.625rem] font-mono text-muted-foreground/50 uppercase tracking-[0.15em]">
            {t("savingsLabel")}
          </span>

          <p
            className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-none"
            style={displayFont}
          >
            {t("savingsValue")}
          </p>

          <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto">
            {t("savingsCaption")}
          </p>

          <div className="mt-8">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-[3px] transition-all duration-200 hover:bg-primary-dark"
              style={displayFont}
            >
              {t("cta")}
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
