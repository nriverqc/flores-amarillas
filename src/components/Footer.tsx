import React from 'react';
import { Sparkles, Sun } from 'lucide-react';
import { fireGoldenConfetti } from './ConfettiTrigger';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-amber-500/20 relative z-10 text-center px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
        {/* Emblem */}
        <div
          onClick={fireGoldenConfetti}
          className="cursor-pointer group flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-400/30 hover:border-amber-400/60 transition-all hover:scale-105 active:scale-95 touch-manipulation"
          title="Toca para celebrar"
        >
          <Sun className="w-4 h-4 text-amber-400 animate-spin-very-slow" />
          <span className="text-xs font-semibold text-amber-200">
            Flores Amarillas para Lorena • 21 de Septiembre
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>

        <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-sm">
          Un detalle interactivo con aprecio, respeto y buena energía.
        </p>

        <p className="text-xs text-amber-300/70 font-serif italic">
          Con cariño, Nicolas Rivera ✨
        </p>
      </div>
    </footer>
  );
};
