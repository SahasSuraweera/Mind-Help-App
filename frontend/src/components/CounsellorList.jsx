import React, { useEffect, useState } from 'react';
import staffApi from '../services/staffApi'; // axios instance for backend calls
import '../styles/Payment.css'; // Use your styles or create a Counsellor.css
import { useNavigate } from 'react-router-dom'; // For navigation

export default function CounsellorList() {
  const navigate = useNavigate();
  const [counsellors, setCounsellors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    staffApi.get('/counsellors')
      .then(res => {
        setCounsellors(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch counsellors.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading counsellors...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="payment-list-container">
      <h2 className="payment-list-heading">Counsellors</h2>

      {counsellors.length > 0 ? (
        <div className="payment-card-grid">
          {counsellors.map(counsellor => (
            <div className="payment-card" key={counsellor.counsellorId}>
              <div className="card-main">
                <h3>Counsellor ID: {counsellor.counsellorId}</h3>
                <p>Staff ID: {counsellor.staffId}</p>
                <p>Name: {counsellor.displayName}</p>
                <p>Specialization: {counsellor.specialization}</p>
                <p>Description: {counsellor.description}</p>
                <p>Hourly Rate: Rs. {counsellor.hourlyRate}</p>

                <div className="card-buttons">
                  <button className="btn-update" onClick={() => navigate(`/counsellors/schedule/${counsellor.counsellorId}`)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', width: '100%' }}>
          No counsellors found.
        </p>
      )}
    </div>
  );
}
