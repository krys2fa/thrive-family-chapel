import React from 'react';
import './Header.css';
import logo from '../../assets/images/tfc.jpg';
import { FaPhoneAlt, FaDonate } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Thrive Family Chapel Logo" className="logo" />

    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Worship Services</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li className='header-button'>
            <Link to="/contact">
              Contact <FaPhoneAlt className="icon" /> 
            </Link>
          </li>
          <li className='header-button'>
            <Link to="/give">
              Give <FaDonate className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* <nav>
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
      </nav> */}
    </header>
  );
};

export default Header;
