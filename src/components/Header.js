import React from 'react';
import './Header.css';
import logo from '../assets/images/tfc.jpg';
import { FaPhoneAlt, FaDonate } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Thrive Family Chapel Logo" className="logo" />
      
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Worship Services</a></li>
          <li><a href="#events">Events</a></li>
          <li className='header-button'>
            <a href="#contact">
            Contact <FaPhoneAlt className="icon" /> 
            </a>
          </li>
          <li className='header-button'>
            <a href="#give">
              Give <FaDonate className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
