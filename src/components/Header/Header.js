import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/tfc.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <motion.img
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        src={logo}
        alt="Thrive Family Chapel Logo"
        className="logo"
      />

      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/about">About</Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/services">Services</Link>
          </motion.li>

          <motion.li
            className="header-button"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="tel:053 155 6368">
              <FaPhoneAlt className="icon" /> <span>Contact</span>
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
