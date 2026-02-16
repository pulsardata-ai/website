import { useTranslations } from "next-intl";
import Link from "next/link";

export function FooterSection() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-green-medium font-mono mb-1">
              {t("copyright")}
            </p>
            <p className="text-text-muted text-xs font-mono">
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {(["services", "expertise", "approach", "contact"] as const).map((key) => (
              <Link
                key={key}
                href={key === "approach" ? "/approche" : `/${key}`}
                className="text-xs font-mono text-text-muted hover:text-green-medium transition-colors uppercase tracking-wider"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/pleclech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted hover:text-green-medium transition-colors uppercase tracking-wider"
            >
              {t("nav.linkedin")}
            </a>
          </div>

          {/* Info */}
          <div className="text-xs text-text-muted font-mono space-y-1">
            <p>&copy; {new Date().getFullYear()} pulsardata.ai</p>
            <p>Paris, France</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
