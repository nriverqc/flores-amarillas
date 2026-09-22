import React from 'react';
import { FlowerData } from '../types';
import { flowersData } from '../data/lettersData';
import { FlowerCard } from './FlowerCard';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface FlowerGridProps {
  onOpenLetter: (flower: FlowerData) => void;
}

export const FlowerGrid: React.FC<FlowerGridProps> = ({ onOpenLetter }) => {
  return (
    <section id="ramo-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/25 mb-3 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Detalles del 21 de Septiembre</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Tus Flores <span className="text-gold-shimmer">Amarillas 🌻</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300/85 leading-relaxed font-sans">
          Cada flor guarda una nota y un significado sobre cómo nos hemos ido conociendo:
          con calma, buena vibra y el gusto de compartir el momento.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-amber-400/80">
          <HeartHandshake className="w-4 h-4" />
          <span>Toca cualquiera de las flores para abrir su nota</span>
        </div>
      </div>

      {/* Grid of Flowers (Responsive: 1 col on mobile, 2 on tablet, 4 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
        {flowersData.map((flower, index) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
            index={index}
            onOpenLetter={onOpenLetter}
          />
        ))}
      </div>
    </section>
  );
};
