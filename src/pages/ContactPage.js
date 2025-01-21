import React from 'react';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description"> <b>
        We'd love to hear from you! Please reach out to us using the details below:
      </b></p>
      <div className="contact-details">
        <p><strong>Email:</strong> lauracelyn1@gmail.com</p>
        <p><strong>Phone:</strong> +250791363991</p>
        <p><strong>Address:</strong> KN 185 st</p>
      </div>
        <p className="request-note"><b><em>For any request, share it on </em></b></p>
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <Footer/>
    </div>
  );
};

export default ContactPage;
