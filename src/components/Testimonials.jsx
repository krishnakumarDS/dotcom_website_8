import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      company: 'ABC Corp',
      testimonial: 'Dot Com Infoway has been instrumental in transforming our digital presence. Their expertise and dedication are unmatched.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Ltd',
      testimonial: 'We are extremely satisfied with the app development services provided by Dot Com Infoway. Their team is highly skilled and professional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b2933e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-dci-dark-blue mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-dci-blue">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;