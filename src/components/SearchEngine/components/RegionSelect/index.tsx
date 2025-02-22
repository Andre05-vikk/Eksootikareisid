'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { regions, type Region, type City } from '@/data/regions';
import { ChevronDown, MapPin } from 'lucide-react';

interface RegionSelectProps {
  selectedCity: City | null;
  onSelect: (city: City) => void;
}

export default function RegionSelect({ selectedCity, onSelect }: RegionSelectProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region === selectedRegion ? null : region);
  };

  const handleCityClick = (city: City) => {
    onSelect(city);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 text-left border rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>{selectedCity ? `${selectedCity.name}, ${selectedCity.country}` : t('search.destination')}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
          <div className="p-2">
            {regions.map((region) => (
              <div key={region.id}>
                <button
                  onClick={() => handleRegionClick(region)}
                  className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded-md"
                >
                  <span className="font-medium">{region.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      selectedRegion?.id === region.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedRegion?.id === region.id && (
                  <div className="ml-4 mt-1 space-y-1">
                    {region.cities.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => handleCityClick(city)}
                        className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded-md"
                      >
                        <span>{`${city.name}, ${city.country}`}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
