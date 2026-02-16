import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg text-text">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-semibold text-accent mb-4">
          404
        </h1>
        <p className="text-text-secondary text-lg mb-2">
          Page introuvable
        </p>
        <p className="text-text-muted text-sm mb-8">
          L&apos;adresse demandee n&apos;existe pas ou a ete deplacee.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-border text-text-secondary text-sm rounded-lg hover:border-accent hover:text-accent transition-colors"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
