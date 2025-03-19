
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';
import DigitalRain from '@/components/DigitalRain';

const Index = () => {
  // Add scan line effect to body
  useEffect(() => {
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);
    
    return () => {
      document.body.removeChild(scanLine);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative">
      {/* Digital Rain Matrix Effect */}
      <DigitalRain />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <EventDetails />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
