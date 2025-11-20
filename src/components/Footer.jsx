import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-dci-blue py-8 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Dot Com Infoway. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-dci-light-blue">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-dci-light-blue">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-dci-light-blue">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;