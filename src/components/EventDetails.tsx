import React, { useState, useEffect } from 'react';
import HolographicCard from './HolographicCard';
import GlitchText from './GlitchText';
import { CalendarDays, MapPin, Clock, Globe } from 'lucide-react';
import logo from './logo.png';
import './LogoShineEffect.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="glassmorphism px-4 py-2 min-w-[80px] text-3xl text-cyber-cyan animate-pulse-glow">{value.toString().padStart(2, '0')}</div>
              <div className="text-white/60 uppercase text-xs mt-2">{unit}</div>
            </div>
        ))}
      </div>
  );
};

const EventDetails = () => {
  const eventInfo = {
    date: "April 11-12, 2025",
    location: "GLA University, Mathura",
    time: "36-hour hackathon",
    format: "Hybrid (In-person & Virtual)",
    targetDate: new Date('2025-04-11T00:00:00')
  };

  const scheduleItems = [
    { time: "20/03/25", event: "Registrations Open" },
    { time: "24/03/25", event: "PPT Submission" },
    { time: "05/04/25", event: "Idea Pitch (Online)" },
    { time: "11/04/25", event: "Final Hackathon (Offline)" }
  ];

  return (
      <section id="event" className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <GlitchText text="EVENT DETAILS" as="h2" className="text-4xl md:text-5xl text-cyber-cyan mb-4" />
            <p className="text-white/70 font-mono max-w-2xl mx-auto">Access classified mission details. Prepare your team for the ultimate cyber challenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <HolographicCard className="p-8 flex justify-center items-center">
              <img src={logo} alt="Event Poster" className="w-full max-w-md" />
            </HolographicCard>

            <HolographicCard className="p-8">
              <h3 className="text-2xl text-cyber-cyan mb-6">OPERATION TIMELINE</h3>
              <div className="space-y-3">
                {scheduleItems.map((item, index) => (
                    <div key={index} className="flex border-b border-cyber-cyan/20 pb-2">
                      <div className="w-24 text-cyber-cyan font-mono text-sm">{item.time}</div>
                      <div className="flex-grow text-white font-mono text-sm">{item.event}</div>
                    </div>
                ))}
              </div>
            </HolographicCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <HolographicCard className="p-8 h-full">
              <h3 className="text-2xl text-cyber-cyan mb-6">MISSION BRIEFING</h3>
              <div className="space-y-6">
                {[{ icon: CalendarDays, label: "Date", value: eventInfo.date },
                  { icon: MapPin, label: "Location", value: eventInfo.location },
                  { icon: Clock, label: "Duration", value: eventInfo.time },
                  { icon: Globe, label: "Format", value: eventInfo.format }].map((info, idx) => (
                    <div key={idx} className="flex items-center">
                      <info.icon className="text-cyber-cyan mr-4" size={24} />
                      <div>
                        <div className="text-white/60 text-sm">{info.label}</div>
                        <div className="text-white font-mono">{info.value}</div>
                      </div>
                    </div>
                ))}
              </div>
            </HolographicCard>

            <div className="flex flex-col space-y-6">
              <HolographicCard className="p-8 text-center" glowColor="cyber-pink">
                <h3 className="text-xl text-cyber-pink mb-4">COUNTDOWN TO BREACH</h3>
                <Countdown targetDate={eventInfo.targetDate} />
              </HolographicCard>
              <HolographicCard className="p-8">
                <h3 className="text-2xl text-cyber-cyan mb-6">Have Questions? Contact Us!</h3>
                <p className="text-white/70 font-mono">Email: support@cyberonites.com</p>
                <div className="mt-4 text-white font-mono">
                  <p className="text-cyber-cyan">Event Coordinators:</p>
                  <p>Nitin Sikarwar – +91 9548514037</p>
                  <p>Sumit Kumar – +91 9631090422</p>
                  <p>Radha Goel – Godawari Hostel, Room No. 228</p>
                </div>
              </HolographicCard>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EventDetails;
