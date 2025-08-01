import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Potbazar.com',
      description: 'A dynamic e-commerce platform for plant and gardening products with secure payment integration.',
      longDescription: 'Built a full-stack e-commerce platform using Node.js and MongoDB, featuring secure payment integration with Razorpay, real-time inventory management, and an intuitive admin dashboard. Implemented JWT authentication and role-based access control.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'JWT', 'HTML/CSS'],
      achievements: [
        '98% payment success rate with Razorpay integration',
        '40% faster API response time through optimization',
        'Implemented caching for 30% better performance',
        'Reduced server costs by 25% through efficient architecture'
      ],
      image: '/project-1.jpg',
      demo: 'https://potbazar.com',
      github: 'https://github.com/shankar-mishra/potbazar',
      icon: FaGlobe,
      category: 'E-commerce'
    },
    {
      title: 'teamupIndia',
      description: 'A location-based mobile app connecting sports players for games like badminton and volleyball.',
      longDescription: 'Developed a mobile application that helps sports enthusiasts find nearby players and organize games. Features include real-time location tracking, in-app messaging, and event scheduling with Firebase integration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Google Maps API'],
      achievements: [
        'Over 1000+ active users on the platform',
        'Real-time geolocation tracking within 10km radius',
        'Scalable backend hosted on Render',
        '4.5+ star rating on Play Store'
      ],
      image: '/project-2.jpg',
      demo: '#',
      github: '#',
      icon: FaMobile,
      category: 'Mobile App'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            mobile apps, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <project.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 max-w-4xl w-full rounded-xl p-8 border border-gray-800 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <selectedProject.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                      <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{selectedProject.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {selectedProject.demo !== '#' && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  )}
                  {selectedProject.github !== '#' && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 