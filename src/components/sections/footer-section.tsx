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
            <p className="text-sm font-semibold text-text mb-1">
              {t("copyright")}
            </p>
            <p className="text-text-secondary text-sm">
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {(["services", "expertise", "approach", "contact"] as const).map((key) => (
              <Link
                key={key}
                href={key === "approach" ? "/approche" : `/${key}`}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/pleclech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {t("nav.linkedin")}
            </a>
          </div>

          {/* Info */}
          <div className="text-xs text-text-muted space-y-1">
            <p>&copy; {new Date().getFullYear()} pulsardata.ai</p>
            <p>Paris, France</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
