import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;