import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://www.linkedin.com/in/shankar-mishra-583aba298/',
      color: 'hover:text-gray-400'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/shankarmishra',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      url: 'mailto:xshankarmishra@gmail.com',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Phone',
      icon: <FaPhone className="text-2xl" />,
      url: 'tel:+91859105483',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
          <p className="text-gray-400 text-center mb-12">
            Feel free to reach out through any of these channels!
          </p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaEnvelope className="text-2xl text-gray-400" />
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                </div>
                <a 
                  href="mailto:xshankarmishra@gmail.com?subject=Hi! I came from your portfolio" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  xshankarmishra@gmail.com
                </a>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaPhone className="text-2xl text-gray-400" />
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                </div>
                <a 
                  href="tel:+91859105483" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 859105483
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Connect with me</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${link.color} transition-colors duration-300 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600`}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 