import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: t('nav.home'), href: '/home' },
    { label: t('nav.works'), href: '/works' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    if (isHomePage && href === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-brutal">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/home"
              className="font-heading font-bold text-lg lg:text-xl tracking-[-0.02em] uppercase text-foreground hover:text-clay transition-colors duration-200"
              onClick={() => handleNavClick('/home')}
            >
              FOLIO.AR
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`heading-4 text-xs tracking-[0.05em] transition-colors duration-200 hover:text-clay ${
                    location.pathname === link.href ? 'text-clay' : 'text-foreground'
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Language Toggle - Desktop */}
              <button
                onClick={toggleLanguage}
                className="hidden lg:flex items-center gap-1.5 text-caption uppercase tracking-[0.1em] text-foreground hover:text-clay transition-colors duration-200"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span>{language === 'id' ? 'ID' : 'EN'}</span>
              </button>

              {/* Theme Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="hidden lg:flex items-center justify-center w-9 h-9 text-foreground hover:text-clay transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-background"
          >
            <div className="flex flex-col justify-center items-start h-full container-brutal pt-20">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className="heading-1 text-5xl md:text-6xl text-foreground hover:text-clay transition-colors duration-200"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Controls */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mt-12"
              >
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-caption uppercase tracking-[0.1em] text-foreground hover:text-clay transition-colors"
                >
                  <Globe size={16} />
                  <span>{language === 'id' ? 'ID' : 'EN'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-caption uppercase tracking-[0.1em] text-foreground hover:text-clay transition-colors"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{isDark ? 'Light' : 'Dark'}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
