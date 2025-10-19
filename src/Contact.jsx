import React from "react";
import "./App.css"; // link to CSS file

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>We’d love to connect with you! Please fill out the form below to reach us.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
