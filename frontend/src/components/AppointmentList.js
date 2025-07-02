import React, { useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../services/appointmentApi";
import "../styles/AppointmentList.css";

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
  <div className="appointment-list-container">
    <h2>📅 Booked Appointments</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {appointments.map((appt) => (
        <li key={appt.appointmentID} className="appointment-item">
          <div className="appointment-info">
            {appt.date} | {appt.startTime} - {appt.endTime}
            {appt.feedback && (
              <div className="feedback-text">Feedback: {appt.feedback}</div>
            )}
            {appt.cancelled && <div className="cancelled-label">❌ Cancelled</div>}
          </div>
          {!appt.cancelled && (
            <button
              className="cancel-btn"
              onClick={() => handleCancel(appt.appointmentID)}
            >
              Cancel
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
);

}
