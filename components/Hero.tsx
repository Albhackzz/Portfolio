
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const titles = ["AI Engineer", "Full-Stack Developer", "MCA Student"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20">
            Welcome to my digital space
          </span>
          <h1 className="text-5xl md:text-8xl font-montserrat font-extrabold mb-6 tracking-tight leading-none">
            I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Albin Thomas</span>
          </h1>

          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide"
              >
                {titles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg md:text-xl leading-relaxed">
            Building intelligent, scalable, and real-world applications with AI & modern technologies.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg flex items-center gap-2 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              Download Resume <Download size={20} />
            </motion.button>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8">
            <a href="https://github.com/Albhackzz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/albin-thomas-86594a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:albin3948@gmail.com" className="text-gray-500 hover:text-cyan-500 transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
