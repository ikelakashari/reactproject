import React from "react";
import Fotto2 from "../assets/image3.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Fotto2})` }}
      ></div>
      <div className="rightSide">
        <form id="contact-form" method="POST">
           <h1> Contact Us</h1>
           <label htmlFor="name">Full Name</label>
           <input name="name" placeholder="Enter full name..." type="text" />
           <label htmlFor="email">Email</label>
           <input name="email" placeholder="Enter email..." type="email" />
           <label htmlFor="message">Message</label>
          <textarea
            rows="5" 
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;