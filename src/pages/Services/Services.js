import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegClock, FaVideo, FaMapMarkerAlt } from "react-icons/fa";
import family from "../../assets/images/family sunday service.jpeg";
import midweek from "../../assets/images/midweek fortification.jpeg";
import prayer from "../../assets/images/house of prayer.jpeg";

const Services = () => {
  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
         >
        Services
      </motion.h2>

      <div className="service-images">
        <motion.div
          className="service-item"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
        >
          <img
            src={family}
            alt="family sunday service"
            className="service-img"
          />
          <div>
            <p>
              Join us for our Family Sunday Service with Pastor Derrick Diaba.
            </p>
            <p>
              <FaRegClock />
              <span> 8:30 PM - 9:15 PM</span>{" "}
            </p>
            <p>
              <FaMapMarkerAlt />
              <span>
                Weija - Kasoa N1 Highway, Mile 11, Broadcasting Taxi Rank, New
                Weija, Accra.
              </span>
            </p>
            <p>Don't forget to invite a family member or friend! 👫✨</p>
          </div>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
        >
          <img
            src={midweek}
            alt="midweek fortification"
            className="service-img"
          />
          <div>
            <p>
              Join us for our Midweek Fortification Prayer Service as we seek
              God's grace to be faithful in our service to Him.
            </p>
            <p>
              <FaRegClock />
              <span> 8:30 PM - 9:15 PM</span>{" "}
            </p>
            <p>
              <FaVideo />
              <Link to="https://meet.google.com/pqd-vbjj-kgn">Google Meet</Link>
            </p>
            <p>Invite your family and friends!</p>
          </div>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
        >
          <img src={prayer} alt="house of prayer" className="service-img" />
          <div>
            <p>
              Join us every Friday evening between for an impactful House of
              Prayer event where we come together to lift intense prayers on
              behalf of ourselves, our church, and our nation.
            </p>
            <p>
              <FaRegClock />
              <span> 8:30 PM - 9:15 PM</span>{" "}
            </p>
            <p>
            <FaMapMarkerAlt />
              <span>
                Weija - Kasoa N1 Highway, Mile 11, Broadcasting Taxi Rank, New
                Weija, Accra.
              </span>
            </p>
            <p>
              Bring a friend and be part of this powerful time of corporate
              prayer and spiritual unity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
