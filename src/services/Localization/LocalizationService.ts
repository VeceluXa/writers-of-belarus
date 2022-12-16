import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translations.json';
import ru from './locales/ru/translations.json';

export const defaultNS = 'main'
export const resources = {
  en,
  ru
} as const

const detectionOptions = {
  caches: ['localStorage'],
  order: ['localStorage', 'navigator'],
  lookupFromPathIndex: 0
}

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    detection: detectionOptions,
    supportedLngs: ['en', 'ru'],
    defaultNS: defaultNS,
    fallbackLng: 'en'
  })

export const supportedLanguages = Object.keys(resources);

export default i18next;