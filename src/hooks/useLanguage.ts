import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  }, [language, i18n]);

  const setLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    },
    [i18n]
  );

  return {
    language,
    isIndonesian: language === 'id',
    isEnglish: language === 'en',
    toggleLanguage,
    setLanguage,
  };
}
