
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
            Education & <span className="text-cyan-500">Path</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />

                {/* Content */}
                <div className={`w-full md:w-[45%] p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <Calendar size={12} />
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{item.title}</h3>
                  <div className="text-cyan-400 font-medium mb-3 flex items-center gap-2 justify-start md:justify-inherit">
                    <GraduationCap size={18} className={idx % 2 === 0 ? 'md:order-last' : ''} />
                    {item.institution}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block w-[10%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
