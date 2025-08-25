import React, { useState, useEffect } from 'react';
import { 
    Mail, Github, Menu, X, ArrowRight, Code, Server, Database, Smartphone, GitBranch, 
    Wind, Frame, Box, Share2, ServerCog, Coffee, Target, Container, Terminal, Send, Triangle,
    FileJson, FileCode2, Cpu, Bot, Layers, ExternalLink
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiDart,
  SiPostman,
  SiLinux
} from "react-icons/si";
import { FaJava, FaLaptopCode, FaProjectDiagram, FaGlobe, FaCoffee} from "react-icons/fa";
// Smooth scroll utility
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollTo(id.substring(1));
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-700' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => {e.preventDefault(); scrollTo('hero')}} className="text-2xl font-bold text-white tracking-wider">
            Ananmay Mukherjee
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-900/90 backdrop-blur-lg`}>
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-center py-2">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
    <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="container mx-auto px-6 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
            <img src="https://placehold.co/176x176/0F172A/67E8F9?text=AM" alt="Ananmay Mukherjee" className="rounded-full w-full h-full object-cover border-4 border-gray-700 shadow-lg"/>
            <div className="absolute inset-0 rounded-full ring-4 ring-cyan-400/50 animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Ananmay Mukherjee
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Aspiring Software Developer with a passion for building innovative solutions and exploring new technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="mailto:getananmay@gmail.com" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-cyan-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-700 shadow-lg w-full sm:w-auto">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative flex items-center"><Mail className="mr-2 h-5 w-5" /> Contact Me</span>
          </a>
          <a href="https://github.com/Yaman-2005" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700 border border-gray-600 shadow-lg w-full sm:w-auto">
             <span className="relative flex items-center"><Github className="mr-2 h-5 w-5" /> GitHub</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// About Section Component
const stats = [
  { icon: <FaLaptopCode size={40} />, label: "DSA Problems Solved", value: "50+" },
  { icon: <FaProjectDiagram size={40} />, label: "Projects Built", value: "10+" },
  { icon: <FaGlobe size={40} />, label: "Languages Learnt", value: "20+" },
  { icon: <FaCoffee size={40} />, label: "Cups of Coffee", value: "1000+" },
];

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">About Me (Fun Facts)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-cyan-400 mb-4">{stat.icon}</div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Skills Section Component
const TechLogo = ({ path, color, name }) => (
  <motion.div
    className="group relative flex flex-col items-center justify-center bg-gray-800/40 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
    whileHover={{ scale: 1.08, rotate: 3 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-12 h-12"
      fill={color}
      dangerouslySetInnerHTML={{ __html: path }}
    />
    <span className="absolute bottom-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </motion.div>
);


// --- Skills Section Component ---

const skillsData = {
  Frontend: [
    { icon: <SiJavascript color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },
    { icon: <SiReact color="#61dafb" />, name: "React" },
    { icon: <SiNextdotjs color="#ffffff" />, name: "Next.js" },
    { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <SiFigma color="#a259ff" />, name: "Figma" },
  ],
  Backend: [
    { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
    { icon: <SiExpress color="#ffffff" />, name: "Express" },
    { icon: <SiPython color="#3776ab" />, name: "Python" },
    { icon: <SiDjango color="#00fc9bff" />, name: "Django" },
  ],
  Mobile: [
    { icon: <SiFlutter color="#02569b" />, name: "Flutter" },
    { icon: <SiDart color="#0175c2" />, name: "Dart" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
  ],
  Databases: [
    { icon: <SiMongodb color="#47a248" />, name: "MongoDB" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  ],
  Tools: [
    { icon: <SiDocker color="#2496ed" />, name: "Docker" },
    { icon: <SiGit color="#f05032" />, name: "Git" },
    { icon: <SiPostman color="#ff6c37" />, name: "Postman" },
    { icon: <SiLinux color="#f0f0f0" />, name: "Linux" },
  ],

};

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills</h2>

        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <p className="text-lg font-medium text-gray-200">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




// Projects Section Component
const projectsData = [
  {
    title: 'DataCT',
    description: 'A stats website that displays and graphs various statistics of VALORANT players, loaded from a custom SQLite database.',
    tags: ['Python', 'Flask', 'matplotlib'],
    image: '/datact.png', // Placeholder path
    link: 'https://github.com/Yaman-2005/DataCT',
    deploymentUrl: 'https://prlfive.pythonanywhere.com/', // Example URL
    accentColor: 'cyan'
  },
  {
    title: 'GreenBook',
    description: 'A mobile password manager application that stores encrypted passwords in a MongoDB database and supports user authentication.',
    tags: ['Dart', 'Flutter', 'MongoDB'],
    image: '/greenbook.jpg', // Placeholder path
    link: 'https://github.com/Yaman-2005/Green-book',
    deploymentUrl: null, // No deployment link for this one
    accentColor: 'emerald'
  },
  {
    title: 'E-Waste Portal',
    description: 'A smart auction-based management portal for tracking, updating and managing E-Waste, with AI tools for large corporations.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/e-waste.png', // Placeholder path
    link: 'https://github.com/deepakmani2027/hackathon-project',
    deploymentUrl: 'https://e-waste-management-portal.vercel.app/', // Example URL
    accentColor: 'violet'
  },
];

const ProjectScreenshotMarquee = () => (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] mb-20">
    <div className="flex animate-scroll group-hover:pause">
            {[...projectsData, ...projectsData].map((project, index) => (
                <div 
          key={index} 
          className="flex-shrink-0 w-[600px] h-[340px] mx-5 overflow-hidden rounded-2xl border-2 border-gray-700 shadow-lg"
        >
                    <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`} 
                        className="rounded-2xl border-2 border-gray-700 shadow-lg object-cover w-full"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x450/0F172A/1E293B?text=Image+Not+Found'; }}
                    />
                </div>
            ))}
        </div>
    </div>
);

const ProjectCard = ({ project }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div 
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="bg-gray-800/50 rounded-2xl border border-gray-700 shadow-lg overflow-hidden"
        >
            <img 
                src={project.image} 
                alt={`${project.title} Project`} 
                className="w-full h-56 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/0F172A/${project.accentColor}?text=${project.title}`; }}
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-24 overflow-hidden">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className={`inline-block bg-${project.accentColor}-900/50 text-${project.accentColor}-300 text-xs font-semibold px-3 py-1 rounded-full`}>{tag}</span>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`font-semibold text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center`}>
                        <Github className="mr-2 w-4 h-4" />
                        GitHub
                    </a>
                    {project.deploymentUrl && (
                        <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer" className={`font-semibold text-${project.accentColor}-400 hover:text-${project.accentColor}-300 transition-colors duration-300 inline-flex items-center`}>
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => (
  <section id="projects" className="py-24 bg-gray-900">
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Featured Projects</h2>
      </div>
      <ProjectScreenshotMarquee />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  </section>
);


// Contact Section Component
const Contact = () => (
  <section id="contact" className="py-24 bg-gray-900/50">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-8">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:getananmay@gmail.com" className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-cyan-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-700 shadow-lg shadow-cyan-500/20">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Say Hello</span>
        </a>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-700">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Ananmay Mukherjee. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com/ananmay-m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="mailto:getananmay@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 60s linear infinite;
      }
      .group:hover .pause {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
