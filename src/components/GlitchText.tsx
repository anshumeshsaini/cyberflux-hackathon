
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  glitchOnHover?: boolean;
  delay?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Component = 'span', 
  className, 
  glitchOnHover = false,
  delay = 0,
  intensity = 'medium'
}) => {
  const [isVisible, setIsVisible] = useState(!delay);
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  // Random glitch effect on component mount
  useEffect(() => {
    if (!glitchOnHover) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        
        setTimeout(() => {
          setIsGlitching(false);
        }, 300);
      }, Math.random() * 5000 + 2000); // Random interval between 2-7 seconds
      
      return () => clearInterval(glitchInterval);
    }
  }, [glitchOnHover]);

  const handleMouseEnter = () => {
    if (glitchOnHover) {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (glitchOnHover) {
      setIsGlitching(false);
    }
  };

  if (!isVisible) return null;

  const intensityClass = 
    intensity === 'low' ? 'glitch-low' : 
    intensity === 'high' ? 'glitch-high' : 
    'glitch-medium';

  return (
    <Component
      data-text={text}
      className={cn(
        'cyber-glitch',
        isGlitching || !glitchOnHover ? intensityClass : '',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </Component>
  );
};

export default GlitchText;
