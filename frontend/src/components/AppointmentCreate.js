import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import appointmentApi from '../services/appointmentApi';
import staffApi from '../services/staffApi';
import '../styles/AppointmentCreate.css';

export default function CreateAppointment() {
  const { counsellorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Destructure safely from location.state
  const {
    slotId,
    slotDate,
    slotTime,
    hourlyRate,
    displayName
  } = location.state || {};

  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent form submission if details missing
  if (!counsellorId || !slotId || !slotDate || !slotTime || !hourlyRate) {
    return <p>❌ Missing appointment details. Please go back and select a valid slot.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientName) {
      alert('Please enter your name');
      return;
    }

    setIsSubmitting(true);

    const appointmentData = {
      slotId: slotId,
      counsellorId: parseInt(counsellorId),
      appointmentDate: slotDate,
      appointmentTime: slotTime,
      appointmentFee: hourlyRate,
      patientName: patientName,
      contactNumber: contactNumber,
      notes: notes,
      status: 'Pending',
      deleted: false
    };

    try {
      await appointmentApi.post('/appointments', appointmentData);
      await staffApi.put(`/schedules/${slotId}`);
      alert(`✅ Appointment booked!\n\n👤 ${patientName}\n📅 ${slotDate}\n🕒 ${slotTime}\n👨‍⚕️ ${displayName}\n💰 Rs. ${hourlyRate}`);
      navigate('/appointments');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('❌ Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-appointment-container">
      <div className="appointment-card">
      <h2>📅 Book Appointment</h2>
      <p><strong>Counsellor Name:</strong> {displayName}</p>
      <p><strong>Date:</strong> {slotDate}</p>
      <p><strong>Time Slot:</strong> {slotTime}</p>
      <p><strong>Appointment Fee:</strong> Rs. {hourlyRate}</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div>
          <label htmlFor="patientName">Patient Name:</label><br />
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number:</label><br />
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit number"
            required
          />
        </div>

        <div style={{ marginTop: '0.5rem' }}>
          <label htmlFor="notes">Notes (optional):</label><br />
          <textarea
            id="notes"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" disabled={isSubmitting} style={{ marginTop: '1rem' }}>
          {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
        </button>
      </form>
      </div>
    </div>
  );
}
