"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "expertise", href: "/expertise" },
  { key: "approach", href: "/approche" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const prefix = locale === "fr" ? "" : `/${locale}`;

  const isActive = (href: string) => {
    const full = prefix + href;
    if (href === "/") return pathname === full || pathname === prefix || pathname === "/";
    return pathname.startsWith(full);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/80 border-b border-border backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={prefix + "/"} className="flex items-center gap-3">
          <Image src="/logo-pulsardata-spirale.jpeg" alt="pulsardata.ai" width={44} height={44} sizes="44px" className="rounded-full" />
          <span className="text-sm font-semibold text-text hidden sm:inline">
            pulsardata.ai
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={prefix + item.href}
              className={cn(
                "text-sm transition-colors duration-200",
                isActive(item.href)
                  ? "text-accent"
                  : "text-text-secondary hover:text-text"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary p-2"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={prefix + item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base py-2",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-text-secondary"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
