// src/components/About.js
import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
      >
        About Us
      </motion.h2>
      <p>Details about the church's mission, vision, and history.</p>
      <p>
        Thrive Family Chapel is a Christ-centered organization committed to
        transforming lives and communities with the good news of our Lord Jesus
        Christ. Join us for a transforming experience
      </p>
      <p>
        Address: Weija - Kasoa Highway, Mile 11, Junction, Weija Hours: Closed ⋅
        Opens 9 am Sun Phone: 053 155 6368
      </p>
    </section>
  );
};

export default About;
