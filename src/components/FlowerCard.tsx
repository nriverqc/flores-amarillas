import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlowerData } from '../types';
import { SunflowerSVG, RoseSVG, TulipSVG, DaisySVG } from './FlowerSVGs';
import { Mail, Sparkles, BookOpen } from 'lucide-react';
import { soundFx } from './AudioEffects';

interface FlowerCardProps {
  flower: FlowerData;
  index: number;
  onOpenLetter: (flower: FlowerData) => void;
}

export const FlowerCard: React.FC<FlowerCardProps> = ({
  flower,
  index,
  onOpenLetter,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderFlowerSVG = () => {
    switch (flower.id) {
      case 'girasol':
        return <SunflowerSVG className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-2xl" isHovered={isHovered} />;
      case 'rosa':
        return <RoseSVG className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-2xl" isHovered={isHovered} />;
      case 'tulipan':
        return <TulipSVG className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-2xl" isHovered={isHovered} />;
      case 'margarita':
        return <DaisySVG className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-2xl" isHovered={isHovered} />;
      default:
        return null;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playSubtleChime();
  };

  const handleCardClick = () => {
    soundFx.playBloom(index * 2);
    onOpenLetter(flower);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-3xl glass-card p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer touch-manipulation active:scale-[0.98]"
      onClick={handleCardClick}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-25 transition-opacity duration-300 group-hover:opacity-60 pointer-events-none"
        style={{ backgroundColor: flower.colorScheme.primary }}
      />

      {/* Top Header Tag */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border ${flower.colorScheme.badgeBg}`}
        >
          <Sparkles className="w-3 h-3" />
          {flower.tag}
        </span>
        <span className="text-[11px] text-amber-200/50 italic font-serif">
          {flower.scientificName}
        </span>
      </div>

      {/* Flower Illustration Display */}
      <div className="flex items-center justify-center py-2 sm:py-4 my-1 relative z-10">
        <div className="relative">
          {renderFlowerSVG()}
          {/* Touch indicator badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 bg-amber-400 text-nightBg text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md shadow-amber-500/30 flex items-center gap-1 whitespace-nowrap">
            <BookOpen className="w-3 h-3" />
            <span>Toca para ver nota</span>
          </div>
        </div>
      </div>

      {/* Flower Information */}
      <div className="mt-auto z-10 pt-2">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
          <span>{flower.name}</span>
          <Mail className="w-4 h-4 text-amber-400/70 group-hover:text-amber-300 transition-colors" />
        </h3>

        <p className="text-[11px] font-medium text-amber-400/90 mt-1 uppercase tracking-wider">
          {flower.meaning}
        </p>

        <p className="text-xs sm:text-sm text-slate-300/80 mt-2 line-clamp-2 leading-relaxed font-sans">
          {flower.description}
        </p>

        {/* Poetic quote snippet */}
        <p className="text-xs text-amber-200/80 italic mt-2.5 pt-2.5 border-t border-amber-500/15 font-serif line-clamp-2">
          {flower.quote}
        </p>

        {/* Button to read letter (min 44px touch target) */}
        <div className="mt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="min-h-[44px] w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-amber-500/10 hover:bg-amber-400 text-amber-300 hover:text-nightBg border border-amber-500/30 group-hover:border-amber-400/60 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm touch-manipulation"
          >
            <Mail className="w-4 h-4" />
            <span>Abrir Nota para Lorena</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
