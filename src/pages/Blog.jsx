import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const categories = ['All', ...new Set(blogData.map((blog) => blog.category))];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredBlogs = selectedCategory === 'All'
    ? blogData
    : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#121212] text-white py-20 px-6">
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Latest <span className="text-blue-500">Blogs</span>
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-500' : 'bg-gray-800'}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog Cards - Existing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold mt-4">{blog.title}</h3>
            <p className="mt-2 text-gray-400">{blog.description}</p>
            <motion.a
              href={blog.link}
              className="mt-4 inline-block text-blue-500 font-bold"
              whileHover={{ scale: 1.1 }}
            >
              Read More →
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Blog Cards - New Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-sm mt-2">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
