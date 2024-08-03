// src/components/Hero.js
import React from "react";
import "./Home.css";
import { FaMapMarkerAlt, FaYoutube, FaWhatsapp } from "react-icons/fa";
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

      <motion.p
        className="description"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
      >
        Join us for worship and fellowship every Sunday at 8:30 AM
      </motion.p>

      <div className="hero-buttons">
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
          href="https://www.google.com/maps/dir//thrive+family+chapel/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xfdfbd8b6b7827f9:0x6d2624b8faa8cafb?sa=X&ved=1t:3061&ictx=111"
          className="hero-button"
          target="_blank"
        >
          <FaMapMarkerAlt className="icon" />
          <span>Directions</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
          href="https://www.youtube.com/@thethrivefamilychapel"
          className="hero-button"
          target="_blank"
        >
          <FaYoutube className="icon" />
          <span>Youtube</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
          href="https://www.youtube.com/@thethrivefamilychapel"
          className="hero-button"
          target="_blank"
        >
          <FaWhatsapp className="icon" />
          <span>Whatsapp</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
