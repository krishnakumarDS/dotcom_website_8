import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="bg-dci-gray py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl font-bold text-dci-dark-blue mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Innovative Solutions for a Digital World
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Transforming businesses with cutting-edge technology and strategic digital solutions.
        </motion.p>
        <motion.button
          className="bg-dci-blue text-white py-3 px-8 rounded-full hover:bg-dci-dark-blue transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;