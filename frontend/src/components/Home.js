import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="dashboard-container">
      
      {/* Header Section */}
      <header className="dashboard-header">
        <div>
          <h1>Welcome back 👋</h1>
          <p className="subtitle">
            Manage patients, appointments, and consultations with ease.
          </p>
        </div>

        <img
          src="/logo.webp"
          alt="MindHelp Logo"
          className="dashboard-logo"
        />
      </header>

      {/* Stats Cards */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p className="stat-number">128</p>
        </div>

        <div className="stat-card">
          <h3>Today’s Appointments</h3>
          <p className="stat-number">12</p>
        </div>

        <div className="stat-card">
          <h3>Active Counsellors</h3>
          <p className="stat-number">6</p>
        </div>

        <div className="stat-card">
          <h3>Pending Sessions</h3>
          <p className="stat-number">4</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">➕ Register Patient</button>
          <button className="action-btn">📅 New Appointment</button>
          <button className="action-btn">📂 View Records</button>
          <button className="action-btn">🧾 Payments</button>
        </div>
      </section>

    </div>
  );
}
