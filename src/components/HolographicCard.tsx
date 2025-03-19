
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HolographicCardProps {
  className?: string;
  glowColor?: string;
  children: React.ReactNode;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  className, 
  glowColor = 'cyber-cyan',
  children 
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Convert to rotation degrees (limit to +/- 10 degrees)
    const rotateY = (x / (rect.width / 2)) * 5;
    const rotateX = (y / (rect.height / 2)) * 5 * -1; // Invert Y axis
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  // Add subtle floating animation when not hovering
  useEffect(() => {
    if (!isHovering && cardRef.current) {
      const floatInterval = setInterval(() => {
        setRotation({
          x: Math.sin(Date.now() / 2000) * 2,
          y: Math.cos(Date.now() / 2000) * 2
        });
      }, 50);
      
      return () => clearInterval(floatInterval);
    }
  }, [isHovering]);

  const glowClasses = {
    'cyber-cyan': 'shadow-neon-cyan before:bg-cyber-cyan/20',
    'cyber-green': 'shadow-neon-green before:bg-cyber-green/20',
    'cyber-pink': 'shadow-neon-pink before:bg-cyber-pink/20',
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'glassmorphism relative transition-all duration-200 overflow-hidden',
        isHovering ? `shadow-[0_0_15px_rgba(10,255,255,0.3)] ${glowClasses[glowColor as keyof typeof glowClasses]}` : '',
        className
      )}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 2s ease-in-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Holographic gradient overlay */}
      <div 
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none',
          isHovering ? 'opacity-20' : ''
        )}
        style={{ 
          background: `linear-gradient(
            ${135 + rotation.y}deg, 
            transparent 0%, 
            rgba(10, 255, 255, 0.2) 50%, 
            transparent 100%
          )`
        }}
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-10">
        <div className="scan-line-container h-full w-full" />
      </div>
    </div>
  );
};

export default HolographicCard;
