import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1505628353006-1a9f3c8e6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          className="md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-dci-dark-blue mb-4">About Us</h2>
          <p className="text-gray-700">
            Dot Com Infoway is a leading technology company specializing in web development, digital marketing, app
            development, and AI services. We are committed to delivering innovative solutions that drive business
            growth and success. Our team of experts is passionate about technology and dedicated to providing exceptional
            service to our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;