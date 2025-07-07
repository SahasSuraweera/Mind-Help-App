import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    phone: "",
    
    agreeTerms: false,
    notRobot: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!form.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    if (!form.notRobot)
      newErrors.notRobot = "Please confirm you are not a robot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/SelectPatient"); // ✅ new route
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Left form part */}
      <div
        style={{
          flex: 1,
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Welcome
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <label htmlFor="username" style={labelStyle}>
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            style={inputStyle(errors.username)}
          />
          {errors.username && <div style={errorStyle}>{errors.username}</div>}

          {/* Password */}
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle(errors.password)}
          />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}

          {/* Phone */}
          <label htmlFor="phone" style={labelStyle}>
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            style={inputStyle(errors.phone)}
          />
          {errors.phone && <div style={errorStyle}>{errors.phone}</div>}

          {/* Checkboxes */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
              />
              I agree to terms and conditions
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <input
                type="checkbox"
                name="notRobot"
                checked={form.notRobot}
                onChange={handleChange}
              />
              I'm not a robot
            </label>
          </div>

          {errors.agreeTerms && <div style={errorStyle}>{errors.agreeTerms}</div>}
          {errors.notRobot && <div style={errorStyle}>{errors.notRobot}</div>}

          {/* Submit */}
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
      </div>

      {/* Right image or color part */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#007bff",
        }}
      />
    </div>
  );
}

// --- Styles ---
const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "600",
};

const inputStyle = (error) => ({
  width: "100%",
  padding: "10px",
  marginBottom: error ? "5px" : "20px",
  borderRadius: "25px",
  border: error ? "1.5px solid red" : "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
});

const errorStyle = {
  color: "red",
  marginBottom: "15px",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop: "10px",
};
