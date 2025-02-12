// src/components/Hero.js
import React from "react";
import "./Hero.css";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Welcome to Thrive Family Chapel</h2>
      <p>Join us for worship and fellowship every Sunday at 8:30 AM</p>
      <motion.div className="hero-buttons" 
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
        <a href="#directions" className="hero-button">
          <span>Get Directions</span>
          <FaMapMarkerAlt className="icon" />
        </a>
        <a href="#whatsapp" className="hero-button">
          <span>Whatsapp Channel</span>
          <FaWhatsapp className="icon" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
