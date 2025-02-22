'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import { et } from 'date-fns/locale';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface DateRangePickerProps {
  dateRange: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({ dateRange, onSelect }: DateRangePickerProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return t('search.dates');
    if (!range.to) return format(range.from, 'd MMM', { locale: et });
    return `${format(range.from, 'd MMM', { locale: et })} - ${format(range.to, 'd MMM', { locale: et })}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 text-left border rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-gray-500" />
          <span>{formatDateRange(dateRange)}</span>
        </div>
        <Calendar className="w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white border rounded-lg shadow-lg p-2">
          <DayPicker
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(range) => {
              onSelect(range);
              if (range?.to) setIsOpen(false);
            }}
            locale={et}
            styles={{
              caption: { color: 'rgb(59 130 246)' },
              head_cell: { color: 'rgb(107 114 128)' },
            }}
          />
        </div>
      )}
    </div>
  );
}
