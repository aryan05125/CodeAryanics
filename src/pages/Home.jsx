import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Home = () => {
  return (
    <section className="h-screen bg-[#121212] text-white flex flex-col justify-center items-center text-center px-6">
      
      {/* Title with Animation and Responsive */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to CodeAryanics
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.h2
        className="text-3xl font-semibold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I am a{' '}
        <span className="text-blue-500">
          <Typewriter
            words={['Frontend Developer', 'Full Stack Engineer', 'Creative Designer']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </motion.h2>

      {/* Hero Image with Responsive */}
      <motion.img
        src="/hero.png"
        alt="Hero"
        className="w-72 sm:w-80 md:w-96 lg:w-[400px] mt-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-6">
        {[Instagram, Twitter, Linkedin, Github].map((Icon, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-500"
          >
            <Icon size={32} />
          </motion.a>
        ))}
      </div>

      {/* Call to Action (CTA) */}
      <motion.a
        href="/projects"
        className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore My Projects
      </motion.a>
    </section>
  );
};

export default Home;
