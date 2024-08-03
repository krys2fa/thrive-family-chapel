// src/components/Footer.js
import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="banner">
      <div className="info">
        <div className="title">Thrive Family Chapel</div>

        <div>
          <div className="title">SERVICE TIMES</div>
          <div className="times">
            <FaCalendarAlt />
            <span className="time">Sundays @ 8:30 AM</span>
          </div>
          <div className="times">
            <FaCalendarAlt />
            <span className="time">Wednesdays @ 8:30 PM</span>
          </div>
          <div className="times">
            <FaCalendarAlt />
            <span className="time">Fridays @ 7:00 PM</span>
          </div>
        </div>

        <div>
          <div className="title">GET IN TOUCH</div>

          <div className="contact">
            <FaPhoneAlt />
            <span className="number">053 155 6368</span>
          </div>

          <div className="location">
            <FaMapMarkerAlt />
            <div className="directions">
              <span>Weija - Kasoa N1 Highway, Mile 11,</span>
              <span>Broadcasting Taxi Rank, New Weija, Accra.</span>
            </div>
          </div>

          <div className="socials">
            <FaWhatsapp />

            <FaYoutube />

            <FaLinkedin />
          </div>
        </div>
      </div>
      <div></div>

      <footer className="footer">
        <p>&copy; 2024 Thrive Family Chapel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
