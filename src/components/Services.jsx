import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Services = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const services = [
    { name: 'Web Development', description: 'Custom web solutions tailored to your business needs.' },
    { name: 'Digital Marketing', description: 'Comprehensive digital marketing strategies to boost your online presence.' },
    { name: 'App Development', description: 'Mobile app development for iOS and Android platforms.' },
    { name: 'AI Services', description: 'Artificial intelligence solutions to automate and optimize your business processes.' },
  ];

  return (
    <section id="services" className="py-20 bg-dci-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-dci-dark-blue mb-8 text-center">Our Services</h2>
        <div className="overflow-x-auto">
          <motion.div
            className="flex space-x-8 min-w-full"
            ref={containerRef}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 w-80 flex-shrink-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-xl font-semibold text-dci-blue mb-2">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;