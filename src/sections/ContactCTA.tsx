import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useScrollAnimation';

export function ContactCTA() {
  const { t } = useTranslation();
  const parallaxRef = useParallax(0.3);

  return (
    <section className="relative bg-black py-[120px] lg:py-[160px] overflow-hidden">
      <div className="container-brutal relative z-10">
        <div className="max-w-[640px] mx-auto text-center">
          {/* Headline */}
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-1 text-white whitespace-pre-line">
              {t('contact.headline')}
            </h2>
          </motion.div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body text-white/60 mt-6"
          >
            {t('contact.body')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-clay text-white text-label uppercase tracking-[0.1em] hover:bg-clay-dark transition-all duration-300"
            >
              {t('contact.label')}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-caption text-white/40 mt-8"
          >
            {t('contact.location')}
          </motion.p>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clay rounded-full blur-[200px]" />
      </div>
    </section>
  );
}
