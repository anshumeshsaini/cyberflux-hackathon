
import React, { useState, useEffect } from 'react';
import HolographicCard from './HolographicCard';
import GlitchText from './GlitchText';
import TerminalText from './TerminalText';
import { Loader, Check, AlertCircle } from 'lucide-react';

const TerminalOutput: React.FC<{ messages: { text: string; type: 'input' | 'output' | 'success' | 'error' }[] }> = ({ messages }) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="font-mono text-sm h-[150px] overflow-y-auto bg-cyber-darker/70 p-4 rounded-md text-left">
      {messages.map((msg, index) => (
        <div key={index} className="mb-1">
          {msg.type === 'input' && (
            <div>
              <span className="text-cyber-cyan">root@intrusion-x $</span> 
              <span className="text-white ml-2">{msg.text}</span>
            </div>
          )}
          {msg.type === 'output' && (
            <div className="text-white/70">{msg.text}</div>
          )}
          {msg.type === 'success' && (
            <div className="text-cyber-green flex items-center">
              <Check size={14} className="mr-1" /> {msg.text}
            </div>
          )}
          {msg.type === 'error' && (
            <div className="text-cyber-pink flex items-center">
              <AlertCircle size={14} className="mr-1" /> {msg.text}
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const Registration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState('');
  const [hackerName, setHackerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [terminalMessages, setTerminalMessages] = useState<{ text: string; type: 'input' | 'output' | 'success' | 'error' }[]>([
    { text: 'system -v', type: 'input' },
    { text: 'IntrusionX Terminal v2.5.0 // ACTIVE', type: 'output' },
    { text: 'Awaiting identity verification...', type: 'output' },
  ]);

  // Generate random hacker names
  const generateHackerName = () => {
    const prefixes = ['Ghost', 'Cipher', 'Vortex', 'Shadow', 'Neon', 'Quantum', 'Binary', 'Crypto', 'Zero', 'Null', 'Pixel'];
    const suffixes = ['Byte', 'Wire', 'Script', 'Pulse', 'Node', 'Flux', 'Hawk', 'Runner', 'Hunter', 'Reaper', 'Forge'];
    
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const randomNum = Math.floor(Math.random() * 100);
    
    return `${randomPrefix}${randomSuffix}${randomNum}`;
  };

  const handleGenerateHackerName = (e: React.MouseEvent) => {
    e.preventDefault();
    const newName = generateHackerName();
    setHackerName(newName);
    
    setTerminalMessages(prev => [
      ...prev, 
      { text: 'generate -hacker-alias', type: 'input' },
      { text: `Generated alias: ${newName}`, type: 'success' }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setTerminalMessages(prev => [
        ...prev,
        { text: 'submit -form --registration', type: 'input' },
        { text: 'ERROR: Required identity parameters missing', type: 'error' }
      ]);
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTerminalMessages(prev => [
      ...prev,
      { text: 'submit -form --registration', type: 'input' },
      { text: 'Processing registration data...', type: 'output' }
    ]);
    
    // Simulate network delay
    setTimeout(() => {
      setTerminalMessages(prev => [
        ...prev,
        { text: 'Verifying identity...', type: 'output' },
        { text: 'Identity verified', type: 'success' },
        { text: 'Registration complete', type: 'success' },
        { text: `Welcome to IntrusionX 2025, ${hackerName || name}`, type: 'output' },
        { text: 'Further instructions will be sent to your secure channel', type: 'output' }
      ]);
      
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id="register" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <GlitchText 
            text="REGISTRATION" 
            as="h2" 
            className="text-4xl md:text-5xl font-cyber text-cyber-green mb-4" 
          />
          <p className="text-white/70 font-mono max-w-2xl mx-auto">
            Establish secure connection. Register your identity for access to the grid.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <HolographicCard 
            className="p-6 md:p-8" 
            glowColor="cyber-green"
          >
            <div className="mb-6">
              <TerminalText 
                text="> Secure registration terminal. All communications encrypted." 
                className="text-cyber-green text-sm"
              />
            </div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-mono mb-2">
                      IDENTITY NAME
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-cyber-darker/50 border border-cyber-green/30 focus:border-cyber-green text-white font-mono p-3 rounded-md outline-none transition"
                      placeholder="Your real name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-mono mb-2">
                      SECURE CHANNEL (EMAIL)
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-cyber-darker/50 border border-cyber-green/30 focus:border-cyber-green text-white font-mono p-3 rounded-md outline-none transition"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-mono mb-2">
                      TEAM DESIGNATION (OPTIONAL)
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-cyber-darker/50 border border-cyber-green/30 focus:border-cyber-green text-white font-mono p-3 rounded-md outline-none transition"
                      placeholder="Your team name"
                      value={team}
                      onChange={e => setTeam(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-mono mb-2">
                      HACKER ALIAS
                    </label>
                    <div className="flex">
                      <input 
                        type="text" 
                        className="flex-1 bg-cyber-darker/50 border border-cyber-green/30 focus:border-cyber-green text-white font-mono p-3 rounded-l-md outline-none transition"
                        placeholder="Your hacker name"
                        value={hackerName}
                        onChange={e => setHackerName(e.target.value)}
                      />
                      <button 
                        onClick={handleGenerateHackerName}
                        className="bg-cyber-green/20 hover:bg-cyber-green/30 border border-cyber-green/30 text-cyber-green px-3 rounded-r-md transition"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <TerminalOutput messages={terminalMessages} />
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    type="submit"
                    disabled={loading}
                    className={`cyber-button relative font-mono px-12 py-4 text-lg font-bold ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <Loader className="animate-spin mr-2" size={18} />
                        PROCESSING...
                      </span>
                    ) : 'INITIALIZE CONNECTION'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center">
                <Check size={64} className="text-cyber-green mx-auto mb-6" />
                <h3 className="text-2xl font-cyber text-cyber-green mb-4">
                  Registration Complete
                </h3>
                <p className="text-white/70 font-mono max-w-lg mx-auto mb-6">
                  Your connection has been established. We've sent a confirmation to your secure channel.
                </p>
                <div className="mt-6">
                  <TerminalOutput messages={terminalMessages} />
                </div>
              </div>
            )}
          </HolographicCard>
        </div>
      </div>
    </section>
  );
};

export default Registration;
