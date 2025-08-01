import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaServer, FaReact, FaDatabase, FaCloud, FaTools, FaAndroid, FaMobile, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: FaServer,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MongoDB',
      'MySQL'
    ]
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: [
      'HTML',
      'CSS',
      'JavaScript (ES6+)',
      'React.js',
      'Redux'
    ]
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    skills: [
      'Android App Development',
      'Kotlin',
      'Jetpack Compose',
      'React Native'
    ]
  },
  {
    title: 'Cloud & Deployment',
    icon: FaCloud,
    skills: [
      'AWS (EC2, S3, IAM)',
      'Firebase Authentication',
      'Firebase Firestore',
      'Firebase Storage',
      'Firebase Hosting'
    ]
  },
  {
    title: 'Version Control & Tools',
    icon: FaTools,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Visual Studio Code'
    ]
  },
  {
    title: 'API & Authentication',
    icon: FaServer,
    skills: [
      'RESTful API Development',
      'JWT Authentication',
      'WebSocket Communication'
    ]
  },
  {
    title: 'Development Practices',
    icon: FaCode,
    skills: [
      'Clean Code',
      'Modular Architecture',
      'Agile Workflow',
      'API Performance Optimization'
    ]
  }
];

const SkillItem = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-3 py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
  >
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <span className="text-white font-medium">{skill}</span>
  </motion.div>
);

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-gray-800 p-2 rounded-lg">
        <Icon className="text-xl text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </div>
  </motion.div>
);

const SkillsSidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-black z-50 overflow-y-auto border-l border-gray-800"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
                  <p className="text-gray-400 mt-2">My expertise and technologies I work with</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-gray-900 rounded-full transition-colors"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
              </div>

              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <SkillCategory key={category.title} {...category} />
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Professional Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-300 font-medium text-lg">Freelance Project: Potbazar.com</h4>
                    <p className="text-gray-400 mb-2">Full Stack Developer</p>
                    <p className="text-gray-400 mb-3">Technologies: Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, Razorpay</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Developed a dynamic e-commerce platform for plant and gardening products</li>
                      <li>Implemented secure authentication (JWT) & role-based access control</li>
                      <li>Integrated Razorpay for seamless payment transactions (98% success rate)</li>
                      <li>Optimized database queries, improving API response time by 40%</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-gray-300 font-medium text-lg">Current Project: teamupIndia</h4>
                    <p className="text-gray-400 mb-2">Sports Player & Game Booking App</p>
                    <p className="text-gray-400 mb-3">Technologies: React Native, Node.js, MongoDB, Firebase, Render</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Building a location-based mobile app that connects local players for games</li>
                      <li>Implemented Firebase Authentication for secure Google & Facebook login</li>
                      <li>Integrated real-time geolocation & notifications within 10km radius</li>
                      <li>Developed game booking, profile editing, and coach/tournament sections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SkillsSidebar; 