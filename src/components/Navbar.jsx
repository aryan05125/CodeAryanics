import { useState } from 'react';
import { Home, Info, Folder, BookOpen, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home /> },
    { name: 'About', path: '/about', icon: <Info /> },
    { name: 'Projects', path: '/projects', icon: <Folder /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen /> },
    { name: 'Contact', path: '/contact', icon: <Mail /> },
  ];

  return (
    <motion.nav
      className="bg-[#121212] text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-[9999]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">CodeAryanics</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2"
          >
            {item.icon}
            <Link to={item.path} className="hover:text-blue-400">{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu with AnimatePresence for Smooth Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#121212] p-4 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  {item.icon}
                  <Link
                    to={item.path}
                    className="hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
