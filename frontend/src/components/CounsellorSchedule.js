import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/CounsellorSchedule.css';

export default function CounsellorSchedule() {
  const { counsellorId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const generateTimeSlots = () => {
    const slots = [];
    let hour = 8;
    let minute = 30;

    while (hour < 16 || (hour === 16 && minute <= 30)) {
      const start = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      let endHour = hour;
      let endMinute = minute + 60;
      if (endMinute >= 60) {
        endHour += Math.floor(endMinute / 60);
        endMinute %= 60;
      }
      const end = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
      slots.push(`${start} - ${end}`);
      hour = endHour;
      minute = endMinute;
    }

    return slots;
  };

  const handleSlotClick = (slotTime) => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; // yyyy-MM-dd
    navigate(`/appointments/book/${counsellorId}?date=${formattedDate}&slot=${encodeURIComponent(slotTime)}`);
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">🗓️ Schedule for Counsellor ID: {counsellorId}</h2>

      <div className="date-picker-wrapper">
        <label htmlFor="datepicker"><strong>Select Date:</strong></label>
        <DatePicker
          id="datepicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="date-picker"
        />
      </div>

      <h3 style={{ marginTop: '1rem' }}>
        Available Slots for {selectedDate.toDateString()}
      </h3>

      <div className="time-slot-grid">
        {timeSlots.map((slot, index) => (
          <div className="time-slot" key={index} onClick={() => handleSlotClick(slot)}>
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}
