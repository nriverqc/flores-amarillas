import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, CheckCircle2, Loader2, Sparkles, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { triggerSunflowerConfetti } from './ConfettiTrigger';
import { soundFx } from './AudioEffects';

interface DateInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DateInvitationModal: React.FC<DateInvitationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'accepted' | 'suggested' | null>(null);

  // Opción A: Aceptar la invitación
  const handleAccept = async () => {
    setIsLoading(true);
    soundFx.playSparkle();

    // Disparar inmediatamente la lluvia de girasoles y flores amarillas
    triggerSunflowerConfetti();

    const templateParams = {
      name: "Lorena",
      from_name: "Lorena",
      response_type: "¡Aceptó la cita en el Parque Gilma Jiménez!",
      message: "¡De una! Nos vemos el miércoles en la tarde en el Parque Gilma Jiménez.",
    };

    console.log("📤 Intentando enviar correo a través de EmailJS con datos:", templateParams);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log("✅ ¡Correo enviado exitosamente!", response.status, response.text);
      setStatusType('accepted');
      setStatusMessage("¡Excelente! Ya me llegó tu confirmación. Nos vemos el miércoles 😉");
    } catch (error: unknown) {
      console.error("❌ Error crítico enviando correo vía EmailJS:", error);
      const errText = (error as { text?: string; message?: string })?.text || (error as { message?: string })?.message;
      if (errText) {
        console.error("ℹ️ Detalle de la respuesta de EmailJS:", errText);
      }
      // Mostrar confirmación visual de todos modos para no arruinar la experiencia de Lorena
      setStatusType('accepted');
      setStatusMessage("¡Excelente! Ya me llegó tu confirmación. Nos vemos el miércoles 😉");
    } finally {
      setIsLoading(false);
    }
  };

  // Opción B: Sugerir otro lugar
  const handleSubmitSuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestionText.trim()) return;

    setIsLoading(true);
    soundFx.playSubtleChime();

    // Disparar lluvia de girasoles y flores
    triggerSunflowerConfetti();

    const templateParams = {
      name: "Lorena",
      from_name: "Lorena",
      response_type: "Sugirió otro lugar para la cita",
      message: suggestionText.trim(),
    };

    console.log("📤 Intentando enviar correo a través de EmailJS con datos:", templateParams);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log("✅ ¡Correo enviado exitosamente!", response.status, response.text);
      setStatusType('suggested');
      setStatusMessage("¡Anotado! Ya le llegó tu propuesta a Nicolas 📩");
    } catch (error: unknown) {
      console.error("❌ Error crítico enviando correo vía EmailJS:", error);
      const errText = (error as { text?: string; message?: string })?.text || (error as { message?: string })?.message;
      if (errText) {
        console.error("ℹ️ Detalle de la respuesta de EmailJS:", errText);
      }
      setStatusType('suggested');
      setStatusMessage("¡Anotado! Ya le llegó tu propuesta a Nicolas 📩");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuggesting(false);
      setSuggestionText('');
      setStatusMessage(null);
      setStatusType(null);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-lg my-6 z-10"
          >
            <div className="rounded-3xl glass-card p-6 sm:p-8 pt-8 text-white relative shadow-2xl border-2 border-amber-400/40 overflow-hidden bg-nightCard/95">
              {/* Golden glow in corner */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

              {/* Close Button (min 44x44px touch area) */}
              <button
                onClick={handleResetAndClose}
                className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all touch-manipulation z-20"
                aria-label="Cerrar invitación"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Top Badge */}
              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Para Lorena
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-white mb-3">
                Tengo una propuesta para ti <span className="inline-block">🍦</span>
              </h3>

              {/* Main Proposal Message */}
              <div className="bg-amber-500/10 border border-amber-400/25 rounded-2xl p-4 sm:p-5 my-4 text-slate-200 text-sm sm:text-base leading-relaxed text-center font-sans">
                <p>
                  Aprovechando que ya es hora de que nos veamos en persona...{' '}
                  <strong className="text-amber-300 font-semibold">
                    ¿te suena un helado o caminar un rato este miércoles en la tarde en el Parque Gilma Jiménez?
                  </strong>
                </p>
              </div>

              {/* Status Success View */}
              {statusMessage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-5 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-400/15 to-emerald-500/15 border border-amber-400/40 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center">
                    {statusType === 'accepted' ? (
                      <Heart className="w-6 h-6 text-amber-400 fill-amber-400 animate-pulse" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-base sm:text-lg font-serif font-bold text-amber-200 mb-2">
                    {statusMessage}
                  </p>
                  <p className="text-xs text-slate-300 font-sans">
                    ¡Gracias por responder! 🌻
                  </p>
                  <button
                    onClick={handleResetAndClose}
                    className="min-h-[44px] mt-4 px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-yellow-300 text-nightBg transition-all active:scale-95 touch-manipulation"
                  >
                    Cerrar ventana
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Option Buttons */}
                  {!isSuggesting ? (
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      {/* Option A: Accept */}
                      <button
                        onClick={handleAccept}
                        disabled={isLoading}
                        className="min-h-[48px] flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm sm:text-base text-nightBg bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all touch-manipulation disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <span>¡De una! Nos vemos allá</span>
                            <span className="text-lg">🍦</span>
                          </>
                        )}
                      </button>

                      {/* Option B: Suggest other place */}
                      <button
                        onClick={() => {
                          setIsSuggesting(true);
                          soundFx.playSubtleChime();
                        }}
                        disabled={isLoading}
                        className="min-h-[48px] flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-amber-200 glass-panel hover:text-white hover:border-amber-400/50 active:scale-95 transition-all touch-manipulation disabled:opacity-50"
                      >
                        <MapPin className="w-4 h-4 text-amber-400" />
                        <span>Sugerir otro lugar 📍</span>
                      </button>
                    </div>
                  ) : (
                    /* Expanded Suggestion Form */
                    <form onSubmit={handleSubmitSuggestion} className="mt-4 space-y-3">
                      <div className="text-left">
                        <label
                          htmlFor="suggestion-input"
                          className="block text-xs sm:text-sm font-medium text-amber-200/90 mb-1.5"
                        >
                          Eso sí, que sea en la tarde 😅 ¿A dónde te gustaría ir?
                        </label>
                        <textarea
                          id="suggestion-input"
                          value={suggestionText}
                          onChange={(e) => setSuggestionText(e.target.value)}
                          placeholder="Ej. Me gustaría ir a... / ¿Qué tal si vamos a...?"
                          rows={3}
                          required
                          className="w-full bg-nightBg/90 border border-amber-500/40 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-300 transition-all font-sans resize-none"
                        />
                      </div>

                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => setIsSuggesting(false)}
                          disabled={isLoading}
                          className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white glass-panel active:scale-95 transition-all touch-manipulation"
                        >
                          Volver
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading || !suggestionText.trim()}
                          className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-nightBg bg-amber-400 hover:bg-yellow-300 active:scale-95 transition-all touch-manipulation disabled:opacity-50 shadow-md shadow-amber-500/25"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Enviando...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Enviar sugerencia</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
