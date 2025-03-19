
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlitchText from './GlitchText';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Event', href: '#event' },
    { name: 'Register', href: '#register' },
    { name: 'Rules', href: '#rules' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Profiles', href: '#profiles' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-black/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-cyber-cyan font-cyber text-xl lg:text-2xl tracking-wider">
          <GlitchText text="INTRUSION_X" glitchOnHover />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-cyber-cyan transition-colors duration-300 text-sm uppercase tracking-widest"
            >
              [{item.name}]
            </a>
          ))}
          <a 
            href="#register" 
            className="cyber-button text-sm uppercase tracking-widest"
          >
            Enter_Grid
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-cyber-cyan hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg transition-all duration-300 glassmorphism overflow-hidden ${
          isOpen ? 'max-h-screen py-4 border-t border-cyber-cyan/30' : 'max-h-0 py-0 border-t-0'
        }`}
      >
        <div className="container px-4 mx-auto flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-cyber-cyan transition-colors py-2 text-sm uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              [{item.name}]
            </a>
          ))}
          <a 
            href="#register" 
            className="cyber-button text-sm uppercase tracking-widest mx-auto block w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Enter_Grid
          </a>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="scan-line" />
    </nav>
  );
};

export default Navbar;
