import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  oscillationSpeed: number;
  oscillationDistance: number;
  color: string;
  opacity: number;
  tiltAngle: number;
  tiltSpeed: number;
}

interface Sparkle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  speedY: number;
}

export const BackgroundPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color palette for golden yellow petals
    const petalColors = [
      'rgba(250, 204, 21, 0.85)',  // #facc15
      'rgba(253, 224, 71, 0.85)',  // #fde047
      'rgba(245, 158, 11, 0.8)',   // #f59e0b
      'rgba(254, 240, 138, 0.9)',  // #fef08a
      'rgba(234, 179, 8, 0.8)',    // #eab308
    ];

    // Create initial petals
    const petalCount = Math.min(Math.floor(window.innerWidth / 35), 45);
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 10,
      speedY: Math.random() * 1.4 + 0.8,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      oscillationSpeed: Math.random() * 0.02 + 0.01,
      oscillationDistance: Math.random() * 40 + 20,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.4 + 0.5,
      tiltAngle: Math.random() * Math.PI,
      tiltSpeed: Math.random() * 0.03 + 0.01,
    }));

    // Create golden sparkles / pollen
    const sparkles: Sparkle[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random(),
      alphaSpeed: Math.random() * 0.02 + 0.008,
      speedY: Math.random() * 0.4 + 0.1,
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw pollen sparkles
      sparkles.forEach((sparkle) => {
        sparkle.y -= sparkle.speedY;
        if (sparkle.y < 0) {
          sparkle.y = height;
          sparkle.x = Math.random() * width;
        }

        sparkle.alpha += sparkle.alphaSpeed;
        if (sparkle.alpha >= 1 || sparkle.alpha <= 0.1) {
          sparkle.alphaSpeed = -sparkle.alphaSpeed;
        }

        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 240, 138, ${Math.max(0, Math.min(1, sparkle.alpha))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(250, 204, 21, 0.8)';
        ctx.fill();
      });

      // Reset shadow for petals
      ctx.shadowBlur = 0;

      // Draw and update petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.tiltAngle += p.tiltSpeed;

        // Oscillate with sine wave for natural fluttering
        const horizontalWave = Math.sin(time + p.oscillationSpeed) * 0.8;
        p.x += p.speedX + horizontalWave;

        // Interaction with mouse position (gentle wind push)
        if (mousePosRef.current) {
          const dx = p.x - mousePosRef.current.x;
          const dy = p.y - mousePosRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 0) {
            const force = (140 - dist) / 140;
            p.x += (dx / dist) * force * 3.5;
            p.y += (dy / dist) * force * 2;
          }
        }

        // Wrap around boundaries
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 30) p.x = -20;
        if (p.x < -30) p.x = width + 20;

        // Draw organic petal shape using Bézier curves
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        
        // Tilt scale to simulate 3D rotation in wind
        const scaleX = Math.cos(p.tiltAngle);
        ctx.scale(scaleX, 1);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.6, -p.size * 1.8, 0, -p.size * 2.2);
        ctx.bezierCurveTo(-p.size * 0.6, -p.size * 1.8, -p.size * 0.6, -p.size * 0.8, 0, 0);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Inner petal vein detail
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.2);
        ctx.lineTo(0, -p.size * 1.7);
        ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
