import React, { useState } from "react";
import "./Register.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Account</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="form-input"
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="club_organizer">Club Organizer</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          onChange={handleInputChange}
          className="form-input file-input"
        />
      </div>

      <button className="submit-button">Create Account</button>
    </div>
  );
};

export default RegistrationForm;
