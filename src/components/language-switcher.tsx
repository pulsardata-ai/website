"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix if present
    let path = pathname;
    for (const loc of routing.locales) {
      if (path.startsWith(`/${loc}/`)) {
        path = path.slice(loc.length + 1);
        break;
      } else if (path === `/${loc}`) {
        path = "/";
        break;
      }
    }

    const newPath = newLocale === routing.defaultLocale ? path : `/${newLocale}${path}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 font-terminal text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={cn(
            "px-2 py-1 uppercase transition-colors duration-200 rounded-sm",
            locale === loc
              ? "text-crt-bg bg-crt-green"
              : "text-crt-text-secondary hover:text-crt-green"
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
