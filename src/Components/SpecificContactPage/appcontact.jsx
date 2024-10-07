import React, { useState } from 'react';
import './appcontact.css';

const Appcontact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
    mobileNumber: '',
    projectType: '', 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }

    if (formData.projectType) {
      if (!formData.email) {
        valid = false;
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        valid = false;
        errors.email = 'Email is invalid';
      }
    }

    if (!formData.projectDescription) {
      valid = false;
      errors.projectDescription = 'Project description is required';
    }

    if (!formData.mobileNumber) {
      valid = false;
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      valid = false;
      errors.mobileNumber = 'Mobile number must be 10 digits';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="ai-contact-container">
      <h2>Fill The Form for App Services</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectType">Service Type:</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="C(CI/CD)">Continuous Integration and Continuous Deployment (CI/CD)</option>
            <option value="IaC">Infrastructure as Code (IaC)</option>
            <option value="Monitoring and Logging">Monitoring and Logging</option>
            <option value="Containerization and Orchestration">Containerization and Orchestration</option>
            <option value="Configuration Management">Configuration Management</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          ></textarea>
          {errors.projectDescription && <span className="error">{errors.projectDescription}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appcontact;
