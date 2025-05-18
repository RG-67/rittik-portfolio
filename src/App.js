import React from 'react';
import { motion } from 'framer-motion';
import '@fontsource/orbitron'; // Futuristic font
import '@fontsource/inter'; // Clean modern body font

const Card = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgb(0,255,255,0.1)] hover:shadow-[0_0_30px_#00ffff55] transition duration-300"
  >
    <h3 className="text-xl font-bold text-neonBlue mb-2 font-futuristic">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={`View ${title} project`}
      className="inline-block mt-4 text-sm font-medium text-black bg-neonBlue hover:bg-cyan-300 px-4 py-2 rounded-lg transition"
    >
      🚀 View Project
    </a>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] text-white font-body px-6 md:px-20">
      {/* Nav */}
      <nav className="mb-12 flex justify-between items-center border-b border-white/10 pb-6 pt-6">
        <h1 className="text-3xl text-neonBlue font-futuristic">Rittik Ghosh</h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#about" title="About Section" className="text-gray-300 hover:text-neonBlue">About</a>
          <a href="#projects" title="Projects Section" className="text-gray-300 hover:text-neonBlue">Projects</a>
          <a href="#contact" title="Contact Section" className="text-gray-300 hover:text-neonBlue">Contact</a>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-neonPurple mb-4 font-futuristic"
        >
          Hi, I'm Rittik 👨‍💻
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-400">
          Full Stack Developer | Node.js | React Native | PostgreSQL | Android
        </p>
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          {['Node.js', 'React Native', 'PostgreSQL', 'Android'].map((tech) => (
            <span key={tech} className="bg-neonBlue text-black rounded-full px-2 py-1 text-xs font-bold">
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1hD1E61LUHdbBNuuOmoBih0Bd8AqNvTDr"
          download
          title="Download Resume PDF"
          className="inline-block mt-6 text-black bg-neonGreen hover:bg-green-300 px-6 py-2 rounded-lg font-medium shadow-lg"
        >
          📄 Download Resume
        </a>
      </header>

      {/* About */}
      <motion.section
        id="about"
        className="text-center mb-24 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-neonGreen mb-4 font-futuristic">About Me</h3>
        <p className="text-gray-300 leading-loose">
          I’m a passionate full stack developer focused on building performant, user-friendly apps that solve real-world problems. I specialize in Node.js, PostgreSQL, React Native, and Android Development.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-neonPurple text-center mb-12 font-futuristic">Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <Card
            title="Memozen App"
            description="A team collaboration app with real-time chat and task management using PostgreSQL and React Native."
            link="https://github.com/RG-67/memozen"
          />
          <Card
            title="Notes App"
            description="Notes app with advanced reminder logic, built using Room DB, FCM, Dagger-Hilt, MVVM, and Coroutines."
            link="https://github.com/RG-67/Notes-App"
          />
          <Card
            title="WHClone"
            description="A WhatsApp clone with real-time messaging and media, built using Socket.io and PostgreSQL."
            link="https://github.com/RG-67/WHClone"
          />
          <Card
            title="VidMeet 2.0"
            description="A video calling app using WebRTC with a sleek UI and room creation features."
            link="https://github.com/RG-67/VidMeet2.0"
          />
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-neonBlue mb-6 font-futuristic">Contact</h3>
        <p className="text-gray-400 mb-2">📧 Email: <a href="mailto:rittikghoshkolkata@email.com" className="text-neonGreen hover:underline">rittikghoshkolkata@email.com</a></p>
        <p className="text-gray-400 mb-2">💻 GitHub: <a href="https://github.com/RG-67" className="text-neonGreen hover:underline">RG-67</a></p>
        <p className="text-gray-400">🔗 LinkedIn: <a href="https://www.linkedin.com/in/devrtk/" className="text-neonGreen hover:underline">devrtk</a></p>
      </motion.section>

      {/* Footer */}
      <footer className="mt-24 pb-6 text-center text-gray-500 text-sm">
        © 2025 Rittik Ghosh. Built with 💻 React & Tailwind.
      </footer>

    </div>
  );
}

export default App;