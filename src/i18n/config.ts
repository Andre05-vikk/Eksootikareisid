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
            calendar: 'Kalender',
            packages: 'Paketid',
            contact: 'Kontakt',
            login: 'Logi sisse'
          },
          calendar: {
            departureFrom: 'Väljumine',
            hint: 'Tumedamad kuupäevad tähistavad väljumisi. Liiguta hiir kuupäevale, et näha sihtkohti.'
          },
          search: {
            departureCity: 'Lähtekoht',
            selectDepartureCity: 'Vali lähtekoht',
            destination: 'Sihtkoht',
            destinationPlaceholder: 'Sihtkoht',
            dates: 'Reisi kuupäevad',
            search: 'Otsi'
          }
        }
      },
      en: {
        translation: {
          nav: {
            calendar: 'Calendar',
            packages: 'Packages',
            contact: 'Contact',
            login: 'Log in'
          },
          calendar: {
            departureFrom: 'Departure from',
            hint: 'Darker dates indicate departures. Hover over a date to see destinations.'
          },
          search: {
            departureCity: 'Departure City',
            selectDepartureCity: 'Select departure city',
            destination: 'Destination',
            destinationPlaceholder: 'Destination',
            dates: 'Travel dates',
            search: 'Search'
          }
        }
      },
      ru: {
        translation: {
          nav: {
            calendar: 'Календарь',
            packages: 'Пакеты',
            contact: 'Контакт',
            login: 'Войти'
          },
          calendar: {
            departureFrom: 'Вылет из',
            hint: 'Темные даты указывают на вылеты. Наведите курсор на дату, чтобы увидеть направления.'
          },
          search: {
            departureCity: 'Город вылета',
            selectDepartureCity: 'Выберите город вылета',
            destination: 'Пункт назначения',
            destinationPlaceholder: 'Пункт назначения',
            dates: 'Даты поездки',
            search: 'Поиск'
          }
        }
      },
      lv: {
        translation: {
          nav: {
            calendar: 'Kalendārs',
            packages: 'Paketes',
            contact: 'Kontakti',
            login: 'Pierakstīties'
          },
          calendar: {
            departureFrom: 'Izlidošana no',
            hint: 'Tumšākie datumi norāda izlidošanas. Novietojiet kursoru virs datuma, lai redzētu galamērķus.'
          },
          search: {
            departureCity: 'Izlidošanas pilsēta',
            selectDepartureCity: 'Izvēlieties izlidošanas pilsētu',
            destination: 'Galamērķis',
            destinationPlaceholder: 'Galamērķis',
            dates: 'Ceļojuma datumi',
            search: 'Meklēt'
          }
        }
      },
      lt: {
        translation: {
          nav: {
            calendar: 'Kalendorius',
            packages: 'Paketai',
            contact: 'Kontaktai',
            login: 'Prisijungti'
          },
          calendar: {
            departureFrom: 'Išvykimas iš',
            hint: 'Tamsesnės datos rodo išvykimus. Užveskite pelę ant datos, kad pamatytumėte keliones.'
          },
          search: {
            departureCity: 'Išvykimo miestas',
            selectDepartureCity: 'Pasirinkite išvykimo miestą',
            destination: 'Kelionės tikslas',
            destinationPlaceholder: 'Kelionės tikslas',
            dates: 'Kelionės datos',
            search: 'Ieškoti'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
