import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="contact">
     
      <div className="contact-header">
        <h2 className="contact-header-title">Contact Us</h2>
        <p className="contact-header-description">Send us a message</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="name">Name</label>
          <input
            className="contact-form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="email">Email</label>
          <input
            className="contact-form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="subject">Subject</label>
          <input
            className="contact-form-input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter the subject of your message"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="message">Message</label>
          <textarea
            className="contact-form-textarea"
            name="message"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="contact-form-submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
