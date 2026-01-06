
import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Prep data for Radar Chart
  const radarData = SKILLS.filter(s => s.category === 'Language' || s.category === 'Web').map(s => ({ 
    subject: s.name, 
    level: s.level 
  }));
  
  const barData = SKILLS.map(s => ({ 
    name: s.name, 
    level: s.level, 
    color: s.category === 'Language' ? '#06b6d4' : s.category === 'Mobile' ? '#8b5cf6' : s.category === 'Database' ? '#3b82f6' : '#ec4899'
  }));

  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
            Technical <span className="text-cyan-500">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Visualizing my expertise across programming languages, web technologies, and mobile development.</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Left Column: Charts */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 aspect-[4/3] flex flex-col items-center justify-center relative group"
            >
              <h3 className="absolute top-6 left-6 text-sm font-bold text-gray-500 uppercase tracking-widest">Skill Ecosystem</h3>
              <ResponsiveContainer width="100%" height="90%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#999', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Level"
                    dataKey="level"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.5}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10"
            >
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Performance Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" stroke="#999" fontSize={12} tickLine={false} axisLine={false} width={80} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                    />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={12}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Progressive Bars */}
          <div className="space-y-10">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${
                      cat === 'Language' ? 'bg-cyan-500' : cat === 'Mobile' ? 'bg-purple-500' : cat === 'Database' ? 'bg-blue-500' : 'bg-pink-500'
                    }`} />
                    {cat}s
                  </h3>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Stack Category {idx + 1}</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-semibold text-sm group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                        <span className="text-cyan-500/50 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            cat === 'Language' ? 'from-cyan-500 to-blue-500' : 
                            cat === 'Mobile' ? 'from-purple-500 to-pink-500' : 
                            'from-blue-500 to-cyan-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* CTA in Skills */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-10 border-t border-white/5"
            >
              <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <p className="text-cyan-500 text-sm font-medium leading-relaxed">
                  "Continuous learning is the key to mastering AI. Currently exploring LLM fine-tuning and advanced computer vision architectures."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
