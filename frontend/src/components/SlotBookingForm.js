import React, { useState } from "react";
import { bookAppointment } from "../services/appointmentApi";

export default function SlotBookingForm() {
  const [slotId, setSlotId] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAppointment(parseInt(slotId), feedback);
      alert("Appointment booked!");
    } catch (err) {
      alert("Booking failed.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>🕒 Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Slot ID:
          <input
            type="number"
            value={slotId}
            onChange={(e) => setSlotId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Feedback (optional):
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}
