import { motion } from 'framer-motion';

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Python', 'MongoDB', 'FastAPI'];

  return (
    <section className="min-h-screen bg-[#1E1E1E] text-white flex flex-col justify-center items-center text-center px-6">
      {/* About Section */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-blue-500">CodeAryanics</span>
      </motion.h1>

      <motion.p
        className="text-lg mt-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        CodeAryanics is a platform where creativity meets technology. With expertise in frontend and backend development, I strive to build exceptional web experiences.
      </motion.p>

      {/* Education Section */}
      <h2 className="text-3xl font-semibold mt-12">Education</h2>
      <p>Bachelor of Computer Engineering, GTU</p>

      {/* Experience Section */}
      <h2 className="text-3xl font-semibold mt-12">Experience</h2>
      <ul>
        <li>Full Stack Developer - Intership (Python, MongoDB, React.js(Vite))</li>
        <li>Farm Stack Developer</li>
      </ul>

      {/* Skills Section */}
      <h2 className="text-3xl font-semibold mt-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Resume Button */}
      <motion.a
        href="/resume.jpg" // Adjust with your actual resume path
        className="mt-12 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View Resume
      </motion.a>
    </section>
  );
};

export default About;
