// src/Pages/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-info">
          <h2>📬 Contact Information</h2>
          <p><strong>Name:</strong> Reshu Gupta</p>
          <p><strong>Email:</strong> reshugupta@example.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Address:</strong> Bhopal, Madhya Pradesh, India</p>
        </div>

        <div className="contact-form">
          <h2>💬 Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
