import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import paymentApi from '../services/paymentApi';
import '../styles/PaymentUpdate.css'; 

export default function PaymentUpdate() {
  const { paymentId } = useParams();
  const navigate = useNavigate();

  const [payment, setPayment] = useState(null);
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [statusOptions, setStatusOptions] = useState([]);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  // Load payment details
  useEffect(() => {
    paymentApi.get(`/payments/${paymentId}`)
      .then(res => {
        setPayment(res.data);
        setAmount(res.data.amount);
        setStatus(res.data.status);
      })
      .catch(err => {
        console.error('Failed to load payment', err);
        setPayment(undefined);
        setError('Payment not found or server error.');
      });
  }, [paymentId]);

  // Load status options dynamically
  useEffect(() => {
    paymentApi.get('/payments/statuses')
      .then(res => {
        setStatusOptions(res.data);
        // If current status is not in the list (edge case), select first option
        if (!res.data.includes(status)) {
          setStatus(res.data[0] || '');
        }
      })
      .catch(err => {
        console.error('Failed to load status options', err);
        // fallback to default hardcoded options if desired
        setStatusOptions(['Paid', 'Pending', 'Failed']);
      });
  }, [status]);

  const handleUpdate = () => {
    if (isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setIsUpdating(true);

    const updated = {

    paymentId: paymentId,
    patientId: payment.patientId,
    appointmentId: payment.appointmentId,
    amount: parseFloat(amount),
    paymentType: payment.paymentType,
    createdStaffId: payment.createdStaffId,
    status: status,
    isDeleted: false,
};
    paymentApi.put(`/payments/${paymentId}`, updated)
      .then(() => {
        alert('Payment updated successfully');
        navigate('/payments');
      })
      .catch(err => {
        console.error('Update failed', err);
        alert('Failed to update payment');
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  if (payment === null) return <p>Loading payment...</p>;
  if (payment === undefined) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="payment-update-container" style={{ padding: '2rem' }}>
      <h2>Payment ID: {paymentId}</h2>
      <p>Patient ID: {payment.patientId}</p>
      <p>Appointment ID: {payment.appointmentId}</p>
      <p>Payment Type: {payment.paymentType}</p>
      <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
      <p>Processed By: {payment.createdStaffId}</p>
      <p style={{ color: 'navy' }}>Current Amount: Rs. {payment.amount}</p>
      <p style={{ color: 'navy' }}>Current Status: {payment.status}</p>
      <br />
      <label>Amount:</label>
      <input 
        type="number"
        step="100.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={handleUpdate} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Submit Update'}
      </button>
    </div>
  );
}
