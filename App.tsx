
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowFab(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white selection:bg-cyan-500/30">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-500 font-mono tracking-widest uppercase text-sm"
              >
                Initializing Portfolio...
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="experience">
              <Timeline />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />

            {/* Floating Action Button */}
            <AnimatePresence>
              {showFab && (
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-cyan-500 text-black rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 cursor-pointer"
                >
                  <MessageSquare size={24} />
                </motion.a>
              )}
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
