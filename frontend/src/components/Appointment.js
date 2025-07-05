import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appointmentApi from '../services/appointmentApi';
import '../styles/Appointment.css';

export default function Appointment() {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await appointmentApi.get(`/appointments/${appointmentId}`);
        setAppointment(res.data);
        setNotes(res.data.notes || '');
      } catch (err) {
        console.error('Error fetching appointment:', err);
        setError('Failed to load appointment.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [appointmentId]);

  const updateNotes = async () => {
    try {
      await appointmentApi.put(`/appointments/${appointmentId}/notes`, { notes });
      alert('Notes updated successfully!');
      setAppointment(prev => ({ ...prev, notes }));
    } catch (err) {
      console.error('Error updating notes:', err);
      alert('Failed to update notes.');
    }
  };

  const deleteAppointment = async () => {
    const confirm = window.confirm('Are you sure you want to delete this appointment?');
    if (!confirm) return;

    try {
      await appointmentApi.delete(`/appointments/${appointmentId}`);
      alert('Appointment deleted.');
      navigate('/appointments'); // Navigate back to appointment list
    } catch (err) {
      console.error('Error deleting appointment:', err);
      alert('Failed to delete appointment.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!appointment) return <p>No appointment found.</p>;

  return (
    <div className="appointment-detail">
      <h2>Appointment Details</h2>
      <p><strong>Appointment ID:</strong> {appointment.appointmentId}</p>
      <p><strong>Counsellor ID:</strong> {appointment.counsellorId}</p>
      <p><strong>Patient Name:</strong> {appointment.patientName}</p>
      <p><strong>Contact Number:</strong> {appointment.contactNumber}</p>
      <p><strong>Date:</strong> {appointment.appointmentDate}</p>
      <p><strong>Time:</strong> {appointment.appointmentTime}</p>

      <div>
        <strong>Notes:</strong><br />
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter notes here..."
        />
      </div>

      <div style={{ marginTop: '1em' }}>
        <button onClick={updateNotes} style={{ marginRight: '10px' }}>
          Update Notes
        </button>
        <button onClick={deleteAppointment} style={{ backgroundColor: 'red', color: 'white' }}>
          Cancel Appointment
        </button>
      </div>
    </div>
  );
}
