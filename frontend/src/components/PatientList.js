import React, { useEffect, useState } from 'react';
import patientApi from '../services/patientApi';
import '../styles/PatientList.css'; // 👈 Import from the styles folder

export default function PatientList() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        patientApi.get('/patients').then((res) => setPatients(res.data));
    }, []);

    return (
        <div className="patient-list-container">
            <h2 className="patient-list-heading">All Patients</h2>
            <ul className="patient-list">
                {patients.map((p) => (
                    <li key={p.id} className="patient-card">
                        <strong>{p.name}</strong>
                        <p>Email: {p.email}</p>
                        <p>Phone: {p.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
