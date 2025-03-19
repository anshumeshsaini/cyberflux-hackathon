
import React, { useState, useEffect, useRef } from 'react';
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
  const textRef = useRef<HTMLElement>(null);
  
  console.log("GlitchText rendering:", text);

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (!textRef.current || glitchOnHover) return;
    
    // Random glitching effect when not in hover mode
    const glitchRandomly = () => {
      const randomDelay = Math.floor(Math.random() * 10000) + 2000; // Random delay between 2-12 seconds
      
      setTimeout(() => {
        setIsGlitching(true);
        
        setTimeout(() => {
          setIsGlitching(false);
          glitchRandomly();
        }, Math.random() * 500 + 200); // Glitch for 200-700ms
      }, randomDelay);
    };
    
    glitchRandomly();
    
    return () => {
      // Cleanup timeouts if needed
    };
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

  const getIntensityClass = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-90';
      case 'high':
        return 'animate-[glitch_0.2s_infinite]';
      case 'medium':
      default:
        return '';
    }
  };

  if (!isVisible) return null;

  return (
    <Component
      ref={textRef}
      data-text={text}
      className={cn(
        'transition-all',
        isGlitching || !glitchOnHover ? 'cyber-glitch' : '',
        getIntensityClass(),
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
