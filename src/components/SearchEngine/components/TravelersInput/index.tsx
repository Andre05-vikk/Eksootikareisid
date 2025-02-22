'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Users, Minus, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Traveler {
  adults: number;
  children: { age: number }[];
}

interface TravelersInputProps {
  value: Traveler;
  onChange: (value: Traveler) => void;
}

export default function TravelersInput({ value, onChange }: TravelersInputProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAdultsChange = (delta: number) => {
    const newAdults = Math.max(1, Math.min(value.adults + delta, 10 - value.children.length));
    onChange({ ...value, adults: newAdults });
  };

  const handleChildrenChange = (delta: number) => {
    const currentChildren = value.children;
    if (delta > 0 && currentChildren.length + value.adults < 10) {
      onChange({
        ...value,
        children: [...currentChildren, { age: 2 }]
      });
    } else if (delta < 0 && currentChildren.length > 0) {
      onChange({
        ...value,
        children: currentChildren.slice(0, -1)
      });
    }
  };

  const handleChildAgeChange = (index: number, age: number) => {
    const newChildren = [...value.children];
    newChildren[index] = { age: Math.max(0, Math.min(age, 17)) };
    onChange({ ...value, children: newChildren });
  };

  const getTravelersText = () => {
    const total = value.adults + value.children.length;
    return `${total} reisija${total !== 1 ? 't' : ''}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 text-left border rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" />
          <span>{getTravelersText()}</span>
        </div>
      </button>

      {isOpen && (
        <div 
          ref={modalRef}
          className="absolute z-50 mt-1 p-4 bg-white border rounded-lg shadow-lg w-72 space-y-4"
        >
          {/* Adults */}
          <div>
            <div className="flex justify-between items-center">
              <span className="font-medium">{t('search.travelers.adults')}</span>
              <div className="flex items-center gap-3">
                <button
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => handleAdultsChange(-1)}
                  disabled={value.adults <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center">{value.adults}</span>
                <button
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => handleAdultsChange(1)}
                  disabled={value.adults + value.children.length >= 10}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Children */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{t('search.travelers.children')}</span>
              <div className="flex items-center gap-3">
                <button
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => handleChildrenChange(-1)}
                  disabled={value.children.length === 0}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center">{value.children.length}</span>
                <button
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => handleChildrenChange(1)}
                  disabled={value.adults + value.children.length >= 10}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Child ages */}
            {value.children.map((child, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-600">{t('search.travelers.child')} {index + 1}</span>
                <input
                  type="number"
                  min={0}
                  max={17}
                  value={child.age}
                  onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value) || 0)}
                  className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{t('search.travelers.years')}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
