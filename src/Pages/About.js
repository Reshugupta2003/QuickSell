// src/Pages/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1>About QuickSell</h1>
        <p>
          <strong>QuickSell</strong> is a modern online marketplace inspired by OLX,
          built using React.js and Firebase. It helps people sell, buy, or exchange items
          easily within their local community.
        </p>
        <p>
          This app is designed with a clean interface, mobile responsiveness, and Firebase-powered
          authentication, database, and image storage features.
        </p>
        <p>
          Users can quickly post ads for cars, gadgets, electronics, furniture, and more —
          or browse listings near them. We're also adding a feature to help people meet and
          trade safely offline.
        </p>

        <h3>🌟 Key Features</h3>
        <ul>
          <li>📝 Easy item posting and browsing</li>
          <li>🔐 Firebase authentication for secure login</li>
          <li>⚡ Real-time database for instant updates</li>
          <li>📷 Image storage for product photos</li>
        </ul>

        <p className="highlight-text">
          💡 QuickSell is perfect for anyone looking to declutter, find great deals,
          or connect with their community.
        </p>

        <h3>🚀 Future Plans</h3>
        <p>
          We plan to add more features like user profiles, chat functionality, and
          enhanced search options to make QuickSell even better.
        </p>

        <h3>🤝 Join Us!</h3>
        <p>
          We welcome feedback and contributions! If you have ideas or want to help,
          please reach out.
        </p>

        <p className="closing">
          🚀 We’re excited to build QuickSell better every day. Thank you for supporting us!
        </p>
      </div>
    </div>
  );
};

export default About;
