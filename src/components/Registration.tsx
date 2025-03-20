import React, { useState } from 'react';
import HolographicCard from './HolographicCard';
import GlitchText from './GlitchText';
import TerminalText from './TerminalText';
import { motion } from 'framer-motion';

const Registration: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  return (
      <section id="why-join" className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <GlitchText
                text="WHY  INTRUSION X?"
                as="h2"
                className="text-4xl md:text-5xl font-cyber text-cyber-green mb-4"
            />
            <p className="text-white/70 font-mono max-w-2xl mx-auto">
              Unlock your full potential. Experience the thrill of cybersecurity, innovation, and hacking challenges like never before.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <HolographicCard className="p-6 md:p-8" glowColor="cyber-green">
              <div className="mb-6">
                <TerminalText
                    text=">

Join IntrusionX – Where the Best Minds in Cybersecurity Compete!"
                    className="text-cyber-green text-sm"
                />
              </div>

              <ul className="text-white/70 font-mono space-y-4">
                <li><span className="text-cyber-cyan">> Hands-on Experience – Solve live cybersecurity challenges.</span> </li>
                <li><span className="text-cyber-cyan">> For All Skill Levels – Open to beginners & experts.</span> </li>
                <li><span className="text-cyber-cyan">> Exciting Prizes & Recognition – Win certificates, cash prizes & career opportunities.</span> </li>
                <li><span className="text-cyber-cyan">> Expert Workshops – Learn from top cybersecurity professionals. </span> </li>
                <li><span className="text-cyber-cyan">> Networking & Growth – Connect with industry leaders & like-minded peers. </span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <button
                    className="cyber-button relative font-mono px-12 py-4 text-lg font-bold"
                    onClick={() => setShowIframe(true)}
                >
                  What to Expect at IntrusionX
                </button>
              </div>
            </HolographicCard>
          </div>
        </div>

        {showIframe && (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-md z-50"
            >
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl border border-cyber-green w-11/12 max-w-4xl">
                <button
                    onClick={() => setShowIframe(false)}
                    className="absolute top-2 right-3 text-cyber-red font-bold text-xl"
                >
                  ✖
                </button>
                <iframe
                    srcDoc={`
                <html>
                  <head>
                    <style>
                      body { font-family: 'Courier New', monospace; background: black; color: #00ff00; padding: 20px; }
                      h2 { text-align: center; text-decoration: underline; }
                      p, li { margin: 10px 0; line-height: 1.5; }
                    </style>
                  </head>
                  <body>
                    <h2>What to Expect at IntrusionX Workshops & Learning Sessions</h2>
                    <ul>
                      <li>Participate in interactive sessions led by industry leaders.</li>
                      <li>Get hands-on experience with the latest cybersecurity tools and techniques.</li>
                      <li><strong>Cybersecurity Hackathon – The Ultimate Challenge!</strong></li>
                      <li>Solve real-world hacking simulations and security challenges.</li>
                      <li>Identify, exploit, and defend against vulnerabilities in live environments.</li>
                      <li>Develop cutting-edge security solutions under intense competition.</li>
                      <li><strong>For All Skill Levels</strong></li>
                      <li>New to cybersecurity? Learn from experts, participate, and grow!</li>
                      <li>Already experienced? Showcase your skills and compete at the highest level!</li>
                      <li><strong>Compete & Win Exciting Rewards</strong></li>
                      <li>Cash prizes, certificates, and industry recognition for top performers.</li>
                      <li>Exclusive opportunities to connect with leading cybersecurity firms.</li>
                      <li><strong>Network with Industry Experts & Like-Minded Enthusiasts</strong></li>
                      <li>Gain insights from top cybersecurity professionals through expert talks.</li>
                      <li>Expand your knowledge in penetration testing, malware analysis, and digital forensics.</li>
                      <li>Meet and collaborate with cybersecurity enthusiasts and professionals.</li>
                    </ul>
                  </body>
                </html>
              `}
                    className="w-full h-[400px] border-none rounded-md"
                />
              </div>
            </motion.div>
        )}
      </section>
  );
};

export default Registration;
