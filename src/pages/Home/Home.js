// src/components/Hero.js
import React from "react";
import "./Home.css";
import { FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="hero">
      <motion.h2
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
      >
        Welcome to Thrive Family Chapel
      </motion.h2>

      <motion.p className="description"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}>
        Join us for worship and fellowship every Sunday at 8:30 AM
      </motion.p>

      <div className="hero-buttons">
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          href="#directions"
          className="hero-button"
        >
          <FaMapMarkerAlt className="icon" />
          <span>Directions</span>
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          href="#whatsapp"
          className="hero-button"
        >
          <FaYoutube className="icon" />
          <span>Youtube</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
