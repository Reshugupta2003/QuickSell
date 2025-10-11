import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Mostly Used</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhaskaracharya Hostel</li>
              <li>IT Department</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
            <li><Link to="/about">
              <span>About</span>
            </Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>QuickSell</p>
          </div>
          <div className="list">
            <ul>
              <li><Link to="/help">Help</Link></li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Only For UIT Student</p>
        <p>Free Classifieds in UIT. © 2022-2026 </p>
      </div>
    </div>
  );
}

export default Footer;
