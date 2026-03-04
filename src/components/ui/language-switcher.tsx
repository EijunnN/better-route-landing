"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { displayFont } from "@/components/ui/fonts";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div
      className="flex items-center bg-surface/60 border border-border/50 rounded-[3px] overflow-hidden text-[0.75rem] font-semibold tracking-wider"
      style={displayFont}
    >
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 transition-colors duration-200 ${
          locale === "en"
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <div className="w-px h-4 bg-border/50" />
      <button
        type="button"
        onClick={() => switchLocale("es")}
        className={`px-2 py-1 transition-colors duration-200 ${
          locale === "es"
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
