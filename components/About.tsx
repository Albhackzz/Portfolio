
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Done', value: '4', icon: Briefcase, color: 'text-cyan-500' },
    { label: 'Technologies', value: '7+', icon: Code2, color: 'text-purple-500' },
    { label: 'Learning Years', value: '5+', icon: GraduationCap, color: 'text-blue-500' },
  ];

  return (
    <div className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden relative z-10 border-4 border-cyan-500/20 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://picsum.photos/seed/albin/800/800" alt="Albin Thomas" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 border-2 border-cyan-500/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5]"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-8">
              Passion for <span className="text-cyan-500">AI</span> & <span className="text-purple-500">Development</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am an MCA student at Nirmala College, deeply passionate about building intelligent systems and robust full-stack applications. My journey is driven by a strong focus on Full-Stack Web and Mobile Application Development, mastering tools like PHP, Flutter, and Python.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              I specialize in delivering functional, end-to-end projects, from secure web platforms to mobile e-commerce solutions. My academic record and practical skills enable me to build production-ready systems that prioritize user experience and efficient logic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
                >
                  <div className={`mb-3 flex justify-center ${stat.color}`}>
                    <stat.icon size={28} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
