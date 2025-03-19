
import { useEffect, useState } from 'react';

// Hook for revealing elements when they enter the viewport
export const useRevealAnimation = (
  threshold = 0.1, 
  rootMargin = '0px', 
  animation = 'animate-fade-in'
) => {
  const [refs, setRefs] = useState<HTMLElement[]>([]);
  const [isRevealed, setIsRevealed] = useState<boolean[]>([]);
  
  useEffect(() => {
    const elements = refs;
    const revealed = Array(elements.length).fill(false);
    setIsRevealed(revealed);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elements.indexOf(entry.target as HTMLElement);
          if (index !== -1 && entry.isIntersecting) {
            entry.target.classList.add(animation);
            revealed[index] = true;
            setIsRevealed([...revealed]);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [refs, threshold, rootMargin, animation]);
  
  const addRef = (ref: HTMLElement | null) => {
    if (ref && !refs.includes(ref)) {
      setRefs((prev) => [...prev, ref]);
    }
  };
  
  return { addRef, isRevealed };
};

// Hook for typewriter effect
export const useTypewriter = (
  text: string,
  speed = 50,
  delay = 0
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (delay > 0) {
      timeoutId = setTimeout(() => {
        setIsTyping(true);
      }, delay);
    } else {
      setIsTyping(true);
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);
  
  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    setDisplayedText('');
    setIsDone(false);
    
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsDone(true);
      }
    }, speed);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed, isTyping]);
  
  return { displayedText, isTyping, isDone };
};

// Hook for glitch effect
export const useGlitchEffect = (
  intensity = 0.05,
  interval = 2000
) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < intensity) {
        setIsGlitching(true);
        
        setTimeout(() => {
          setIsGlitching(false);
        }, 300);
      }
    }, interval);
    
    return () => {
      clearInterval(glitchInterval);
    };
  }, [intensity, interval]);
  
  return isGlitching;
};
