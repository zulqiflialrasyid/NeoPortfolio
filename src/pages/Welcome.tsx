import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Welcome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleEnter();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      navigate('/home');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center cursor-pointer"
      onClick={handleEnter}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="text-center select-none"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-white uppercase leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(64px, 12vw, 140px)' }}
        >
          {t('welcome.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-caption uppercase tracking-[0.2em] text-white/60 mt-4"
        >
          {t('welcome.subtitle')}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-body text-white/60 mt-8"
        >
          {t('welcome.tagline')}
        </motion.p>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="fixed bottom-8 right-8 text-caption text-white/40"
        >
          {t('welcome.cta')}
        </motion.p>
      </motion.div>
    </div>
  );
}
