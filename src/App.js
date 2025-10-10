import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import "@fontsource/inter"; // Clean body font

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="rounded-xl border border-gray-800 bg-[#151515] p-6 shadow-md transition"
  >
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
    <div className="flex gap-3 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md transition"
      >
        <Github size={16} /> Code
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-blue-400 hover:underline"
      >
        <ExternalLink size={16} /> Live
      </a>
    </div>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-body px-6 md:px-20">
      {/* Navbar */}
      <nav className="py-6 mb-16 flex flex-col md:flex-row items-center md:justify-between border-b border-gray-800">
        <h1 className="text-2xl font-bold">Rittik Ghosh</h1>
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I’m Rittik 👨‍💻
        </motion.h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer | Node.js | React Native | PostgreSQL | Android
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1AzXbpRXFzYh8A6PUlLUYh1fsmCIaKcps"
          download
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition"
        >
          📄 Download Resume
        </a>
      </header>

      {/* About */}
      <section id="about" className="text-center mb-24 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I’m a full stack developer with 3+ years of Android experience, now focused
          on Node.js, React Native, and PostgreSQL. I love building scalable apps that
          solve real-world problems with clean and maintainable code.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-24">
        <h3 className="text-2xl font-semibold text-center mb-12">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Memozen App"
            description="Team collaboration app with chat and task management using PostgreSQL and React Native."
            link="https://github.com/RG-67/memozen"
          />
          <ProjectCard
            title="Notes App"
            description="Notes app with reminder logic, Room DB, FCM, Dagger-Hilt, MVVM, and Coroutines."
            link="https://github.com/RG-67/Notes-App"
          />
          <ProjectCard
            title="WHClone"
            description="WhatsApp clone with real-time messaging using Socket.io and PostgreSQL."
            link="https://github.com/RG-67/WHClone"
          />
          <ProjectCard
            title="VidMeet 2.0"
            description="Video calling app with WebRTC, room creation, and sleek UI."
            link="https://github.com/RG-67/VidMeet2.0"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center mb-24">
        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
        <div className="flex justify-center gap-8">
          <a href="mailto:rittikghoshkolkata@email.com" className="flex items-center gap-2 hover:text-blue-400">
            <Mail size={18}/> Email
          </a>
          <a href="https://github.com/RG-67" className="flex items-center gap-2 hover:text-blue-400">
            <Github size={18}/> GitHub
          </a>
          <a href="https://www.linkedin.com/in/devrtk/" className="flex items-center gap-2 hover:text-blue-400">
            <Linkedin size={18}/> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2025 Rittik Ghosh. Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
