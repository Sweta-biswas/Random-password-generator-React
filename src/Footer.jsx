import React from 'react';
import './Footer.css'; // You'll need to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>For home</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Performance</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>For business</h3>
            <ul>
              <li><a href="#">Business support</a></li>
              <li><a href="#">Business products</a></li>
              <li><a href="#">Business partners</a></li>
              <li><a href="#">Business blog</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>For partners</h3>
            <ul>
              <li><a href="#">Mobile Carriers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press center</a></li>
              <li><a href="#">Digital trust</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Research Participation</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Gen © 2024 Gen Digital Inc. All rights reserved.</p>
        <ul className="legal-links">
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Products policy</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Report vulnerability</a></li>
          <li><a href="#">Contact security</a></li>
          <li><a href="#">Modern Slavery Statement</a></li>
          <li><a href="#">Do not sell my info</a></li>
          <li><a href="#">Subscription details</a></li>
          <li><a href="#">Cookie Preferences</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;