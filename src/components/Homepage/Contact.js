// src/components/Contact.js

import "./Contact.css";

import React, { useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS template ID, user ID, and service ID
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email failed to send:", error);
        }
      );

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        {/* Images and contact information */}
        <img
          src="https://img.freepik.com/premium-photo/team-discussion-three-people-with-laptop-business-character-vector-illustration_605905-19460.jpg"
          alt="Contact"
        />
      </div>
      <div className="contact-form">
        {/* Contact form */}
        <h2 style={{ color: "#283593" }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" style={{ height: "30px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
