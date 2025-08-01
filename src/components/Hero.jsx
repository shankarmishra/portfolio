import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaRocket } from 'react-icons/fa';
import SkillsSidebar from './SkillsSidebar';

function Hero() {
  const [isSkillsOpen, setIsSkillsOpen] = React.useState(false);
  const mountRef = React.useRef(null);
  
  React.useEffect(() => {
    try {
      const THREE = require('three');
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }
      
      // Create floating tech stack cubes
      const createTechCube = (position, color, scale = 1) => {
        const geometry = new THREE.BoxGeometry(scale, scale, scale);
        const material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: 0.7,
          shininess: 30,
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(...position);
        scene.add(cube);
        return cube;
      };

      // Create tech stack representation
      const techStack = [
        { pos: [-2, 2, 0], color: '#333333', scale: 1.2 },    // Backend
        { pos: [2, -1, 1], color: '#4a4a4a', scale: 1 },      // Frontend
        { pos: [-1, -2, 2], color: '#666666', scale: 0.8 },   // Database
        { pos: [1.5, 1.5, -1], color: '#808080', scale: 0.9 }, // Cloud
        { pos: [-1.5, 0, -2], color: '#999999', scale: 1.1 }  // DevOps
      ];

      const cubes = techStack.map(tech => createTechCube(tech.pos, tech.color, tech.scale));
      
      // Create central sphere
      const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: '#1a1a1a',
        shininess: 50,
      });
      const centralSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(centralSphere);

      // Add connecting lines
      const createConnectingLine = (startPos, endPos) => {
        const points = [
          new THREE.Vector3(...startPos),
          new THREE.Vector3(...endPos)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({ color: '#333333', transparent: true, opacity: 0.3 });
        return new THREE.Line(lineGeometry, lineMaterial);
      };

      // Connect central sphere to each cube
      cubes.forEach(cube => {
        const line = createConnectingLine([0, 0, 0], [cube.position.x, cube.position.y, cube.position.z]);
        scene.add(line);
      });
      
      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const pointLight1 = new THREE.PointLight(0x808080, 1);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0x4a4a4a, 1);
      pointLight2.position.set(-5, -5, -5);
      scene.add(pointLight2);
      
      camera.position.z = 5;
      
      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate cubes
        cubes.forEach((cube, i) => {
          cube.rotation.x += 0.005 * (i + 1);
          cube.rotation.y += 0.005 * (i + 1);
        });

        // Pulse central sphere
        const time = Date.now() * 0.001;
        centralSphere.scale.set(
          1 + Math.sin(time) * 0.1,
          1 + Math.sin(time) * 0.1,
          1 + Math.sin(time) * 0.1
        );
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      };
    } catch (error) {
      console.error('Three.js error:', error);
    }
  }, []);
  
  return (
    <section className="h-screen w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      
      <div ref={mountRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-6"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">SM</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Shankar Mishra
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Engineer | Backend & Full-Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about building scalable applications and creating impactful solutions. 
            Specializing in Node.js, React, and modern web technologies.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/shankarmishra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 border border-gray-700"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/shankar-mishra-583aba298/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 border border-gray-700"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>
            
            <motion.button
              onClick={() => setIsSkillsOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold hover:bg-gray-100"
            >
              <FaCode className="text-xl" />
              View Skills
            </motion.button>
            
            <motion.a
              href="mailto:xshankarmishra@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 border border-gray-700"
            >
              <FaRocket className="text-xl" />
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-12 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-sm">Scroll down to explore my work</p>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto mt-4 flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <SkillsSidebar isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
    </section>
  );
}

export default Hero; 