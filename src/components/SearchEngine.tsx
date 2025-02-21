'use client';

import React, { useState } from 'react';
import { 
  MapPinIcon,
  CalendarIcon,
  MoonIcon,
  UserGroupIcon,
  StarIcon,
  BuildingOfficeIcon,
  CakeIcon
} from '@heroicons/react/24/outline';

export default function SearchEngine() {
  // Põhiotsingu state
  const [departureCity, setDepartureCity] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [nights, setNights] = useState(1);
  const [tourists, setTourists] = useState(2);

  // Laiendatud otsingu (Rohkem) väljad
  const [hotelRating, setHotelRating] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [mealPlan, setMealPlan] = useState('');

  // Toggle nupu jaoks
  const [showMore, setShowMore] = useState(false);

  const handleSearch = () => {
    alert('Otsi-nupp vajutati. Vaata konsooli!');
    console.log({
      departureCity,
      destination,
      departureDate,
      nights,
      tourists,
      hotelRating,
      hotelName,
      mealPlan
    });
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b">
        <button className="pb-4 text-orange-500 border-b-2 border-orange-500 font-medium">
          STANDARDNE OTSING
        </button>
        <button className="pb-4 text-gray-400 font-medium">
          AI OTSING
        </button>
      </div>
      {/* Ülemine sektsioon: pealkiri ja Rohkem-nupp */}
      <div className="flex items-center justify-end mb-4">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Vähem' : 'Rohkem'}
        </button>
      </div>

      {/* Põhiotsing (standard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Lähtekoht */}
        <div>
          <label className="block mb-2 text-sm text-gray-600">Lähtekoht</label>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
            className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          >
            <option value="">Vali</option>
            <option value="Tallinn">Tallinn</option>
            <option value="Riia">Riia</option>
          </select>
          </div>
        </div>

        {/* Sihtkoht */}
        <div>
          <label className="block mb-2 text-sm text-gray-600">Sihtkoht</label>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
            type="text"
            className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            placeholder="Türgi, Egiptus..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        {/* Lahkumise kuupäev */}
        <div>
          <label className="block mb-2 text-sm text-gray-600">Lahkumine</label>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
            type="text"
            className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            placeholder="dd.mm.yyyy"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
        </div>

        {/* Ööde arv */}
        <div>
          <label className="block mb-2 text-sm text-gray-600">Ööde arv</label>
          <div className="relative">
            <MoonIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
            type="number"
            className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            min={1}
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Turistide arv */}
        <div>
          <label className="block mb-2 text-sm text-gray-600">Turistid</label>
          <div className="relative">
            <UserGroupIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
            type="number"
            className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            min={1}
            value={tourists}
            onChange={(e) => setTourists(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Laiendatud otsing, mis avaneb "Rohkem" nupu klikkimisel */}
      {showMore && (
        <div className="mt-4 border-t pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Hotelli reiting */}
            <div>
              <span className="block mb-2 font-medium">Hotelli reiting</span>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelRating"
                    value=""
                    checked={hotelRating === ''}
                    onChange={() => setHotelRating('')}
                  />
                  <span>Mistahes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelRating"
                    value="3"
                    checked={hotelRating === '3'}
                    onChange={() => setHotelRating('3')}
                  />
                  <span>3 ★</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelRating"
                    value="4"
                    checked={hotelRating === '4'}
                    onChange={() => setHotelRating('4')}
                  />
                  <span>4 ★</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelRating"
                    value="5"
                    checked={hotelRating === '5'}
                    onChange={() => setHotelRating('5')}
                  />
                  <span>5 ★</span>
                </label>
              </div>
            </div>

            {/* Hotelli nimi */}
            <div>
              <span className="block mb-2 font-medium">Hotelli nimi</span>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelName"
                    value=""
                    checked={hotelName === ''}
                    onChange={() => setHotelName('')}
                  />
                  <span>Mistahes hotell</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelName"
                    value="All Hotel Obakoy"
                    checked={hotelName === 'All Hotel Obakoy'}
                    onChange={() => setHotelName('All Hotel Obakoy')}
                  />
                  <span>All Hotel Obakoy</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelName"
                    value="Acanthus & Cennet Barut Collection"
                    checked={hotelName === 'Acanthus & Cennet Barut Collection'}
                    onChange={() =>
                      setHotelName('Acanthus & Cennet Barut Collection')
                    }
                  />
                  <span>Acanthus & Cennet Barut Collection</span>
                </label>
              </div>
            </div>

            {/* Toidupakett */}
            <div>
              <span className="block mb-2 font-medium">Toidupakett</span>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mealPlan"
                    value=""
                    checked={mealPlan === ''}
                    onChange={() => setMealPlan('')}
                  />
                  <span>Mistahes pakett</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mealPlan"
                    value="UAI"
                    checked={mealPlan === 'UAI'}
                    onChange={() => setMealPlan('UAI')}
                  />
                  <span>UAI - Ultra kõik hinnas</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mealPlan"
                    value="AI"
                    checked={mealPlan === 'AI'}
                    onChange={() => setMealPlan('AI')}
                  />
                  <span>AI - Kõik hinnas</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mealPlan"
                    value="FB"
                    checked={mealPlan === 'FB'}
                    onChange={() => setMealPlan('FB')}
                  />
                  <span>FB - 3 toidukorda päevas</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mealPlan"
                    value="HB"
                    checked={mealPlan === 'HB'}
                    onChange={() => setMealPlan('HB')}
                  />
                  <span>HB - Hommiku- ja õhtusöök</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Otsi nupp */}
      <div className="mt-6 flex justify-center">
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors w-full sm:w-auto"
          onClick={handleSearch}
        >
          Otsi reisi
        </button>
      </div>
    </div>
  );
}