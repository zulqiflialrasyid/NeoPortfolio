import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useTranslation();

  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-end pb-16 lg:pb-20 relative">
      <div className="container-brutal w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-label text-clay mb-4"
        >
          {t('hero.available')}
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-foreground whitespace-pre-line"
        >
          {t('hero.name')}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-body text-foreground/60 max-w-[480px] mt-6 lg:mt-8"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToWorks}
          className="group inline-flex items-center gap-3 mt-8 lg:mt-10 px-6 py-3 bg-clay text-white text-label uppercase tracking-[0.1em] hover:bg-clay-dark transition-all duration-300"
        >
          {t('hero.cta')}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-2 transition-transform duration-300"
          />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-label text-foreground/40 [writing-mode:vertical-lr]">
            SCROLL
          </span>
          <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute inset-x-0 top-0 h-4 bg-clay"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
