'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, Building, MapPin, Calendar, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { et } from 'date-fns/locale';

import { departureCities, type DepartureCity } from '@/data/departureCities';
import { type City } from '@/data/regions';
import RegionSelect from './components/RegionSelect';
import DateRangePicker from './components/DateRangePicker';
import TravelersInput, { type Traveler } from './components/TravelersInput';
import AdvancedSearch from './components/AdvancedSearch';
import DepartureCitySelect from './components/DepartureCitySelect';
import type { DateRange } from 'react-day-picker';

export default function SearchEngine() {
  const { t } = useTranslation();
  
  // Search state
  const [departureCity, setDepartureCity] = useState('');
  const [isDepartureCityOpen, setIsDepartureCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>();
  const [travelers, setTravelers] = useState<Traveler>({ adults: 2, children: [] });
  const [advancedOptions, setAdvancedOptions] = useState({
    hotelRating: '',
    hotelName: '',
    mealPlan: '',
    nights: 7,
    isOpen: false
  });

  const handleSearch = () => {
    // Convert new state format to old format for compatibility
    console.log({
      departureCity,
      selectedRegions: selectedCity ? [selectedCity.country] : [],
      selectedCities: selectedCity ? [selectedCity.id] : [],
      departureDate: dateRange?.from ? dateRange.from.toISOString() : '',
      nights: advancedOptions.nights,
      tourists: travelers.adults + travelers.children.length,
      hotelRating: advancedOptions.hotelRating,
      hotelName: advancedOptions.hotelName,
      mealPlan: advancedOptions.mealPlan
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-5xl mx-auto">
      <div className="p-10 space-y-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-orange-500">OTSING</div>
          <button
            onClick={() => setAdvancedOptions({ ...advancedOptions, isOpen: !advancedOptions.isOpen })}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ROHKEM
          </button>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Departure City */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Lähtekoht</div>
            <div className="relative">
              <button
                onClick={() => setIsDepartureCityOpen(true)}
                className="w-full h-12 px-3 text-left bg-gray-50 rounded flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-gray-400" />
                <span className="flex-1 truncate text-gray-700">
                  {departureCities.find(city => city.id === departureCity)?.name || 'Vali lähtekoht'}
                </span>
              </button>
              {isDepartureCityOpen && (
                <DepartureCitySelect
                  value={departureCity}
                  onChange={setDepartureCity}
                  cities={departureCities}
                  onClose={() => setIsDepartureCityOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Destination */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Sihtkoht</div>
            <button
              onClick={() => setSelectedCity(selectedCity)}
              className="w-full h-12 px-3 text-left bg-gray-50 rounded flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="flex-1 truncate text-gray-700">{selectedCity?.name || 'Vali sihtkoht'}</span>
            </button>
          </div>

          {/* Region */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Piirkond</div>
            <button
              className="w-full h-12 px-3 text-left bg-gray-50 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedCity}
            >
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="flex-1 truncate text-gray-700">Piirkond</span>
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Date Range */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Väljumine</div>
            <button
              onClick={() => setDateRange(dateRange)}
              className="w-full h-12 px-3 text-left bg-gray-50 rounded flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="flex-1 truncate text-gray-700">{dateRange?.from ? format(dateRange.from, 'dd.MM.yyyy', { locale: et }) : 'Väljumiskuupäev'}</span>
            </button>
          </div>

          {/* Travelers */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Reisijad</div>
            <button
              onClick={() => setTravelers(travelers)}
              className="w-full h-12 px-3 text-left bg-gray-50 rounded flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-gray-400" />
              <span className="flex-1 truncate text-gray-700">{`${travelers.adults + travelers.children.length} reisijat`}</span>
            </button>
          </div>

          {/* Nights */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Ööde arv</div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="number"
                value={advancedOptions.nights}
                onChange={(e) => setAdvancedOptions({ ...advancedOptions, nights: parseInt(e.target.value) || 0 })}
                min={1}
                max={30}
                className="w-full h-12 pl-9 pr-3 bg-gray-50 rounded text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            className="h-12 px-10 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none font-semibold text-lg"
          >
            Otsi reisi
          </button>
        </div>
      </div>

      {/* Advanced Search Modal */}
      {advancedOptions.isOpen && (
        <AdvancedSearch
          values={advancedOptions}
          onChange={setAdvancedOptions}
        />
      )}
    </div>
  );
}
