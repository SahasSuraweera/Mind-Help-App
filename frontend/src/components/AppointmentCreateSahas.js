import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CreateAppointment() {
  const { counsellorId } = useParams();
  const query = useQuery();
  const navigate = useNavigate();

  const date = query.get('date');
  const slot = query.get('slot');

  const [clientName, setClientName] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientName) {
      alert('Please enter your name');
      return;
    }

    setIsSubmitting(true);

    // Example appointment data
    const appointmentData = {
      counsellorId,
      date,
      slot,
      clientName,
      notes,
    };

    // TODO: Replace this with actual API call to backend
    console.log('Creating appointment:', appointmentData);

    setTimeout(() => {
      alert(`Appointment booked for ${clientName} on ${date} at ${slot} with counsellor ${counsellorId}`);
      setIsSubmitting(false);
      navigate('/appointments'); // Redirect after booking
    }, 1000);
  };

  if (!counsellorId || !date || !slot) {
    return <p>Missing appointment details. Please go back and select a slot.</p>;
  }

  return (
    <div className="create-appointment-container">
      <h2>Book Appointment</h2>
      <p><strong>Counsellor ID:</strong> {counsellorId}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time Slot:</strong> {slot}</p>

      
    </div>
  );
}