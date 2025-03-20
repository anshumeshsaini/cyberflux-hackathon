import React, {useState} from 'react';
import GlitchText from './GlitchText'; // Ensure this path is correct
import {Github, Twitter, Linkedin} from 'lucide-react';

const Footer: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <footer className="bg-cyber-darker/80 border-t border-cyber-cyan/20 py-12 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Logo and tagline */}
                    <div className="mb-8 md:mb-0 text-center md:text-left w-full md:w-1/3">
                        <div onClick={() => setShowPopup(true)} className="cursor-pointer">
                            {/* FIXED: Added fallback for testing */}
                            {GlitchText ? (
                                <GlitchText
                                    text="INTRUSION_X"
                                    as="h1"
                                    className="text-cyber-cyan font-cyber text-4xl font-bold mb-2"
                                    glitchOnHover
                                />
                            ) : (
                                <h1 className="text-cyber-cyan font-cyber text-4xl font-bold">INTRUSION_X</h1>
                            )}
                        </div>
                        <p className="text-white/50 font-mono text-sm max-w-xs">
                            The ultimate cyber hacking experience. Break the system. Shape the future.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div id="contact" className="w-full md:w-1/3 text-center md:text-right mt-8 md:mt-0">
                        <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-cyan/20 shadow-lg"><h3
                            className="text-cyber-cyan text-lg font-bold mb-2">Have Questions? Contact Us!</h3> <p
                            className="text-white/70 font-mono text-sm">Email: <a href="mailto:support@cyberonites.com"
                                                                                  className="text-cyber-cyan hover:underline">support@cyberonites.com</a>
                        </p> <p className="text-white/70 font-mono text-sm mt-2">Event Coordinators:</p> <p
                            className="text-white/70 font-mono text-sm">Nitin Sikarwar – <a href="tel:+919548514037"
                                                                                            className="text-cyber-cyan hover:underline">+91
                            9548514037</a></p> <p className="text-white/70 font-mono text-sm">Sumit Kumar – <a
                            href="tel:+919631090422" className="text-cyber-cyan hover:underline">+91 9631090422</a></p>
                            <p className="text-white/70 font-mono text-sm">Radha Goel – Godawari Hostel, Room No.
                                228</p></div>
                    </div>
                </div>
                {/* Social links */}
                <div className="flex justify-center space-x-4 mt-8">
                    <a href="#" className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
                        <Github size={20}/>
                    </a>
                    <a href="#" className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
                        <Twitter size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cyberonites-club/"
                       className="text-white/70 hover:text-cyber-cyan p-2 transition-colors">
                        <Linkedin size={20}/>
                    </a>
                </div>

                <div className="border-t border-cyber-cyan/10 mt-8 pt-8 text-center">
                    <p className="text-white/40 font-mono text-xs">
                        <span className="text-cyber-cyan/40">&copy; 2025 INTRUSION_X. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
