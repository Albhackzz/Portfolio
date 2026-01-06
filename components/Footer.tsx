
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-montserrat font-extrabold tracking-tighter">
          <span className="text-cyan-500">Albin</span>Thomas
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Albin Thomas. All rights reserved. 
          <span className="mx-2">|</span> 
          Built with React & Tailwind CSS
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
