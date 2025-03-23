import { useState } from 'react';
import { motion } from 'framer-motion';

const allProjects = [
  { title: 'Expense Tracker', category: 'Farm Stack', description: 'Track expenses & manage budget.', link: '#', image: '/expense-tracker.png' },
  { title: 'Green Thumb', category: 'Farm Stack', description: 'Connect with local gardeners.', link: '#', image: '/green-thumb.png' },
  { title: 'BookStation', category: 'Frontend', description: 'A clean book-selling website.', link: '#', image: '/bookstation.png' },
  { title: 'Task Master', category: 'Farm Stack', description: 'Manage your tasks efficiently.', link: '#', image: '/task-master.png' },
  { title: 'Portfolio', category: 'Frontend', description: 'Showcase your work with style.', link: '#', image: '/portfolio.png' },
];

const categories = ['All', 'Frontend', 'Farm Stack'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#121212] text-white py-20 px-6 relative overflow-hidden">
      
      {/* Animated Floating Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-20"
        animate={{ x: [0, 20, -20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20"
        animate={{ x: [0, -20, 20, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-blue-500">Projects</span>
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center my-8 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border transition duration-300 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'text-gray-300 border-gray-600'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>
            <motion.a
              href={project.link}
              className="mt-4 inline-block text-blue-500 font-bold"
              whileHover={{ scale: 1.1 }}
            >
              View Project →
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.a
        href="/contact"
        className="mt-16 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Contact Me
      </motion.a>
    </section>
  );
};

export default Projects;
