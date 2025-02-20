'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { departureCities, type DepartureCity, fetchDepartureCities } from '@/data/departureCities';

export default function SearchEngine() {
  const { t } = useTranslation();
  const [departureCity, setDepartureCity] = useState<DepartureCity | ''>('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [availableDepartureCities, setAvailableDepartureCities] = useState(departureCities);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log({ departureCity, destination, dates });
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg -mt-10 relative z-10 max-w-6xl mx-auto px-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 p-6">
        <div className="flex-1">
          <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">
            {t('search.departureCity')}
          </label>
          <select
            id="departure"
            value={departureCity}
            onChange={(e) => {
              const value = e.target.value;
              // Kontrollime, kas väärtus on lubatud DepartureCity tüüp või tühi string
              if (value === '' || departureCities.some(city => city.id === value)) {
                setDepartureCity(value as DepartureCity | '');
              }
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">{t('search.selectDepartureCity')}</option>
            {availableDepartureCities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            {t('search.destination')}
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t('search.destinationPlaceholder')}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
            {t('search.dates')}
          </label>
          <input
            type="date"
            id="dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 
                     transition-colors duration-300 font-semibold"
          >
            {t('search.search')}
          </button>
        </div>
      </form>
    </div>
  );
}
