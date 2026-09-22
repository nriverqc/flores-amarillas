import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { soundFx } from './AudioEffects';

// Lluvia interactiva de Girasoles y Flores Amarillas con canvas-confetti
export const triggerSunflowerConfetti = () => {
  try {
    soundFx.playSparkle();

    // Crear formas a partir de emojis de girasoles, margaritas y destellos
    const sunflower = confetti.shapeFromText({ text: '🌻', scalar: 3 });
    const yellowFlower = confetti.shapeFromText({ text: '🌼', scalar: 3 });
    const spark = confetti.shapeFromText({ text: '✨', scalar: 2 });

    // Disparo principal
    confetti({
      shapes: [sunflower, yellowFlower, spark],
      scalar: 3,
      particleCount: 35,
      spread: 90,
      origin: { y: 0.6 },
      ticks: 200,
    });

    // Ráfaga secundaria suave para mayor dinamismo
    setTimeout(() => {
      confetti({
        shapes: [sunflower, yellowFlower],
        scalar: 2.8,
        particleCount: 20,
        spread: 120,
        origin: { y: 0.5 },
        ticks: 220,
      });
    }, 250);
  } catch (err) {
    console.warn("Falling back to default confetti shapes:", err);
    confetti({
      particleCount: 40,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#facc15', '#f59e0b', '#fbbf24', '#fef08a'],
    });
  }
};

export const fireGoldenConfetti = () => {
  triggerSunflowerConfetti();
};

interface ConfettiTriggerProps {
  className?: string;
  variant?: 'floating' | 'button';
  label?: string;
}

export const ConfettiTrigger: React.FC<ConfettiTriggerProps> = ({
  className = '',
  variant = 'floating',
  label = 'Lluvia de Flores',
}) => {
  if (variant === 'button') {
    return (
      <button
        onClick={triggerSunflowerConfetti}
        type="button"
        className={`group relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-nightBg hover:shadow-amber-400/40 hover:scale-105 ${className}`}
      >
        <Sparkles className="w-5 h-5 animate-spin-very-slow transition-transform group-hover:rotate-45" />
        <span className="font-semibold tracking-wide">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={triggerSunflowerConfetti}
      type="button"
      title="Celebrar con lluvia de girasoles"
      className={`fixed bottom-6 right-6 z-40 p-4 rounded-full glass-golden border border-amber-300/40 shadow-2xl shadow-amber-500/40 text-amber-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group backdrop-blur-md ${className}`}
    >
      <span className="text-xl group-hover:scale-125 transition-transform select-none" role="img" aria-label="Girasol">🌻</span>
      <span className="text-sm font-semibold text-amber-200 hidden sm:inline-block pr-1 font-sans">
        ¡Lluvia de Girasoles!
      </span>
    </button>
  );
};
