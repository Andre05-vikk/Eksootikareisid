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
            search: 'Otsi',
            region: 'Piirkond',
            nights: 'Ööde arv',
            more: 'Rohkem valikuid',
            apply: 'Rakenda',
            hotelRating: 'Hotelli tärnid',
            hotelName: 'Hotelli nimi',
            mealPlan: 'Toitlustus',
            allHotels: 'Kõik hotellid',
            allMealPlans: 'Kõik toitlustuse variandid',
            departureCity: 'Lähtelinn',
            selectDepartureCity: 'Vali lähtelinn',
            searchCity: 'Otsi linna',
            nights: 'Ööde arv',
            destination: 'Sihtkoht',
            destinationPlaceholder: 'Vali sihtkoht',
            dates: 'Väljumiskuupäev',
            travelers: {
              adults: 'Täiskasvanud',
              children: 'Lapsed',
              child: 'Laps',
              years: 'aastat'
            }
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
            search: 'Search',
            region: 'Region',
            nights: 'Number of nights',
            more: 'More options',
            apply: 'Apply',
            hotelRating: 'Hotel rating',
            hotelName: 'Hotel name',
            mealPlan: 'Meal plan',
            allHotels: 'All hotels',
            allMealPlans: 'All meal plans',
            departureCity: 'Departure city',
            selectDepartureCity: 'Select departure city',
            searchCity: 'Search city',
            nights: 'Number of nights',
            destination: 'Destination',
            destinationPlaceholder: 'Select destination',
            dates: 'Departure date',
            travelers: {
              adults: 'Adults',
              children: 'Children',
              child: 'Child',
              years: 'years'
            }
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
            search: 'Поиск',
            region: 'Регион',
            nights: 'Количество ночей',
            more: 'Больше опций',
            apply: 'Применить',
            hotelRating: 'Рейтинг отеля',
            hotelName: 'Название отеля',
            mealPlan: 'Питание',
            allHotels: 'Все отели',
            allMealPlans: 'Все варианты питания',
            departureCity: 'Город вылета',
            selectDepartureCity: 'Выберите город вылета',
            searchCity: 'Поиск города',
            nights: 'Количество ночей',
            destination: 'Направление',
            destinationPlaceholder: 'Выберите направление',
            dates: 'Дата вылета',
            travelers: {
              adults: 'Взрослые',
              children: 'Дети',
              child: 'Ребенок',
              years: 'лет'
            }
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
            search: 'Meklēt',
            region: 'Reģions',
            nights: 'Nakts skaits',
            more: 'Vairāk opciju',
            apply: 'Piemērot',
            hotelRating: 'Viesnīcas reitings',
            hotelName: 'Viesnīcas nosaukums',
            mealPlan: 'Ēdināšana',
            allHotels: 'Visas viesnīcas',
            allMealPlans: 'Visi ēdināšanas varianti',
            departureCity: 'Izlidošanas pilsēta',
            selectDepartureCity: 'Izvēlieties izlidošanas pilsētu',
            searchCity: 'Meklēt pilsētu',
            nights: 'Nakšu skaits',
            destination: 'Galamērķis',
            destinationPlaceholder: 'Izvēlieties galamērķi',
            dates: 'Izlidošanas datums',
            travelers: {
              adults: 'Pieaugušie',
              children: 'Bērni',
              child: 'Bērns',
              years: 'gadi'
            }
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
            search: 'Ieškoti',
            region: 'Regionas',
            nights: 'Naktų skaičius',
            more: 'Daugiau parinkčių',
            apply: 'Taikyti',
            hotelRating: 'Viešbučio reitingas',
            hotelName: 'Viešbučio pavadinimas',
            mealPlan: 'Maitinimas',
            allHotels: 'Visi viešbučiai',
            allMealPlans: 'Visi maitinimo variantai',
            departureCity: 'Išvykimo miestas',
            selectDepartureCity: 'Pasirinkite išvykimo miestą',
            searchCity: 'Ieškoti miesto',
            nights: 'Naktų skaičius',
            destination: 'Kelionės tikslas',
            destinationPlaceholder: 'Pasirinkite kelionės tikslą',
            dates: 'Išvykimo data',
            travelers: {
              adults: 'Suaugusieji',
              children: 'Vaikai',
              child: 'Vaikas',
              years: 'metai'
            }
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
