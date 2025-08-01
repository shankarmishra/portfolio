import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-4xl text-[#68A063]" />,
      description: 'Building scalable backend APIs and server-side applications.'
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="text-4xl" />,
      description: 'Creating robust and efficient web applications.'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-4xl text-[#4DB33D]" />,
      description: 'Database design and efficient data modeling.'
    },
    {
      name: 'React.js',
      icon: <FaReact className="text-4xl text-[#61DAFB]" />,
      description: 'Developing interactive and responsive user interfaces.'
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-4xl text-[#F05032]" />,
      description: 'Version control and collaborative development.'
    },
    {
      name: 'Firebase',
      icon: <SiFirebase className="text-4xl text-[#FFCA28]" />,
      description: 'Real-time database and authentication solutions.'
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-background/80 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
              </div>
              <p className="text-text/80">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-text/80">
            And many more tools and technologies in my arsenal...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 