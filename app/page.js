import DirectoryClient from '@/components/DirectoryClient';

export default function DirectoryHome() {
  return (
    <div>
      <div className="hex-field" />
      <nav className="nav-public">
        <div className="brand"><span className="brand-mark">B</span> Bumpify Directory</div>
        <span className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="live-dot" /> Données en direct
        </span>
      </nav>

      <header className="hero">
        <h1>Trouvez votre prochain <span>serveur Discord</span>.</h1>
        <p className="lead">
          L'annuaire des serveurs propulsés par Bumpify — données réelles, mises à jour en direct
          depuis le réseau de bump : membres, description, tags et nombre de bumps.
        </p>
      </header>

      <DirectoryClient />

      <footer className="footer-pub">
        <span>Bumpify Directory — alimenté par de vraies données du réseau Bumpify</span>
        <span className="mono">v1</span>
      </footer>
    </div>
  );
}
