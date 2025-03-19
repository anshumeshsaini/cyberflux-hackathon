
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';
import DigitalRain from '@/components/DigitalRain';

const Index = () => {
  console.log("Index component rendering");
  
  // Add scan line effect to body
  useEffect(() => {
    console.log("Creating scan line effect");
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);
    
    return () => {
      document.body.removeChild(scanLine);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-x-hidden w-full">
      {/* Digital Rain Matrix Effect */}
      <DigitalRain />
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <EventDetails />
        <Registration />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
