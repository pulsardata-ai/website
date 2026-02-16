import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-heading text-crt-green text-glow-lg mb-4">
          404
        </h1>
        <p className="font-terminal text-crt-accent text-lg mb-2">
          SEGFAULT : page introuvable
        </p>
        <p className="text-crt-text-secondary text-sm mb-8">
          L&apos;adresse demandee n&apos;existe pas ou a ete deplacee.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-crt-green text-crt-green font-heading text-sm uppercase tracking-wider rounded-sm hover:bg-crt-green/10 transition-all"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
