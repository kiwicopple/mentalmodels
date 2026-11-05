'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Persist language choice to localStorage
  useEffect(() => {
    const stored = localStorage.getItem('language') as Language | null;
    if (stored === 'en' || stored === 'sw') {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key] ?? translations.en[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.split(`{${k}}`).join(String(v));
      }
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
