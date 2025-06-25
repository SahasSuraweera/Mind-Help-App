import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails'; 
import RecordForm from './components/RecordForm';         
import RecordList from './components/RecordList'; 

import './styles/App.css';

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
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/patients/new" element={<PatientForm />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/patients/:id/records/new" element={<RecordForm />} />
            <Route path="/patients/:id/records" element={<RecordListWrapper />} />
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
