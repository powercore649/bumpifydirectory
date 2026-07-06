import TemplatesClient from '@/components/TemplatesClient';

export const metadata = {
  title: 'Templates de serveur Discord — Bumpify Directory',
};

export default function TemplatesPage() {
  return (
    <div>
      <div className="hex-field" />
      <nav className="nav-public">
        <a className="brand" href="/"><span className="brand-mark">B</span> Bumpify Directory</a>
        <a href="/" className="filter-chip">← Annuaire des serveurs</a>
      </nav>

      <header className="hero">
        <h1>Templates de <span>serveur Discord</span>.</h1>
        <p className="lead">
          Chaque lien ci-dessous a été vérifié manuellement — cliquez, choisissez un nom, et Discord
          crée immédiatement un nouveau serveur avec la structure complète (salons, catégories, rôles).
        </p>
      </header>

      <TemplatesClient />

      <footer className="footer-pub">
        <span>Templates vérifiés manuellement — liste amenée à s'enrichir</span>
        <span className="mono">v1</span>
      </footer>
    </div>
  );
}
