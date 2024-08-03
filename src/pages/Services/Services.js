import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import family from "../../assets/images/family sunday service.jpeg";
import midweek from "../../assets/images/midweek fortification.jpeg";
import prayer from "../../assets/images/house of prayer.jpeg";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <ul>
        <li>Sunday Worship - 10:00 AM</li>
        <li>Wednesday Bible Study - 7:00 PM</li>
      </ul>
      <div className="service-images">
        <motion.img
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          src={family}
          alt="family sunday service"
          className="service-img"
        />

        <motion.img
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          src={midweek}
          alt="midweek fortification"
          className="service-img"
        />

        <motion.img
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          src={prayer}
          alt="house of prayer"
          className="service-img"
        />
      </div>
    </section>
  );
};

export default Services;
