import React from 'react';
import './Header.css';
import logo from '../../assets/images/tfc.jpg';
import { FaPhoneAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="header">
      <motion.img 
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ delay: 0.2, type: 'spring', stiffness: 120 }} 
       src={logo} alt="Thrive Family Chapel Logo" className="logo" />

    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Worship Services</Link></li>
          {/* <li><Link to="/events">Events</Link></li> */}
          <li >
            <Link to="/contact" className='header-button'>
            <FaPhoneAlt className="icon" /> <span>Contact</span>  
            </Link>
          </li>
          {/* <li className='header-button'>
            <Link to="/give">
              Give <FaDonate className="icon" />
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
