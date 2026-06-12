import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.projects, path: '/projects' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/ezulisme' },
    { label: 'TikTok', icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), href: 'https://tiktok.com/@ezulisme' },
    { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ezulisme' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/zulqifli-al-rasyid' },
  ];

  return (
    <footer className="bg-[var(--color-hero-surface)] border-t border-[var(--color-border)]" style={{ padding: '80px var(--page-gutter) 40px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-[0.12em] text-[var(--color-text-primary)]">
              ZUL
            </Link>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{t.footer.tagline}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              {t.footer.location}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-4">
              {t.footer.social}
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2"
                  >
                    <link.icon size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-4">
              {t.footer.contact}
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:hello@zuldesign.id"
                className="block text-sm text-[var(--color-accent)] hover:underline"
              >
                hello@zuldesign.id
              </a>
              <a
                href="https://wa.me/6283141191697"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--color-accent)] hover:underline"
              >
                +62 831-4119-1697
              </a>
              <Link
                to="/portfolio"
                className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mt-3"
              >
                {t.footer.portfolio}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {t.footer.copyright}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {t.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
