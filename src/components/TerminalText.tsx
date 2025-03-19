
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  delay?: number;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  speed = 50, 
  className,
  onComplete,
  delay = 0
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [started, setStarted] = useState(false);

  // Start typing after delay
  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setStarted(true);
    }
  }, [delay]);

  // Typing effect
  useEffect(() => {
    if (!started) return;
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onComplete, started]);

  // Blinking cursor
  useEffect(() => {
    const cursorId = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorId);
  }, []);

  return (
    <div className={cn('font-mono text-cyber-green', className)}>
      {displayedText}
      <span className={cn('ml-1', cursorVisible ? 'opacity-100' : 'opacity-0')}>_</span>
    </div>
  );
};

export default TerminalText;
