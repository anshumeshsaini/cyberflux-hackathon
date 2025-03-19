
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  glitchOnHover?: boolean;
  delay?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Component = 'span', 
  className, 
  glitchOnHover = false,
  delay = 0
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

  return (
    <Component
      data-text={text}
      className={cn(
        'cyber-glitch transition-all',
        isGlitching || !glitchOnHover ? 'cyber-glitch' : '',
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
