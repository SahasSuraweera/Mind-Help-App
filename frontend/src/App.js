import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

import Home from './components/Home';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import PatientUpdate from './components/PatientUpdate';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';
import AppointmentList from './components/AppointmentList';
import SlotBookingForm from './components/SlotBookingForm';
import AvailableSlots from './components/AvailableSlots';


import './styles/App.css';
import PaymentList from './components/PaymentList';

function RecordListWrapper() {
  const { id } = useParams();
  return <RecordList patientId={id} />;
}
function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>🩺 MindHelp Patient Management System</h1>
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/patients/new">Add Patient</Link>
            <Link to="/payments/new">All payments</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/appointments/book">Book Slot</Link>
            <Link to="/appointments/slots">Slots Available</Link>
            <Link to="/payments">Payments</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients/new" element={<PatientForm />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/patients/:id/update" element={<PatientUpdate />} />
            <Route path="/patients/:id/records/new" element={<RecordForm />} />
            <Route path="/patients/:id/records" element={<RecordListWrapper />} /
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/appointments/book" element={<SlotBookingForm />} />
            <Route path="/appointments/slots" element={<AvailableSlots />} />
            <Route path="/payments" element={<PaymentList />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} MindHelp — All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
