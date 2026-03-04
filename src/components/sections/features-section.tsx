import {
  Route,
  PackageSearch,
  Truck,
  Activity,
  Smartphone,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import GridCrosses from "@/components/ui/grid-crosses";
import { displayFont } from "@/components/ui/fonts";

interface Feature {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const featureDefs: Feature[] = [
  { icon: Route, titleKey: "routeOptTitle", descKey: "routeOptDesc" },
  { icon: PackageSearch, titleKey: "orderMgmtTitle", descKey: "orderMgmtDesc" },
  { icon: Truck, titleKey: "fleetMgmtTitle", descKey: "fleetMgmtDesc" },
  { icon: Activity, titleKey: "realtimeTitle", descKey: "realtimeDesc" },
  { icon: Smartphone, titleKey: "mobileTitle", descKey: "mobileDesc" },
  { icon: Shield, titleKey: "rbacTitle", descKey: "rbacDesc" },
];

export default function FeaturesSection() {
  const t = useTranslations("Features");

  return (
    <section id="features" className="section-padding relative">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mx-auto mb-16 max-w-2xl">
          <h2 className="section-title mb-4" style={displayFont}>
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Unified grid — cells divided by borders, crosses at intersections */}
        <div className="relative border border-border rounded-[3px] bg-surface/30 overflow-visible animate-fade-in-up">
          <GridCrosses corners cols={3} rows={2} opacity={0.35} breakpoint="md" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featureDefs.map((feature, index) => {
              // Border logic: right border except last in row, bottom border except last row
              const isLastCol =
                (index + 1) % 3 === 0; // lg
              const isLastRow = index >= 3; // last row (items 3,4,5)
              const isLastColMd = (index + 1) % 2 === 0; // md

              return (
                <div
                  key={feature.titleKey}
                  className={`group p-7 transition-colors duration-200 hover:bg-surface-hover/50 ${
                    !isLastCol ? "lg:border-r lg:border-border" : ""
                  } ${
                    !isLastColMd ? "max-lg:border-r max-lg:border-border" : ""
                  } ${
                    !isLastRow ? "border-b border-border" : ""
                  } ${
                    // On md (2 cols), last row is items 4,5 — but item 3 still needs bottom border
                    index < 4 ? "max-lg:border-b max-lg:border-border" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 flex items-center justify-center size-10 rounded-[3px] border border-primary/25 bg-primary/8 text-primary transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/15">
                      <feature.icon className="size-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-sm font-semibold text-foreground mb-1.5 uppercase tracking-wide"
                        style={displayFont}
                      >
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
