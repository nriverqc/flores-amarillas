import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from './AudioEffects';

export const MusicPlayerToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

  const handleToggle = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playBloom();
    }
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      title={isMuted ? 'Activar efectos de sonido' : 'Silenciar sonido'}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-amber-400/20 text-xs font-semibold text-amber-200/90 hover:text-amber-300 hover:border-amber-400/40 transition-all duration-300 active:scale-95 shadow-lg"
    >
      {isMuted ? (
        <>
          <VolumeX className="w-4 h-4 text-slate-400" />
          <span className="hidden sm:inline">Sonido apagado</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline">Sonido activo</span>
        </>
      )}
    </button>
  );
};
