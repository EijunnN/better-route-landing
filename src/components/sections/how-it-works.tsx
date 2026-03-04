import { Terminal, Upload, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import { displayFont } from "@/components/ui/fonts";
import GridCrosses from "@/components/ui/grid-crosses";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      number: t("step1Number"),
      icon: Terminal,
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      number: t("step2Number"),
      icon: Upload,
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      number: t("step3Number"),
      icon: Zap,
      title: t("step3Title"),
      description: t("step3Desc"),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-landing relative">
        {/* Header */}
        <div className="text-center mx-auto mb-16 max-w-2xl animate-fade-in-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            style={displayFont}
          >
            {t("title")}
            <br />
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-5">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative border border-border rounded-[3px] bg-surface/30 overflow-visible animate-fade-in-up delay-200">
          <GridCrosses corners cols={3} rows={1} opacity={0.3} breakpoint="md" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`group relative p-8 md:p-10 transition-colors duration-200 hover:bg-surface-hover/50 ${
                  i < steps.length - 1
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                }`}
              >
                {/* Step number — large watermark */}
                <span
                  className="absolute top-6 right-8 md:top-8 md:right-10 text-6xl md:text-7xl font-bold text-border/60 leading-none select-none pointer-events-none"
                  style={displayFont}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative mb-6 inline-flex items-center justify-center size-10 rounded-[3px] border border-primary/25 bg-primary/8 text-primary transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/15">
                  <step.icon className="size-[18px]" />
                </div>

                {/* Content */}
                <h3
                  className="relative text-sm font-semibold text-foreground mb-3 uppercase tracking-wide"
                  style={displayFont}
                >
                  {step.title}
                </h3>
                <p className="relative text-[0.8125rem] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Flutter",
  "OSRM",
];

export function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="container-landing relative">
        {/* Header */}
        <div className="text-center mx-auto mb-12 max-w-2xl animate-fade-in-up">
          <h2 className="section-title mb-4" style={displayFont}>
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </h2>
          <p className="section-subtitle mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200" style={{ opacity: 0 }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass px-5 py-2.5 text-sm font-medium text-muted-foreground font-mono uppercase tracking-wider transition-all duration-300 hover:text-primary hover:border-primary/40 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
