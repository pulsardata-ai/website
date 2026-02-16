import { useTranslations } from "next-intl";
import Link from "next/link";

export function FooterSection() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-crt-border bg-crt-bg/95 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading text-crt-green text-sm text-glow mb-2">
              {t("copyright")}
            </p>
            <p className="font-terminal text-crt-text-secondary text-sm">
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {(["services", "expertise", "approach", "contact"] as const).map((key) => (
              <Link
                key={key}
                href={key === "approach" ? "/approche" : `/${key}`}
                className="font-terminal text-sm text-crt-text-secondary hover:text-crt-green transition-colors"
              >
                {">"} {t(`nav.${key}`)}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/pleclech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-terminal text-sm text-crt-text-secondary hover:text-crt-green transition-colors"
            >
              {">"} {t("nav.linkedin")}
            </a>
          </div>

          {/* Console */}
          <div className="font-terminal text-xs text-crt-green-dark">
            <p>$ echo $YEAR</p>
            <p className="text-crt-text-secondary">{year}</p>
            <p className="mt-2">$ echo $RESOLUTION</p>
            <p className="text-crt-text-secondary">{t("resolution")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
