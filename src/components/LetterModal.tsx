import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Sparkles, Heart } from 'lucide-react';
import { Letter } from '../types';
import { soundFx } from './AudioEffects';
import { fireGoldenConfetti } from './ConfettiTrigger';

interface LetterModalProps {
  isOpen: boolean;
  letter: Letter | null;
  onClose: () => void;
  onOpenDateModal?: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({
  isOpen,
  letter,
  onClose,
  onOpenDateModal,
}) => {
  const [copied, setCopied] = useState(false);

  if (!letter) return null;

  const handleCopy = () => {
    soundFx.playSubtleChime();
    const fullText = `${letter.bodyParagraphs.join('\n\n')}\n\n${letter.closing}\n${letter.signature}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  const handleConfetti = () => {
    fireGoldenConfetti();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg my-6 z-10"
          >
            {/* Wax Seal Accent at top center */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-400 p-0.5 shadow-xl shadow-amber-900/60 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-amber-600 border-2 border-amber-300/60 flex items-center justify-center shadow-inner">
                  <span className="text-lg select-none" role="img" aria-label="Girasol">🌻</span>
                </div>
              </div>
            </div>

            {/* Letter Envelope / Parchment Card */}
            <div className="parchment-letter rounded-3xl p-5 sm:p-8 pt-8 sm:pt-9 text-stone-900 relative shadow-2xl border-2 border-amber-200/70">
              {/* Close Button - Minimum 44x44px touch area for mobile */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-11 h-11 flex items-center justify-center rounded-full text-stone-500 hover:text-stone-900 hover:bg-amber-200/50 active:scale-95 transition-all touch-manipulation"
                aria-label="Cerrar nota"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Letter Header */}
              <div className="text-center mt-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-amber-100/90 text-amber-900 border border-amber-300/80 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  {letter.subtitle}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1 leading-tight">
                  {letter.title}
                </h3>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 my-3 opacity-75">
                <div className="h-[1px] w-12 bg-amber-400" />
                <span className="text-amber-600 text-xs">✦ ❀ ✦</span>
                <div className="h-[1px] w-12 bg-amber-400" />
              </div>

              {/* Body Text */}
              <div className="space-y-3.5 text-stone-800 text-base sm:text-lg leading-relaxed font-sans font-normal my-4 px-1">
                {letter.bodyParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "font-semibold text-stone-900" : ""}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Special CTA button for the date proposal - ONLY on Carta 3 (Tulipán) */}
              {onOpenDateModal && letter.flowerId === 'tulipan' && (
                <div className="my-4 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDateModal();
                    }}
                    className="min-h-[44px] w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-nightBg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-all touch-manipulation hover:scale-[1.01]"
                  >
                    <span>Tengo una propuesta para ti 🍦</span>
                  </button>
                </div>
              )}

              {/* Signature / Closing */}
              <div className="mt-6 pt-4 border-t border-amber-300/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="w-full sm:w-auto">
                  <p className="text-sm font-sans text-stone-600">
                    {letter.closing}
                  </p>
                  <p className="font-script text-2xl text-amber-900 font-bold mt-0.5">
                    {letter.signature}
                  </p>
                </div>

                {/* Interactive Action Buttons (min 44px height for mobile UX) */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-1 sm:pt-0">
                  <button
                    onClick={handleCopy}
                    className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm flex-1 sm:flex-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>¡Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-700" />
                        <span>Copiar nota</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleConfetti}
                    className="min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-nightBg shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all flex-1 sm:flex-none"
                  >
                    <Heart className="w-4 h-4 fill-amber-900 text-amber-900" />
                    <span>Celebrar</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
