'use client';

import { useState } from 'react';
import { departureCities } from '@/data/mockData';

export default function SearchEngine() {
  const [departureCity, setDepartureCity] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

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
            Väljumislinn
          </label>
          <select
            id="departure"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Vali väljumislinn</option>
            {departureCities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Sihtkoht
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Sihtkoht"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
            Reisi kuupäevad
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
            Otsi
          </button>
        </div>
      </form>
    </div>
  );
}
