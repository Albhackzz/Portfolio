
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
            Featured <span className="text-cyan-500">Work</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 rounded border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-gray-500">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    {project.role}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Github size={18} />
                      </a>
                    )}
                    <a href="#" className="p-2 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 transition-all">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 border border-white/10 rounded-full text-gray-300 font-semibold hover:bg-white/5 hover:border-cyan-500/50 transition-all">
            Browse More Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
