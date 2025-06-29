
import React, { useEffect, useState } from 'react';
import paymentApi from '../services/paymentApi'; // <-- make sure this exists
import '../styles/payment.css'; // reuse styling or create a new one

export default function PaymentList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    paymentApi.get('/payments')
      .then((res) => setPayments(res.data))
      .catch((err) => {
        console.error('Failed to fetch payments:', err);
      });
  }, []);

  return (
    <div className="payment-list-container">
      <h2 className="payment-list-heading">All Payments</h2>
      <ul className="payment-list">
        {payments.map((p) => (
          <li key={p.paymentID} className="payment-card">
            <div className="card-main">
              <strong>Payment ID: {p.payment_id}</strong>
              <p>payment ID: {p.payment_id}</p>
              <p>Appointment ID: {p.appointment_id}</p>
              <p>Amount: Rs. {p.amount}</p>
              <p>Payment Type: {p.payment_type}</p>
              <p>Status: {p.status}</p>
              <p>Date: {new Date(p.date).toLocaleDateString()}</p>
              <p>Time: {new Date(`1970-01-01T${p.created_at}Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
              <p>Processed Staff ID: {p.created_staff_id ?? 'N/A'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}