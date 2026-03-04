"use client";

import { ArrowRight, Github, Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import GridCrosses from "@/components/ui/grid-crosses";
import { displayFont } from "@/components/ui/fonts";

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const command = "docker compose up -d";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center bg-surface border border-border rounded-[3px] overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-2.5">
        <Terminal className="size-3.5 text-primary shrink-0" />
        <code className="text-[0.8125rem] text-muted-foreground font-mono">
          <span className="text-primary/60">$</span>{" "}
          <span className="text-foreground">{command}</span>
        </code>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center justify-center size-10 border-l border-border text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors shrink-0"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="size-3.5 text-primary" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("Hero");

  const metrics = [
    { value: "99%", label: t("costReduction") },
    { value: "<10min", label: t("deployTime") },
    { value: "$0", label: t("perDriver") },
    { value: "MIT", label: t("license") },
  ];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Single soft glow */}
      <div
        className="glow-orb w-[600px] h-[600px] -top-64 left-1/2 -translate-x-1/2 opacity-25"
        style={{ background: "var(--primary-glow-strong)" }}
      />

      <div className="container-landing relative z-10 pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Centered layout */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.625rem] font-mono tracking-widest uppercase text-primary/80 border border-primary/15 rounded-sm bg-primary/[0.04]">
              <span>🎉</span>
              {t("badge")}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight animate-fade-in-up delay-100"
            style={displayFont}
          >
            {t("headlineTop")}
            <br />
            {t("headlineFor")} <span className="text-primary">{t("headlineBottom")}</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up delay-200">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 animate-fade-in-up delay-300">
            <a
              href="#get-started"
              className="group flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-[3px] transition-all duration-200 hover:bg-primary-dark"
              style={displayFont}
            >
              {t("getStartedFree")}
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/EijunnN/better-route"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-muted-foreground border border-border hover:border-border-light hover:text-foreground rounded-[3px] transition-all duration-200"
            >
              <Github className="size-4" />
              {t("viewOnGithub")}
            </a>
          </div>

          {/* Terminal command */}
          <div className="mt-8 animate-fade-in-up delay-400">
            <CopyButton />
          </div>
        </div>

        {/* Metrics strip — with structural crosses */}
        <div className="mt-20 animate-fade-in-up delay-500">
          <div className="relative grid grid-cols-2 md:grid-cols-4 border border-border rounded-[3px] bg-surface/50 overflow-visible">
            <GridCrosses corners />
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`flex flex-col items-center gap-1.5 py-6 px-4 ${
                  i < metrics.length - 1 ? "border-r border-border" : ""
                } ${i < 2 ? "border-b md:border-b-0 border-border" : ""}`}
              >
                <span
                  className="text-2xl sm:text-3xl font-bold text-primary"
                  style={displayFont}
                >
                  {metric.value}
                </span>
                <span className="text-[0.6875rem] font-mono text-muted-foreground tracking-widest">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
