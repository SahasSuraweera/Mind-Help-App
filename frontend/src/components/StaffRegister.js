import React, { useState } from "react";

export default function StaffRegister() {
  const [form, setForm] = useState({
    patientId: "",
    salutation: "Mrs.",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    nationality: "Sri Lankan",
    gender: "",
    language: "English",
    handedness: "Left",
    primaryAddress: {
      number: "",
      street: "",
      city: "",
      province: "",
    },
    secondaryAddress: {
      number: "",
      street: "",
      city: "",
      province: "",
    },
    telephone: "",
    mobile: "",
    email: "",
    guardianName: "",
    guardianRelation: "",
    guardianContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e, type) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        {/* Title */}
        <h2 style={styles.title}>Staff Registration Form</h2>

        {/* Left Section */}
        <div style={styles.left}>
          <div style={styles.profileImage}></div>

          <h4 style={styles.sectionTitle}>General Information</h4>

          <label style={styles.label}>Patient ID</label>
          <input
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Salutation</label>
          <select
            name="salutation"
            value={form.salutation}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Dr.</option>
          </select>

          <label style={styles.label}>First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Middle Name</label>
          <input
            name="middleName"
            value={form.middleName}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <label style={styles.label}>Nationality</label>
          <select
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Sri Lankan</option>
            <option>Indian</option>
            <option>Other</option>
          </select>

          <label style={styles.label}>Gender</label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>

          <label style={styles.label}>Language</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            style={styles.input}
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Sinhala</option>
          </select>

          <label style={styles.label}>Handedness</label>
          <select
            name="handedness"
            value={form.handedness}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Left</option>
            <option>Right</option>
          </select>

          {/* Primary Address */}
          <label style={styles.label}>Primary Address</label>
          <div style={styles.flex}>
            <input
              placeholder="Number"
              name="number"
              value={form.primaryAddress.number}
              onChange={(e) => handleAddressChange(e, "primaryAddress")}
              style={{ ...styles.input, width: "48%" }}
            />
            <input
              placeholder="Street Name"
              name="street"
              value={form.primaryAddress.street}
              onChange={(e) => handleAddressChange(e, "primaryAddress")}
              style={{ ...styles.input, width: "48%" }}
            />
          </div>
          <input
            placeholder="City"
            name="city"
            value={form.primaryAddress.city}
            onChange={(e) => handleAddressChange(e, "primaryAddress")}
            style={styles.input}
          />
          <input
            placeholder="Province"
            name="province"
            value={form.primaryAddress.province}
            onChange={(e) => handleAddressChange(e, "primaryAddress")}
            style={styles.input}
          />

          {/* Secondary Address */}
          <label style={styles.label}>Secondary Address</label>
          <div style={styles.flex}>
            <input
              placeholder="No"
              name="number"
              value={form.secondaryAddress.number}
              onChange={(e) => handleAddressChange(e, "secondaryAddress")}
              style={{ ...styles.input, width: "48%" }}
            />
            <input
              placeholder="Street Name"
              name="street"
              value={form.secondaryAddress.street}
              onChange={(e) => handleAddressChange(e, "secondaryAddress")}
              style={{ ...styles.input, width: "48%" }}
            />
          </div>
          <input
            placeholder="City"
            name="city"
            value={form.secondaryAddress.city}
            onChange={(e) => handleAddressChange(e, "secondaryAddress")}
            style={styles.input}
          />
          <input
            placeholder="Province"
            name="province"
            value={form.secondaryAddress.province}
            onChange={(e) => handleAddressChange(e, "secondaryAddress")}
            style={styles.input}
          />

          <h4 style={styles.sectionTitle}>Contact Information</h4>
          <input
            placeholder="Telephone"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            placeholder="Mobile"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <h4 style={styles.sectionTitle}>Guardian Information</h4>
          <input
            placeholder="Guardian Name"
            name="guardianName"
            value={form.guardianName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            placeholder="Guardian Relation"
            name="guardianRelation"
            value={form.guardianRelation}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            placeholder="Guardian Contact"
            name="guardianContact"
            value={form.guardianContact}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Segoe UI, sans-serif",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    position: "relative",
  },
  title: {
    gridColumn: "1 / -1",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "24px",
    marginBottom: "10px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
  },
  right: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  radioGroup: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  },
  sectionTitle: {
    fontWeight: "600",
    backgroundColor: "#e6ecff",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "20px 0 10px",
    width: "fit-content",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    backgroundColor: "#ccc",
    borderRadius: "50%",
    marginBottom: "20px",
    alignSelf: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  submitButton: {
    gridColumn: "1 / -1",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
  },
};
