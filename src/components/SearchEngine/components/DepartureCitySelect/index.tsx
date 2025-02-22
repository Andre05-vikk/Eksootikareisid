'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Building, Search, X } from 'lucide-react';
import { type DepartureCity } from '@/data/departureCities';

interface DepartureCitySelectProps {
  value: string;
  onChange: (value: string) => void;
  cities: readonly DepartureCity[];
  onClose: () => void;
}

export default function DepartureCitySelect({ value, onChange, cities, onClose }: DepartureCitySelectProps) {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter cities based on search
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="relative" ref={modalRef}>
      <div className="absolute top-0 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-50">
        {/* Search Input */}
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search.searchCity')}
              className="w-full h-10 pl-9 pr-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Cities List */}
        <div className="max-h-64 overflow-y-auto">
          {filteredCities.map((city) => (
            <button
              key={city.id}
              onClick={() => {
                onChange(city.id);
                onClose();
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 ${
                value === city.id ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <Building className="w-4 h-4 text-gray-400" />
              <span>{city.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
