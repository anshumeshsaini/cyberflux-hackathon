import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import TerminalText from './TerminalText';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const timer = setTimeout(() => setShowSubtitle(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 z-10">
            {/* Background grid */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(#0AFFFF 1px, transparent 1px), linear-gradient(90deg, #0AFFFF 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center',
                    transform: 'rotateX(60deg) translateY(100px) scale(1.5)'
                }}
            />

            {/* Radial overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyber-cyan/5 via-cyber-black to-cyber-black" />

            {/* Main content */}
            <div className="relative z-10 text-center transition-all duration-1000 transform max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Smaller lead text */}
                    <div className="mb-3 text-cyber-cyan/80 text-lg md:text-xl font-mono uppercase tracking-widest">
                        <TerminalText text="INITIATING SEQUENCE... CONNECTED" delay={300} />
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-cyber mb-6 font-bold tracking-wider">
                        <GlitchText text="INTRUSION" as="span" className="text-cyber-cyan inline-block" delay={1000} intensity="high" />
                        <GlitchText text="X" as="span" className="text-cyber-pink inline-block" delay={1500} intensity="high" />
                        <GlitchText text=" 2025" as="span" className="text-white inline-block" delay={1800} intensity="medium" />
                    </h1>

                    {/* Subtitle */}
                    {showSubtitle && (
                        <h2 className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 font-mono transition-all duration-500">
                            <TerminalText text="Are You Ready to Hack, Defend & Win?" speed={30} />
                        </h2>
                    )}

                    {/* Animated Event Details */}
                    <div className="text-lg md:text-xl text-center font-mono max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple animate-pulse">
                        <GlitchText
                            text="Join IntrusionX, a high-intensity cybersecurity hackathon, April 11-12, 2025, at GLA University, Mathura. Hack, Defend, Win & Earn Rewards!"
                            className="inline-block"
                            delay={500}
                            intensity="high"
                        />
                    </div>


                    {/* CSS for Color Animation */}

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                <a href="#event" className="text-cyber-cyan/50 hover:text-cyber-cyan animate-bounce transition-colors">
                    <ChevronDown size={36} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
