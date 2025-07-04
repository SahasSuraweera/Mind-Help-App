import React, { useEffect, useState } from 'react';
import appointmentApi from '../services/appointmentApi';
import { useNavigate } from 'react-router-dom';

export default function AppointmentListPage() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await appointmentApi.get('/appointments'); // adjust endpoint as needed
      setAppointments(res.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      alert('Failed to load appointments.');
    }
  };

  const handlePaymentClick = (appointmentId) => {
    navigate(`/payment/${appointmentId}`);
  };

  return (
    <div className="appointment-list-container">
      <h2>📋 Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Time</th>
              <th>Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.appointmentId}>
                <td>{a.appointmentId}</td>
                <td>{a.patientName}</td>
                <td>{a.contactNumber}</td>
                <td>{a.appointmentDate}</td>
                <td>{a.appointmentTime}</td>
                <td>Rs. {a.appointmentFee}</td>
                <td>{a.status}</td>
                <td>
                  <button onClick={() => handlePaymentClick(a.appointmentId)}>
                    💰 Payment Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
