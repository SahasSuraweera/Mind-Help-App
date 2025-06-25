import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import patientApi from '../services/patientApi';
import RecordList from './RecordList';
import '../styles/PatientDetails.css'; // CSS import

export default function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    patientApi.get(`/patients/${id}`).then((res) => setPatient(res.data));
  }, [id]);

  if (!patient) return <div className="loading">Loading patient details...</div>;

  return (
    <div className="patient-details">
      <div className="patient-card">
        <h2>{patient.name}</h2>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Date of Birth:</strong> {patient.dob}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
      </div>

      <div className="records-section">
        <h3>Patient Personal Records</h3>
        <RecordList patientId={id} />
      </div>
    </div>
  );
}
