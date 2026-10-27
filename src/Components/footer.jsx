import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h2>Medicare Hospital</h2>
        <p>
          Compassionate healthcare with experienced <br />
          doctors, modern facilities, and patient-first service <br />
          for every family.
        </p>
      </div>

      <div className="footer-mid">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Booking</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-right">
        <h3>Contact</h3>
        <p>Email: support@medicare.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Chennai, India</p>
      </div>
    </div>
  );
}

export default Footer;