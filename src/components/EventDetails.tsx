
import React, { useState, useEffect } from 'react';
import HolographicCard from './HolographicCard';
import GlitchText from './GlitchText';
import { CalendarDays, MapPin, Clock, Users, Globe, Target } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="glassmorphism px-4 py-2 min-w-[80px] font-mono border border-cyber-cyan/30 text-3xl text-cyber-cyan animate-pulse-glow">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-white/60 uppercase text-xs mt-2">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const EventDetails: React.FC = () => {
  // Event details
  const eventInfo = {
    date: "March 15-17, 2025",
    location: "Cyber Nexus Hub, Neo Tokyo",
    time: "48-hour hackathon",
    participants: "Teams of 1-4 hackers",
    format: "Hybrid (In-person & Virtual)",
    theme: "Security & AI Integration",
    targetDate: new Date('2025-03-15T00:00:00')
  };

  // Schedule items
  const scheduleItems = [
    { day: "Day 1", time: "09:00", event: "Opening Ceremony" },
    { day: "Day 1", time: "10:00", event: "Team Formation" },
    { day: "Day 1", time: "12:00", event: "Hacking Begins" },
    { day: "Day 1", time: "18:00", event: "Mentor Sessions" },
    { day: "Day 2", time: "09:00", event: "Progress Check-in" },
    { day: "Day 2", time: "14:00", event: "Workshop: Advanced AI Security" },
    { day: "Day 2", time: "20:00", event: "Gaming Break" },
    { day: "Day 3", time: "10:00", event: "Submission Deadline" },
    { day: "Day 3", time: "13:00", event: "Presentations" },
    { day: "Day 3", time: "16:00", event: "Awards Ceremony" }
  ];

  return (
    <section id="event" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <GlitchText 
            text="EVENT_DETAILS" 
            as="h2" 
            className="text-4xl md:text-5xl font-cyber text-cyber-cyan mb-4" 
          />
          <p className="text-white/70 font-mono max-w-2xl mx-auto">
            Access classified mission details. Prepare your team for the ultimate cyber challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Event Info Card */}
          <HolographicCard className="p-6 md:p-8 h-full">
            <h3 className="text-2xl font-cyber text-cyber-cyan mb-6">MISSION BRIEFING</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <CalendarDays className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Date</div>
                  <div className="text-white font-mono">{eventInfo.date}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white font-mono">{eventInfo.location}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Duration</div>
                  <div className="text-white font-mono">{eventInfo.time}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Team Size</div>
                  <div className="text-white font-mono">{eventInfo.participants}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Format</div>
                  <div className="text-white font-mono">{eventInfo.format}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Target className="text-cyber-cyan mr-4" size={24} />
                <div>
                  <div className="text-white/60 text-sm">Theme</div>
                  <div className="text-white font-mono">{eventInfo.theme}</div>
                </div>
              </div>
            </div>
          </HolographicCard>

          {/* Schedule Card */}
          <div className="flex flex-col">
            <HolographicCard className="p-6 md:p-8 mb-8 flex-grow">
              <h3 className="text-2xl font-cyber text-cyber-cyan mb-6">OPERATION TIMELINE</h3>
              
              <div className="h-[300px] overflow-y-auto pr-2 space-y-3">
                {scheduleItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex border-b border-cyber-cyan/20 pb-2"
                  >
                    <div className="w-20 text-cyber-cyan font-mono text-sm">
                      {item.time}
                    </div>
                    <div className="w-20 text-white/60 font-mono text-sm">
                      {item.day}
                    </div>
                    <div className="flex-grow text-white font-mono text-sm">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </HolographicCard>
            
            {/* Countdown Timer */}
            <HolographicCard 
              className="p-6 md:p-8 text-center" 
              glowColor="cyber-pink"
            >
              <h3 className="text-xl font-cyber text-cyber-pink mb-4">COUNTDOWN TO BREACH</h3>
              <Countdown targetDate={eventInfo.targetDate} />
            </HolographicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
