// src/components/Hero.js
import React from "react";
import "./Hero.css";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"; // Import icons from react-icons

const Hero = () => {
  return (
    <section className="hero">
      <h2>Welcome to Thrive Family Chapel</h2>
      <p>Join us for worship and fellowship every Sunday at 8:30 AM</p>
      <div className="hero-buttons">
        <a href="#directions" className="hero-button">
          <span>Get Directions</span>
          <FaMapMarkerAlt className="icon" />
        </a>
        <a href="#whatsapp" className="hero-button">
          <span>Whatsapp Channel</span>
          <FaWhatsapp className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
