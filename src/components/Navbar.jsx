import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-dci-blue py-4 shadow-md sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold">
          Dot Com Infoway
        </a>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="about" smooth={true} duration={500} className="hover:text-dci-light-blue cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="hover:text-dci-light-blue cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="hover:text-dci-light-blue cursor-pointer">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-dci-light-blue cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;