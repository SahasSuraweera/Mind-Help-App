import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectPatient() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Segoe UI, sans-serif" }}>
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontWeight: "700" }}>Select patient type</h2>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            <input
              type="radio"
              name="patientType"
              value="student"
              checked={selectedType === "student"}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            Student
          </label>
          <p style={{ marginLeft: "25px", marginTop: "0", fontSize: "14px" }}>
            Suitable for university and school students.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            <input
              type="radio"
              name="patientType"
              value="individual"
              checked={selectedType === "individual"}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            Individuals
          </label>
          <p style={{ marginLeft: "25px", marginTop: "0", fontSize: "14px" }}>
            Ideal for single working professionals or adults.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            <input
              type="radio"
              name="patientType"
              value="couple"
              checked={selectedType === "couple"}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            Couple
          </label>
          <p style={{ marginLeft: "25px", marginTop: "0", fontSize: "14px" }}>
            Best suited for couples seeking joint appointments.
          </p>
        </div>

        {/* Link to PatientRegister */}
        <Link
          to="/PatientRegister"
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "25px",
            textAlign: "center",
            display: "inline-block",
            width: "fit-content",
            fontWeight: "600",
          }}
        >
          Continue to Registration →
        </Link>
      </div>

      {/* Right Side (optional image or color) */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#007bff",
   
        }}
      ></div>
    </div>
  );
}
