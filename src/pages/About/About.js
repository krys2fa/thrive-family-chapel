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
      <div>
        <p>Details about the church's mission, vision, and history.</p>
        <p>
          Thrive Family Chapel is a Christ-centered organization committed to
          transforming lives and communities with the good news of our Lord
          Jesus Christ. Join us for a transforming experience
        </p>
        <p>
          Address: Weija - Kasoa Highway, Mile 11, Junction, Weija 
        </p>
        <p>Hours: Closed⋅ Opens 9 am Sun </p>
        <p>Phone: 053 155 6368</p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>
  );
};

export default About;
