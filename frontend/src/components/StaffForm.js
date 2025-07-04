import React, { useState } from "react";
import staffApi from "../services/staffApi";
import '../styles/StaffForm.css';

export default function StaffForm() {
  const [staff, setStaff] = useState({
    jobRole: '',
    joinedDate: '',
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    nic: '',
    gender: '',
    dateOfBirth: '',
    staffEmail: '',
    staffPhone: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "isDeleted") {
      setStaff({ ...staff, [name]: value === "true" });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await staffApi.post('/staff', staff);
      alert('✅ Staff member registered!');
    } catch (err) {
      alert('❌ Error registering staff member.');
      console.error(err);
    }
  };

  return (
    <form className="staff-form" onSubmit={handleSubmit}>
      <h2>🧑‍💼 Register New Staff Member</h2>

      <label>Job Role</label>
      <input name="jobRole" placeholder="Enter job role" onChange={handleChange} required />

      <label>Salutation</label>
      <input name="salutation" placeholder="Mr/Ms/Dr etc." onChange={handleChange} required />

      <label>First Name</label>
      <input name="firstName" placeholder="Enter first name" onChange={handleChange} required />

      <label>Middle Name</label>
      <input name="middleName" placeholder="Enter middle name " onChange={handleChange} />

      <label>Last Name</label>
      <input name="lastName" placeholder="Enter last name" onChange={handleChange} required />

      <label>NIC</label>
      <input name="nic" placeholder="Enter NIC number" onChange={handleChange} required />

      <label>Gender</label>
      <select name="gender" onChange={handleChange} required>
        <option value="">Select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Date of Birth</label>
      <input name="dateOfBirth" type="date" onChange={handleChange} required />

      <label>Joined Date</label>
      <input name="joinedDate" type="date" onChange={handleChange} required />

      <label>Email</label>
      <input name="staffEmail" type="email" placeholder="Enter email" onChange={handleChange} required />

      <label>Phone</label>
      <input name="staffPhone" type="tel" placeholder="Enter phone number" onChange={handleChange} required />

      

      <button type="submit">Register Staff</button>
    </form>
  );
}
