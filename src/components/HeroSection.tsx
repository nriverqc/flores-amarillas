import React from 'react';
import { motion } from 'framer-motion';
import { SunflowerSVG } from './FlowerSVGs';
import { MusicPlayerToggle } from './MusicPlayerToggle';
import { Sparkles, Heart, ArrowDown, Sun, Sparkle } from 'lucide-react';
import { fireGoldenConfetti } from './ConfettiTrigger';
import { soundFx } from './AudioEffects';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
}) => {
  const handleCelebration = () => {
    fireGoldenConfetti();
  };

  const handleHeroSunflowerClick = () => {
    soundFx.playBloom();
    fireGoldenConfetti();
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-between pt-4 sm:pt-6 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between gap-2 w-full py-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-300 p-0.5 shadow-lg shadow-amber-500/25 flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full rounded-full bg-nightCard flex items-center justify-center">
              <span className="text-base sm:text-lg">🌻</span>
            </div>
          </div>
          <div>
            <span className="font-serif font-bold text-base sm:text-lg text-white tracking-wide block leading-tight">
              Para Lorena 💛
            </span>
            <span className="text-[10px] text-amber-400/90 uppercase tracking-wider font-semibold">
              21 de Septiembre
            </span>
          </div>
        </div>

        {/* Badges and Audio Toggle */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25">
            <Sun className="w-3 h-3 text-amber-400" />
            <span>21 de Septiembre</span>
          </span>
          <MusicPlayerToggle />
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto py-6 sm:py-10">
        {/* Left text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left w-full"
        >
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-transparent text-amber-300 border border-amber-500/30 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Día de las Flores Amarillas</span>
          </div>

          {/* Main Title - Responsive for mobile */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Flores Amarillas <br className="hidden sm:inline" />
            para <span className="text-gold-shimmer">Lorena 🌼</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-200/90 max-w-lg mx-auto lg:mx-0 font-sans leading-relaxed mb-6 font-normal">
            Un pequeño detalle para este 21 de septiembre
          </p>

          {/* Dedicated context box: Respectful, warm, genuine */}
          <div className="p-4 rounded-2xl glass-panel border border-amber-400/25 shadow-lg max-w-md mx-auto lg:mx-0 mb-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
              <Sparkle className="w-3.5 h-3.5 text-amber-400" />
              <span>Un detalle sincero</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
              Aunque apenas nos estamos conociendo, me parece genial cada conversación y el tiempo que compartimos.
              Espero que este rincón interactivo te saque una sonrisa hoy.
            </p>
            <div className="mt-2.5 pt-2 border-t border-amber-500/15 flex items-center justify-between text-xs text-amber-200/70">
              <span className="font-serif italic">De: Nicolas Rivera</span>
              <span className="font-semibold text-amber-400">✨ 21 de Septiembre</span>
            </div>
          </div>

          {/* CTA Buttons - Touch friendly (min 44px) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <button
              onClick={onExploreClick}
              type="button"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base text-nightBg bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 active:scale-95 transition-all touch-manipulation"
            >
              <span>Ver tus Flores</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={handleCelebration}
              type="button"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-amber-200 glass-card hover:text-white hover:border-amber-400/60 active:scale-95 transition-all touch-manipulation"
            >
              <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Lluvia de Flores</span>
            </button>
          </div>
        </motion.div>

        {/* Right column: Interactive Sunflower */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 flex flex-col items-center justify-center relative w-full"
        >
          {/* Radiant Halo Backdrops */}
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/15 to-transparent blur-3xl -z-10 animate-pulse-glow" />

          {/* Clickable Interactive Hero Sunflower */}
          <div
            onClick={handleHeroSunflowerClick}
            className="cursor-pointer group relative p-2 sm:p-4 rounded-full transition-transform duration-500 hover:scale-105 active:scale-95 touch-manipulation"
            title="¡Toca el girasol para florecer!"
          >
            <SunflowerSVG className="w-52 h-52 sm:w-72 sm:h-72 lg:w-84 lg:h-84 drop-shadow-[0_15px_35px_rgba(245,158,11,0.3)]" />

            {/* Micro Badge floating */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full glass-golden border border-amber-300/60 shadow-lg text-[11px] font-semibold text-amber-950 bg-amber-100/90 whitespace-nowrap flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>Toca para florecer ✨</span>
            </motion.div>
          </div>

          {/* Floating Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-xs sm:max-w-sm">
            <span className="px-3 py-1 rounded-full text-[11px] font-medium glass-panel text-amber-200/90 border border-amber-400/20">
              🌻 Buena vibra
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-medium glass-panel text-amber-200/90 border border-amber-400/20">
              ✨ Paso a paso
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-medium glass-panel text-amber-200/90 border border-amber-400/20">
              💛 Buena compañía
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hidden sm:flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold mb-1">
          Toca cada flor para abrir su nota
        </span>
        <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
      </div>
    </header>
  );
};
