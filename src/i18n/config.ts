'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'et',
    lng: 'et', // default language
    resources: {
      et: {
        translation: {
          nav: {
            destinations: 'Sihtkohad',
            packages: 'Paketid',
            contact: 'Kontakt',
            login: 'Logi sisse'
          }
        }
      },
      en: {
        translation: {
          nav: {
            destinations: 'Destinations',
            packages: 'Packages',
            contact: 'Contact',
            login: 'Log in'
          }
        }
      },
      ru: {
        translation: {
          nav: {
            destinations: 'Направления',
            packages: 'Пакеты',
            contact: 'Контакт',
            login: 'Войти'
          }
        }
      },
      lv: {
        translation: {
          nav: {
            destinations: 'Galamērķi',
            packages: 'Paketes',
            contact: 'Kontakti',
            login: 'Pierakstīties'
          }
        }
      },
      lt: {
        translation: {
          nav: {
            destinations: 'Kelionės',
            packages: 'Paketai',
            contact: 'Kontaktai',
            login: 'Prisijungti'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
