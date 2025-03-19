
import React, { useEffect, useRef } from 'react';

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Setup digital rain
    const cyberGreen = '#0AFF0A';
    const cyberCyan = '#0AFFFF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Random characters to display
    const getRandomChar = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    // Initialize drops
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    // Draw the digital rain
    const draw = () => {
      // Add semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the text style
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over each column
      for (let i = 0; i < drops.length; i++) {
        // Choose random character
        const text = getRandomChar();
        
        // Randomly select color with cyan being less common
        const color = Math.random() > 0.9 ? cyberCyan : cyberGreen;
        
        // Calculate intensity based on position (newer drops are brighter)
        const y = drops[i] * fontSize;
        const intensity = Math.min(1, (canvas.height - y) / canvas.height + 0.4);
        
        // Set color with intensity
        ctx.fillStyle = color;
        ctx.globalAlpha = intensity;
        
        // Draw the character
        ctx.fillText(text, i * fontSize, y);
        
        // Increment y coordinate for next draw
        drops[i]++;
        
        // Reset when off the screen with randomization to avoid uniform rain
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -50);
        }
      }
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      aria-hidden="true"
    />
  );
};

export default DigitalRain;
