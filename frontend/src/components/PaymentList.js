import React, { useEffect, useState } from 'react';
import paymentApi from '../services/paymentApi';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';

export default function PaymentList() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allPayments, setAllPayments] = useState([]);

  // Load all payments initially
  useEffect(() => {
    paymentApi.get('/payments')
      .then((res) => {
        setPayments(res.data);
        setAllPayments(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch payments:', err);
      });
  }, []);

  // Fetch by ID when search term is used
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setPayments(allPayments);
    } else {
      paymentApi.get(`/payments/${searchTerm}`)
        .then(res => {
          setPayments([res.data]);
        })
        .catch(err => {
          console.error(`Payment ID ${searchTerm} not found`, err);
          setPayments([]);
        });
    }
  }, [searchTerm]);

  return (
    <div className="payment-list-container">
      <h2 className="payment-list-heading">Payments</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search by Payment ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="payment-card-grid">
        {payments.length > 0 ? (
          payments.map(payment => (
            <div className="payment-card" key={payment.paymentId}>
              <div className="card-main">
                <h3>Payment ID: {payment.paymentId}</h3>
                <p>Patient ID: {payment.patientId}</p>
                <p>Appointment ID: {payment.appointmentId}</p>
                <p>Amount: Rs. {payment.amount}</p>
                <p>Payment Type: {payment.paymentType}</p>
                <p>Date: {payment.date}</p>
                <p>
                  Time: {new Date(`1970-01-01T${payment.createdAt}Z`).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </p>
                <p>Processed By: {payment.createdStaffId}</p>
                <p>Status: {payment.status}</p>

                <div className="card-buttons">
                  <button className="btn-update"
                 onClick={() => navigate(`/payments/update/${payment.paymentId}`)}> Update </button>
                <button className="btn-delete">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>
            No results found for Payment ID: <strong>{searchTerm}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
