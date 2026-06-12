import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../context/LanguageContext';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'projects', path: '/projects' },
  { key: 'services', path: '/services' },
  { key: 'blog', path: '/blog' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
        style={{ padding: '0 var(--page-gutter)' }}
      >
        <div className="w-full flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-[20px] font-bold tracking-[0.12em] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            ZUL
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`font-mono text-xs uppercase tracking-[0.06em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--color-accent)] font-semibold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <span className={lang === 'en' ? 'text-[var(--color-text-primary)] font-semibold' : ''}>EN</span>
              <span className="mx-1 text-[var(--color-text-muted)]">/</span>
              <span className={lang === 'id' ? 'text-[var(--color-text-primary)] font-semibold' : ''}>ID</span>
            </button>

            <button
              onClick={toggleTheme}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:rotate-[15deg] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden text-[var(--color-text-primary)]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[var(--color-surface)]/98 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-[var(--color-text-primary)]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-3xl uppercase tracking-wide ${
                        isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'
                      }`}
                    >
                      {t.nav[link.key as keyof typeof t.nav]}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="absolute bottom-10 flex items-center gap-6">
              <button
                onClick={toggleLang}
                className="font-mono text-sm uppercase tracking-[0.06em] text-[var(--color-text-secondary)]"
              >
                {lang === 'en' ? 'Switch to ID' : 'Switch to EN'}
              </button>
              <button
                onClick={toggleTheme}
                className="text-[var(--color-text-secondary)]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
