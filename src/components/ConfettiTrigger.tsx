import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { soundFx } from './AudioEffects';

interface ConfettiTriggerProps {
  className?: string;
  variant?: 'floating' | 'button';
  label?: string;
}

export const fireGoldenConfetti = () => {
  soundFx.playSparkle();

  const count = 160;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Golden and sunflower color palette
  const colors = ['#facc15', '#f59e0b', '#fde047', '#fffbeb', '#fbbf24', '#eab308'];

  fire(0.25, {
    spread: 30,
    startVelocity: 45,
    colors,
  });
  fire(0.2, {
    spread: 60,
    colors,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.1,
    colors,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.4,
    colors,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 50,
    colors,
  });
};

export const ConfettiTrigger: React.FC<ConfettiTriggerProps> = ({
  className = '',
  variant = 'floating',
  label = 'Lluvia de Flores',
}) => {
  if (variant === 'button') {
    return (
      <button
        onClick={fireGoldenConfetti}
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
      onClick={fireGoldenConfetti}
      type="button"
      title="Celebrar con lluvia dorada"
      className={`fixed bottom-6 right-6 z-40 p-4 rounded-full glass-golden border border-amber-300/40 shadow-2xl shadow-amber-500/40 text-amber-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group backdrop-blur-md ${className}`}
    >
      <Sparkles className="w-6 h-6 text-amber-300 animate-pulse group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-semibold text-amber-200 hidden sm:inline-block pr-1 font-sans">
        ¡Celebrar! 🌻✨
      </span>
    </button>
  );
};
