'use client';

import { useState, useEffect } from 'react';

type CalendarSliderProps = {
  onSelectDate: (date: Date) => void;
  onSelectSlot: (slot: string) => void;
};

export default function CalendarSlider({ onSelectDate, onSelectSlot }: CalendarSliderProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [availableDays, setAvailableDays] = useState<Date[]>([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  useEffect(() => {
    const days = Array.from({ length: 60 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return new Date(date);
    });
    setAvailableDays(days);
  }, []);

  const months: { [key: string]: Date[] } = availableDays.reduce((acc, date) => {
    const key = date.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
    if (!acc[key]) acc[key] = [];
    acc[key].push(date);
    return acc;
  }, {} as { [key: string]: Date[] });

  const monthKeys = Object.keys(months);
  const currentMonth = monthKeys[currentMonthIndex];
  const daysToShow = months[currentMonth] || [];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    onSelectDate(date);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    onSelectSlot(slot);
  };

  const nextMonth = () => {
    if (currentMonthIndex < monthKeys.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const slots = ['10:00', '11:00', '14:00', '15:00', '16:00'];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} disabled={currentMonthIndex === 0} className="text-xl">←</button>
        <h2 className="text-xl font-bold capitalize">{currentMonth}</h2>
        <button onClick={nextMonth} disabled={currentMonthIndex === monthKeys.length - 1} className="text-xl">→</button>
      </div>

      <div className="flex overflow-x-auto space-x-3 pb-2">
        {daysToShow.map((date) => (
          <button
            key={date.toDateString()}
            onClick={() => handleDateSelect(date)}
            className={`p-2 min-w-[80px] rounded-lg text-sm text-center font-medium transition-all ${
              selectedDate?.toDateString() === date.toDateString()
                ? 'bg-pink-400'
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
          >
            <div>{date.toLocaleDateString('fr-FR', { weekday: 'short' })}</div>
            <div>{date.getDate()}</div>
          </button>
        ))}
      </div>
    </div>
  );
}