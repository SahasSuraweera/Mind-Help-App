import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import staffApi from "../services/staffApi";
import '../styles/StaffUpdate.css';

export default function StaffUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    isDeleted: false,
  });

  useEffect(() => {
    // Load existing staff data for pre-filling the form
    staffApi.get(`/staff/${id}`).then(res => setStaff(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert isDeleted to boolean
    if (name === "isDeleted") {
      setStaff({ ...staff, [name]: value === "true" });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await staffApi.put(`/staff/${id}`, staff);
      alert('✅ Staff member updated successfully!');
      navigate(`/staff/${id}`);
    } catch (err) {
      alert('❌ Error updating staff member.');
      console.error(err);
    }
  };

  return (
    <form className="staff-update-form" onSubmit={handleSubmit}>
      <h2>✏️ Update Staff Member</h2>

      <label>Job Role</label>
      <input name="jobRole" value={staff.jobRole} onChange={handleChange} required />

      <label>Salutation</label>
      <input name="salutation" value={staff.salutation} onChange={handleChange} required />

      <label>First Name</label>
      <input name="firstName" value={staff.firstName} onChange={handleChange} required />

      <label>Middle Name</label>
      <input name="middleName" value={staff.middleName} onChange={handleChange} />

      <label>Last Name</label>
      <input name="lastName" value={staff.lastName} onChange={handleChange} required />

      <label>NIC</label>
      <input name="nic" value={staff.nic} onChange={handleChange} required />

      <label>Gender</label>
      <select name="gender" value={staff.gender} onChange={handleChange} required>
        <option value="">Select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Date of Birth</label>
      <input name="dateOfBirth" type="date" value={staff.dateOfBirth} onChange={handleChange} required />

      <label>Joined Date</label>
      <input name="joinedDate" type="date" value={staff.joinedDate} onChange={handleChange} required />

      <label>Email</label>
      <input name="staffEmail" type="email" value={staff.staffEmail} onChange={handleChange} required />

      <label>Phone</label>
      <input name="staffPhone" type="tel" value={staff.staffPhone} onChange={handleChange} required />

      <label>Status</label>
      <select name="isDeleted" value={staff.isDeleted.toString()} onChange={handleChange} required>
        <option value="">Select status</option>
        <option value="false">Active</option>
        <option value="true">Deleted</option>
      </select>

      <button type="submit">Update Staff</button>
    </form>
  );
}
