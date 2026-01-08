import React, { useState } from "react";

function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required!";
    }
    if (!formData.email) {
      formErrors.email = "Email is required!";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email format!";
    }
    if (!formData.agreed) {
      formErrors.agreed = "You must agree to the terms!";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Subscription successful 🎉");
      setFormData({ name: "", email: "", agreed: false }); // reset form
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2> Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Terms Checkbox */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              style={{ marginRight: "8px" }}
            />
            I agree to the terms and conditions
          </label>
          {errors.agreed && <p style={{ color: "red" }}>{errors.agreed}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formData.agreed}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: formData.agreed ? "blue" : "gray",
            color: "white",
            border: "none",
            cursor: formData.agreed ? "pointer" : "not-allowed",
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;