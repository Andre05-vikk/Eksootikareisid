'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type DepartureCity } from '@/data/departureCities';
import { departureCities } from '@/data/mockData';

/**
 * Interface representing a trip with departure date and destinations
 */
interface Trip {
  date: Date;
  destinations: string[];
}

/**
 * Props for the DepartureCalendar component
 */
interface DepartureCalendarProps {
  departureCity: DepartureCity;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Helper function to format city names with proper capitalization
 */
const getCityDisplayName = (city: DepartureCity): string => {
  return city.name;
};

// Mock data for trips - will be replaced with API calls later
const mockTrips: Record<string, Trip[]> = {
  'tallinn': [
    { date: new Date(2025, 2, 15), destinations: ['Egiptus', 'Sri Lanka'] },
    { date: new Date(2025, 2, 30), destinations: ['Türgi'] },
  ],
  'riia': [
    { date: new Date(2025, 2, 8), destinations: ['Egiptus', 'Türgi'] },
    { date: new Date(2025, 2, 22), destinations: ['Sri Lanka'] },
  ],
  'vilnius': [
    { date: new Date(2025, 2, 12), destinations: ['Egiptus'] },
    { date: new Date(2025, 2, 28), destinations: ['Türgi', 'Sri Lanka'] },
  ]
};

const WEEK_DAYS = ['E', 'T', 'K', 'N', 'R', 'L', 'P'] as const;
const CURRENT_DATE = new Date(2025, 1, 20); // Current date from metadata
const CURRENT_YEAR = CURRENT_DATE.getFullYear();
const CURRENT_MONTH = CURRENT_DATE.getMonth();

const MONTHS = [
  'JAANUAR', 'VEEBRUAR', 'MÄRTS', 'APRILL', 'MAI', 'JUUNI',
  'JUULI', 'AUGUST', 'SEPTEMBER', 'OKTOOBER', 'NOVEMBER', 'DETSEMBER'
] as const;

const DepartureCalendar = ({ departureCity, isOpen, onClose }: DepartureCalendarProps) => {
  const { t } = useTranslation();
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  if (!isOpen) return null;

  const trips = mockTrips[departureCity.id] || [];
const popularDestinations = trips
    .filter(trip => trip.date.getMonth() === selectedMonth)
    .flatMap(trip => trip.destinations)
    .reduce((unique, dest) => unique.includes(dest) ? unique : [...unique, dest], [] as string[]);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const hasTripOnDate = (date: Date): Trip | undefined => {
    return trips.find(trip => 
      trip.date.getDate() === date.getDate() &&
      trip.date.getMonth() === date.getMonth() &&
      trip.date.getFullYear() === date.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(CURRENT_YEAR, selectedMonth);
    const firstDay = getFirstDayOfMonth(CURRENT_YEAR, selectedMonth);
    const totalDays = Math.ceil((daysInMonth + firstDay) / 7) * 7;

    for (let i = 0; i < totalDays; i++) {
      const dayNumber = i - firstDay + 1;
      const currentDayDate = new Date(CURRENT_YEAR, selectedMonth, dayNumber);
      const trip = hasTripOnDate(currentDayDate);
      
      days.push(
        <div key={i} className={`group relative p-1.5 text-center ${trip ? 'text-gray-900 font-bold cursor-pointer' : 'text-gray-500'}`}
          onMouseEnter={() => setHoveredDate(currentDayDate)}
          onMouseLeave={() => setHoveredDate(null)}>
          {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ''}
          {hoveredDate?.getDate() === dayNumber && trip && (
            <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 bg-orange-500 text-white shadow-lg rounded-lg px-2.5 py-1.5 mb-2 text-sm w-max max-w-[160px] group-hover:visible">
              <div className="flex flex-col items-center -my-0.5">
                {trip.destinations.map((dest, index) => (
                  <div key={index} className="whitespace-nowrap leading-5">{dest}</div>
                ))}
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-orange-500"></div>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-2xl mx-4 flex h-[420px] overflow-hidden shadow-xl">

        <div className="w-44 bg-[#F8F9FB] p-4 rounded-l-2xl">
          <div className="text-gray-400 mb-2 text-sm">{CURRENT_YEAR}</div>
          <div className="space-y-1">
            {MONTHS.map((month, index) => {
              // Only show current and future months
              if (index < CURRENT_MONTH) return null;
              
              return (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(index)}
                  className={`text-left w-full py-0.5 text-sm ${index === selectedMonth ? 'bg-white rounded-xl px-3 shadow-sm font-bold' : 'text-gray-800 px-3 font-medium'}`}
                >
                  {month}
                </button>
              );
            })}
          </div>
          <div className="text-gray-400 mt-2 text-sm">{CURRENT_YEAR + 1}</div>
          <div className="mt-1 space-y-1">
            {MONTHS.slice(0, CURRENT_MONTH).map((month, index) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(index)}
                className="text-left w-full py-0.5 text-sm text-gray-800 px-3 font-medium"
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 relative">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">{MONTHS[selectedMonth]}</h2>
            <div className="text-base">
              {t('calendar.departureFrom')}: <span className="font-bold text-orange-500">{getCityDisplayName(departureCity)}</span>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          {popularDestinations.length > 0 && (
            <div className="mb-3 flex items-center gap-3">
              <h3 className="text-base">Soovitatud sihtkohad:</h3>
              <div className="flex gap-1.5">
                {popularDestinations.map((dest, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-500'}`}
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-7 gap-1">
            {WEEK_DAYS.map(day => (
              <div key={day} className="p-1.5 text-center text-gray-900 text-sm font-bold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>


        </div>
      </div>
    </div>
  );
};

export default DepartureCalendar;
