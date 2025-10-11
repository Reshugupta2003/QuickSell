// src/Pages/Help.js

import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-wrapper">
      <div className="help-card">
        <h1>🆘 Help & FAQs</h1>

        <div className="faq">
          <h3>🛒 How do I post an ad?</h3>
          <p>
            Click on the "Sell" button in the navbar, fill in product details, upload an image, and submit. Your ad will go live instantly!
          </p>
        </div>

        <div className="faq">
          <h3>🔐 Is my data secure?</h3>
          <p>
            Yes! We use Firebase Authentication and Firestore security rules to protect your account and listing data.
          </p>
        </div>

        <div className="faq">
          <h3>📱 Can I use QuickSell on mobile?</h3>
          <p>
            Absolutely. Our app is fully responsive and works smoothly on mobile browsers.
          </p>
        </div>

        <div className="faq">
          <h3>💬 I submitted a listing but don’t see it?</h3>
          <p>
            Make sure all required fields were filled correctly and that you uploaded an image. If you’re still facing issues, contact us.
          </p>
        </div>

        <div className="faq">
          <h3>📩 How can I contact support?</h3>
          <p>
            Visit our <a href="/contact">Contact Page</a> or message us directly on WhatsApp using the floating chat button.
          </p>
        </div>

        <p className="help-note">
          💡 Still stuck? We’re here to help you anytime — just reach out!
        </p>
      </div>
    </div>
  );
};

export default Help;
