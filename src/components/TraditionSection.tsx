import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Smile, Sun, Sparkles } from 'lucide-react';
import { fireGoldenConfetti } from './ConfettiTrigger';

export const TraditionSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl glass-card p-6 sm:p-10 relative overflow-hidden border border-amber-400/25"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-2.5">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            21 de Septiembre
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            ¿Por qué flores amarillas el <span className="text-gold-shimmer">21 de septiembre</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {/* Card 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-nightCard/70 border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-1.5">
                La Magia del 21 de Septiembre
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                El 21 de septiembre es una fecha especial para celebrar la llegada de la primavera,
                la luz del sol y el renacer de la buena energía.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-nightCard/70 border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Smile className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-1.5">
                Compartir Alegría
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                Regalar una flor amarilla es un gesto bonito para desear sonrisas, momentos agradables y
                agradecer a las personas que aportan buena vibra a tu día a día.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-nightCard/70 border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-1.5">
                Conocerse sin Prisas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                Es la calma de disfrutar el presente, tener buenas pláticas y descubrir lo especial que
                es alguien poco a poco, con respeto y sinceridad.
              </p>
            </div>
          </div>
        </div>

        {/* Action quote banner */}
        <div className="mt-8 pt-5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif max-w-md">
            «Espero que este detalle alegre tu jornada y que disfrutes mucho tu 21 de septiembre.»
          </p>
          <button
            onClick={fireGoldenConfetti}
            className="min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-yellow-300 text-nightBg shadow-lg shadow-amber-500/25 transition-all active:scale-95 whitespace-nowrap touch-manipulation"
          >
            Lanzar Flores 🌻✨
          </button>
        </div>
      </motion.div>
    </section>
  );
};
