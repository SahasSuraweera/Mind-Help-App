import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import paymentApi from '../services/paymentApi';

export function PaymentUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [payment, setPayment] = useState(null);
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    paymentApi.get(`/payments/${id}`)
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
  }, [id]);

  const handleUpdate = () => {
    if (isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setIsUpdating(true);

    const updated = {
      ...payment,
      amount: Number(amount),
      status
    };

    paymentApi.put(`/payments/${id}`, updated)
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
      <h2>Update Payment - ID: {id}</h2>

      <label>Amount:</label>
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>

      <br /><br />

      <button onClick={handleUpdate} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Submit Update'}
      </button>
    </div>
  );
}
