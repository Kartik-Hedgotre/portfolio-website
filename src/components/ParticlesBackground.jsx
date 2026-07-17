import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    // Mouse coordinates in canvas space
    const mouse = {
      x: null,
      y: null,
      radius: 150, // distance threshold for mouse interaction (increased from 120)
    };

    // Helper to create a single particle
    const createParticle = (width, height) => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 1.5 + 2.0, // larger dots (increased from 1-2.5px to 2-3.5px)
      };
    };

    // Resize handler
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Fit pixel resolution to display device pixel ratio for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Adjust particle count relative to screen area (density-based)
      // Denser target (increased by ~2.5x: target ~1 particle per 4000 square pixels, capped at 220)
      const area = width * height;
      const targetCount = Math.min(220, Math.floor(area / 4000));

      if (particles.length < targetCount) {
        for (let i = particles.length; i < targetCount; i++) {
          particles.push(createParticle(width, height));
        }
      } else if (particles.length > targetCount) {
        particles.splice(targetCount);
      }
    };

    // Initialize resize
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Track mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Mouse position relative to canvas container
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Attach mouse listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Draw connections
      const maxDistance = 150; // max line length between dots (increased from 100)
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw connections between dots
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Opacity fades out with distance (opacity multiplier increased from 0.15 to 0.35)
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(156, 163, 175, ${alpha})`; // Light gray lines
            ctx.lineWidth = 1.1; // increased thickness from 0.8
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections between dots and cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Opacity fades out with distance from cursor (multiplier increased from 0.25 to 0.45)
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(156, 163, 175, ${alpha})`; // Connection line to mouse
            ctx.lineWidth = 1.3; // increased thickness from 1.0
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off canvas edges and clamp
        if (p1.x < 0) {
          p1.x = 0;
          p1.vx *= -1;
        } else if (p1.x > width) {
          p1.x = width;
          p1.vx *= -1;
        }

        if (p1.y < 0) {
          p1.y = 0;
          p1.vy *= -1;
        } else if (p1.y > height) {
          p1.y = height;
          p1.vy *= -1;
        }

        // Draw individual dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(156, 163, 175, 0.65)'; // light gray dots (increased opacity from 0.45 to 0.65)
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', // Allow clicking elements through the canvas background
      }}
    />
  );
}
