import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/AvailableSlots.css";

export default function AvailableSlots() {
  const [slots, setSlots] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8083/mind-help/appointments/slots/available')
      .then(res => setSlots(res.data))
      .catch(err => console.error('Failed to load slots:', err));
  }, []);

  const handleBook = async (slotId) => {
    try {
      await axios.post('http://localhost:8083/mind-help/appointments/book', {
        slotId: slotId,
        feedback: feedback
      });
      alert("✅ Appointment booked!");
      setFeedback(""); // reset field
    } catch (err) {
      alert("❌ Booking failed");
      console.error(err);
    }
  };

  return (
    <div className="slot-booking-container">
      <h2>📆 Available Appointment Slots</h2>
      <ul className="slot-list">
        {slots.length === 0 ? (
          <p>No available slots.</p>
        ) : (
          slots.map(slot => (
            <li key={slot.slotID} className="slot-card">
              <div>
                <strong>{slot.date}</strong><br />
                {slot.slotStartTime} - {slot.slotEndTime}
              </div>
              <input
                type="text"
                placeholder="Optional feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="feedback-box"
              />
              <button className="book-btn" onClick={() => handleBook(slot.slotID)}>
                Book Appointment
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
