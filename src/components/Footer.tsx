import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), href: '/home' },
    { label: t('nav.works'), href: '/works' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Behance', href: '#' },
  ];

  return (
    <footer className="border-t border-border/20">
      <div className="container-brutal py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-caption uppercase tracking-[0.1em] text-foreground hover:text-clay transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/home"
            className="font-heading font-bold text-xl tracking-[-0.02em] uppercase text-foreground hover:text-clay transition-colors duration-200 order-first lg:order-none"
          >
            FOLIO.AR
          </Link>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 text-caption uppercase tracking-[0.1em] text-foreground hover:text-clay transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-12 pt-6 border-t border-border/10">
          <p className="text-caption text-foreground/40">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
