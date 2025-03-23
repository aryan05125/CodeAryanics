import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, Mail, PhoneCall, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-6">

      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact <span className="text-blue-500">Me</span>
      </motion.h1>

      {/* Responsive Contact Info Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-lg mt-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-sm sm:text-base">Name: Aryan Chauhan</p>
          <p className="text-sm sm:text-base">Phone: +9409647292</p>
          <p className="text-sm sm:text-base">Email: aryanchauhan144512@gmail.com</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="mt-10 space-y-6">
        {/* Name */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <MapPin size={28} className="text-blue-500" />
          <p className="text-lg">Aryan Chauhan</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <PhoneCall size={28} className="text-blue-500" />
          <p className="text-lg">+9409647292</p>
        </motion.div>

        {/* Email */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Mail size={28} className="text-blue-500" />
          <p className="text-lg">aryanchauhan144512@gmail.com</p>
        </motion.div>
      </div>

      {/* Form Section */}
      <motion.form
        className="w-full max-w-lg mt-10 bg-[#1E1E1E] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Name Field */}
        <label className="block mb-4">
          <span className="text-gray-400">Your Name</span>
          <motion.input
            type="text"
            className="w-full mt-2 p-3 bg-[#2E2E2E] rounded-lg"
            whileFocus={{ scale: 1.02 }}
          />
        </label>

        {/* Email Field */}
        <label className="block mb-4">
          <span className="text-gray-400">Your Email</span>
          <motion.input
            type="email"
            className="w-full mt-2 p-3 bg-[#2E2E2E] rounded-lg"
            whileFocus={{ scale: 1.02 }}
          />
        </label>

        {/* Message Field */}
        <label className="block mb-6">
          <span className="text-gray-400">Your Message</span>
          <motion.textarea
            className="w-full mt-2 p-3 bg-[#2E2E2E] rounded-lg h-32"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
        </label>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-8">
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
    </section>
  );
};

export default Contact;
