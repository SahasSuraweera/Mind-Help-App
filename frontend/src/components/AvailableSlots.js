import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import '../styles/AvailableSlots.css';

export default function AvailableSlots() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8083/mind-help/appointments/slots/available")
      .then((res) => setSlots(res.data))
      .catch((err) => console.error("Failed to load slots", err));
  }, []);

  return (
    <div className="slots-container">
      <h2>📅 Available Appointment Slots</h2>
      {slots.length === 0 ? (
        <p>No slots available at the moment.</p>
      ) : (
        <table className="slots-table">
          <thead>
            <tr>
              <th>Slot ID</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.slotID}>
                <td>{slot.slotID}</td>
                <td>{slot.date}</td>
                <td>{slot.slotStartTime}</td>
                <td>{slot.slotEndTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
