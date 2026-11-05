import { enTranslations } from './en';
import { swTranslations } from './sw';

export type Language = 'en' | 'sw';

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  sw: swTranslations,
};

export type TranslationKey = keyof typeof enTranslations;