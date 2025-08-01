import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaRocket, FaLightbulb, FaUsers, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const keyPoints = [
    {
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with modern technologies like React, Node.js, and MongoDB.',
      icon: FaCode
    },
    {
      title: 'Backend Expertise',
      description: 'Specialized in Node.js, Express.js, and scalable backend architecture with RESTful APIs.',
      icon: FaServer
    },
    {
      title: 'Mobile Development',
      description: 'Experience with React Native and Android development using Kotlin and Jetpack Compose.',
      icon: FaMobile
    },
    {
      title: 'Problem Solving',
      description: 'Strong analytical skills with focus on optimizing performance and creating efficient solutions.',
      icon: FaLightbulb
    },
    {
      title: 'Team Collaboration',
      description: 'Experience working in agile teams and leading projects in hackathons and competitions.',
      icon: FaUsers
    },
    {
      title: 'Innovation',
      description: 'Passionate about creating innovative solutions that make a real impact on users.',
      icon: FaRocket
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Software Engineer with a strong foundation in backend development and a love for creating impactful applications. 
                My journey in software development started with a curiosity to build things that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my Bachelor's in Computer Applications, I've already worked on several projects including e-commerce platforms, 
                mobile applications, and web services. I believe in writing clean, maintainable code and always staying updated with the latest technologies.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm motivated by the challenge of turning complex problems into simple, beautiful solutions. 
                Whether it's optimizing database queries, designing scalable architectures, or creating intuitive user interfaces, 
                I enjoy every aspect of the development process.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <point.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Education & Background</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications</h4>
                <p className="text-gray-300">KCC Institute of Technology & Management</p>
                <p className="text-gray-400">Greater Noida, India</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-300">Noida, India</p>
                <p className="text-gray-400">Available for remote work</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Available for Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-8 rounded-xl border border-green-700/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCheckCircle className="text-3xl text-green-400" />
              <h3 className="text-2xl font-bold text-white">Available for Office</h3>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              I'm currently available for full-time opportunities and excited to join a dynamic team where I can contribute my skills and continue learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded-full">Full-time</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Remote</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">On-site</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Hybrid</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 