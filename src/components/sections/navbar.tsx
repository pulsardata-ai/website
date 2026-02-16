"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-crt-bg/90 backdrop-blur-sm border-b border-crt-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={prefix + "/"} className="flex items-center gap-3">
          <Logo size={32} />
          <span className="font-heading text-sm text-crt-green text-glow hidden sm:inline">
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
                "font-terminal text-sm uppercase tracking-wide transition-colors duration-200",
                isActive(item.href)
                  ? "text-crt-green text-glow"
                  : "text-crt-text-secondary hover:text-crt-green"
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
          className="md:hidden text-crt-green p-2"
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
        <div className="md:hidden border-t border-crt-border bg-crt-bg/95 backdrop-blur-sm">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={prefix + item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-terminal text-base uppercase tracking-wide py-2",
                  isActive(item.href)
                    ? "text-crt-green text-glow"
                    : "text-crt-text-secondary"
                )}
              >
                {"> "}{t(item.key)}
              </Link>
            ))}
            <div className="pt-2 border-t border-crt-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
