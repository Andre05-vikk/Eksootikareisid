'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './locales/et/common.json';

i18next.use(initReactI18next).init({
  resources: {
    et: {
      common,
    },
  },
  lng: 'et',
  fallbackLng: 'et',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
