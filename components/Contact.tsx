
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Loader2, CheckCircle, Copy, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('albin3948@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/albin3948@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || "Failed to send message. Please try again later.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage(error.message || "Something went wrong. Please check your connection.");
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
              Let's <span className="text-cyan-500">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Have a project in mind or just want to chat? Reach out directly via the form or through my social channels. I'll get back to you as soon as possible!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-medium">albin3948@gmail.com</p>
                    <button 
                      onClick={copyToClipboard}
                      className="text-gray-500 hover:text-cyan-500 p-1 transition-colors"
                      title="Copy Email"
                    >
                      {copied ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Mobile</p>
                  <p className="text-white font-medium">7306468867</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-left">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/Albhackzz' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/albin-thomas-86594a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-500 hover:border-cyan-500/50 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form 
              onSubmit={handleFormSubmit}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div className="text-left">
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: status === 'idle' || status === 'error' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' || status === 'error' ? 0.98 : 1 }}
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 font-bold transition-all ${
                    status === 'success' ? 'bg-green-600 text-white cursor-default' : 
                    status === 'error' ? 'bg-red-500 text-white hover:bg-red-400' :
                    'bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-70'
                  }`}
                >
                  {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
                  {status === 'success' && (
                    <>
                      <CheckCircle size={20} /> Message Sent!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={20} /> Try Again
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4"
                    >
                      <p className="text-green-400 text-sm text-center font-medium">
                        Success! Please check your email (<b>albin3948@gmail.com</b>) and <b>Spam folder</b>. 
                        <br/><span className="text-xs opacity-80 mt-1 block">If this is the first time, you MUST click the activation link from FormSubmit to receive messages.</span>
                      </p>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mt-4"
                    >
                      <p className="text-red-400 text-sm text-center font-medium">
                        {errorMessage}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <p className="text-gray-600 text-[10px] text-center mt-4">
                  Secured by FormSubmit API • End-to-End Encrypted
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
