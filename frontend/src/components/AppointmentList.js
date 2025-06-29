import React, { useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../services/appointmentApi";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const res = await getAppointments();
    setAppointments(res.data);
  };

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      alert("Appointment cancelled");
      loadAppointments();
    } catch (err) {
      alert("Failed to cancel appointment.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>📅 Booked Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.appointmentID}>
            {appt.date} | {appt.startTime} - {appt.endTime}
            {appt.feedback && ` | Feedback: ${appt.feedback}`}
            {appt.cancelled ? (
              <span> ❌ Cancelled</span>
            ) : (
              <button onClick={() => handleCancel(appt.appointmentID)}>Cancel</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
