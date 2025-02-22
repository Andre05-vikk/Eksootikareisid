'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Star, Building, UtensilsCrossed } from 'lucide-react';
import { hotels } from '@/data/hotels';
import { mealPlans } from '@/data/mealPlans';

interface AdvancedSearchProps {
  values: {
    hotelRating: string;
    hotelName: string;
    mealPlan: string;
    nights: number;
    isOpen: boolean;
  };
  onChange: (values: AdvancedSearchProps['values']) => void;
}

export default function AdvancedSearch({ values, onChange }: AdvancedSearchProps) {
  const { t } = useTranslation();

  const handleChange = (field: keyof AdvancedSearchProps['values'], value: string | number) => {
    onChange({ ...values, [field]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{t('search.more')}</h2>
          <button
            onClick={() => onChange({ ...values, isOpen: false })}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          {/* Nights */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.nights')}</label>
            <input
              type="number"
              min={1}
              max={30}
              value={values.nights}
              onChange={(e) => handleChange('nights', parseInt(e.target.value) || 1)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hotel Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.hotelRating')}</label>
            <div className="flex gap-2">
              {[3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleChange('hotelRating', values.hotelRating === String(rating) ? '' : String(rating))}
                  className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-1 ${values.hotelRating === String(rating) ? 'bg-blue-50 border-blue-500' : 'hover:border-gray-400'}`}
                >
                  <Star className={`w-4 h-4 ${values.hotelRating === String(rating) ? 'text-blue-500' : 'text-gray-400'}`} />
                  <span>{rating}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hotel Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.hotelName')}</label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={values.hotelName}
                onChange={(e) => handleChange('hotelName', e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('search.allHotels')}</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Meal Plan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.mealPlan')}</label>
            <div className="relative">
              <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={values.mealPlan}
                onChange={(e) => handleChange('mealPlan', e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('search.allMealPlans')}</option>
                {mealPlans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={() => onChange({ ...values, isOpen: false })}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('search.apply')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
