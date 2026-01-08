import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required!";
    }
    if (!password) {
      formErrors.password = "Password is required!";
    }

    setErrors(formErrors);

    // If no errors, you can proceed with login logic
    if (Object.keys(formErrors).length === 0) {
      alert("Login successful 🎉");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;