import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Floating ball component
const FloatingBall = ({ delay, duration, size, color, startPosition }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${size}`}
      style={{ 
        background: color,
        top: startPosition.y,
        left: startPosition.x,
        zIndex: 0
      }}
      animate={{
        y: [0, -50, 0, 50, 0],
        x: [0, 25, 0, -25, 0],
        scale: [1, 1.1, 1, 0.9, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay
      }}
    />
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Balls configuration - added more balls and variety
  const balls = [
    { delay: 0, duration: 7, size: 'w-32 h-32', color: '#3B82F6', startPosition: { x: '10%', y: '15%' } },
    { delay: 1.5, duration: 9, size: 'w-24 h-24', color: '#6366F1', startPosition: { x: '70%', y: '25%' } },
    { delay: 0.8, duration: 8, size: 'w-48 h-48', color: '#3B82F6', startPosition: { x: '80%', y: '60%' } },
    { delay: 2.3, duration: 10, size: 'w-56 h-56', color: '#4F46E5', startPosition: { x: '20%', y: '70%' } },
    { delay: 1.2, duration: 9, size: 'w-20 h-20', color: '#2563EB', startPosition: { x: '40%', y: '45%' } },
    { delay: 3.1, duration: 11, size: 'w-36 h-36', color: '#4338CA', startPosition: { x: '85%', y: '15%' } },
    { delay: 2.7, duration: 10, size: 'w-28 h-28', color: '#1E40AF', startPosition: { x: '15%', y: '40%' } },
    { delay: 0.5, duration: 8, size: 'w-40 h-40', color: '#3730A3', startPosition: { x: '65%', y: '85%' } },
    { delay: 1.8, duration: 9.5, size: 'w-16 h-16', color: '#6D28D9', startPosition: { x: '30%', y: '20%' } },
  ];

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background floating balls */}
      {isLoaded && balls.map((ball, index) => (
        <FloatingBall key={index} {...ball} />
      ))}

      <div className="w-full max-w-5xl mx-auto px-4 text-center z-10 relative">
        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="w-52 h-52 mx-auto rounded-full border-4 border-primary overflow-hidden shadow-lg shadow-primary/20">
            {/* Add your image here */}
            <img
              src="/headshot.jpeg" // Add your image path here
              alt="Aniket Biswal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name with character-by-character animation */}
        <div className="overflow-hidden mb-5">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold inline-flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
          >
            {"Aniket Biswal".split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textVariants}
                className={char === ' ' ? 'mr-4' : ''}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Title with staggered words */}
        <div className="overflow-hidden mb-10">
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 inline-flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
          >
            {"Student > Developer > Solver".split(' ').map((word, index) => (
              <motion.span
                key={index}
                custom={index + 13} // Start after name animation
                variants={textVariants}
                className="mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Animated underline */}
        <motion.div
          className="h-px bg-primary w-0 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ duration: 0.8, delay: 1.3 }}
        />

        {/* Bio with sentence animation */}
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Hi, I'm Aniket! I'm a junior at Purdue University with a triple major in Computer Science, Data Science, and Mathematics. Use the menu to check out my experiences, projects, and credentials!
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex justify-center space-x-8"
        >
          {/* Each social icon with its own animation */}
          {[
            { href: "https://linkedin.com/in/aniketbiswal", icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://github.com/biswal22", icon: FaGithub, label: "GitHub" },
            { href: "mailto:biswal@purdue.edu", icon: FaEnvelope, label: "Contact" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.7 + (index * 0.1) }}
              whileHover={{ scale: 1.2 }}
            >
              <social.icon className="w-9 h-9" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
