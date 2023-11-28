import "./Footer.css"; // Ensure that you have a CSS file for styling your footer

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import React from "react";

// Import social media and contact icons

const Footer = () => {
  return (
    <footer className="main_footer">
      {/* Logo */}
      <div className="footer_logo">
        <img
          src="https://www.shutterstock.com/image-vector/vector-icon-illustration-digital-media-600nw-1175859982.jpg"
          alt="logo"
        />
      </div>

      {/* Social Icons */}
      <div className="social_icons">
        {/* Replace the placeholder links with your actual social media links */}
        <a href="#facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="#twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Contact Information */}
      <div className="contact_info">
        <div className="contact_item">
          <FaEnvelope />
          <span>Email: example@gmail.com</span>
        </div>
        <div className="contact_item">
          <FaPhone />
          <span>Phone: +123 456 7890</span>
        </div>
        <div className="contact_item">
          <FaMapMarker />
          <span>Location: Your Coaching Center, City, Country</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="nav_items_footer">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#teachers">Teachers</a>
        <a href="contact">Contact Us</a>
      </div>

      {/* Additional Footer Content */}
      <div className="additional_content">
        <p>&copy; 2023 Your Coaching Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
