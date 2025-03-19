
import React from 'react';
import GlitchText from './GlitchText';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker/80 border-t border-cyber-cyan/20 py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <GlitchText 
              text="INTRUSION_X" 
              as="div" 
              className="text-cyber-cyan font-cyber text-2xl mb-2" 
              glitchOnHover
            />
            <p className="text-white/50 font-mono text-sm max-w-xs">
              The ultimate cyber hacking experience. Break the system. Shape the future.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8 md:mb-0">
            <a href="#event" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              EVENT_DETAILS
            </a>
            <a href="#register" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              REGISTRATION
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              RULES
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              PRIZES
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              PROFILES
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan text-sm font-mono transition-colors">
              CONTACT
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-cyan/10 mt-8 pt-8 text-center">
          <p className="text-white/40 font-mono text-xs">
            &copy; 2025 INTRUSION_X. All rights reserved. <span className="text-cyber-cyan/40">SYSTEM VERSION 2.5.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
