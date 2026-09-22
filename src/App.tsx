import { useState } from 'react';
import { FlowerData } from './types';
import { BackgroundPetals } from './components/BackgroundPetals';
import { HeroSection } from './components/HeroSection';
import { FlowerGrid } from './components/FlowerGrid';
import { TraditionSection } from './components/TraditionSection';
import { LetterModal } from './components/LetterModal';
import { DateInvitationModal } from './components/DateInvitationModal';
import { ConfettiTrigger } from './components/ConfettiTrigger';
import { Footer } from './components/Footer';
import { soundFx } from './components/AudioEffects';
import { Sparkles, CalendarHeart } from 'lucide-react';

export function App() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerData | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const handleOpenLetter = (flower: FlowerData) => {
    setSelectedFlower(flower);
    setIsLetterOpen(true);
    soundFx.playOpenLetter();
  };

  const handleCloseLetter = () => {
    setIsLetterOpen(false);
  };

  const handleOpenDateModal = () => {
    soundFx.playSubtleChime();
    setIsDateModalOpen(true);
  };

  const handleExploreClick = () => {
    soundFx.playSubtleChime();
    const element = document.getElementById('ramo-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-nightBg">
      {/* Interactive 60fps canvas petals */}
      <BackgroundPetals />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <HeroSection onExploreClick={handleExploreClick} />

        <FlowerGrid onOpenLetter={handleOpenLetter} />

        {/* Dedicated Date Proposal Callout Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
          <div className="rounded-3xl glass-golden p-6 sm:p-8 text-center relative overflow-hidden border border-amber-300/50 shadow-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-950 mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Una propuesta especial
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              ¿Nos vemos en persona? 🍦
            </h3>
            <p className="text-sm sm:text-base text-slate-200/90 max-w-lg mx-auto font-sans mb-5 leading-relaxed">
              Ya que no nos hemos visto desde la fiesta de mi prima, tengo una propuesta para ti para este miércoles en la tarde.
            </p>
            <button
              onClick={handleOpenDateModal}
              className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-nightBg shadow-lg shadow-amber-500/25 active:scale-95 transition-all touch-manipulation"
            >
              <CalendarHeart className="w-4 h-4 text-nightBg" />
              <span>Ver propuesta de salida 🍦</span>
            </button>
          </div>
        </section>

        <TraditionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Letter Modal for Lorena */}
      <LetterModal
        isOpen={isLetterOpen}
        letter={selectedFlower ? selectedFlower.letter : null}
        onClose={handleCloseLetter}
        onOpenDateModal={handleOpenDateModal}
      />

      {/* Date Invitation Modal with EmailJS */}
      <DateInvitationModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
      />

      {/* Floating Confetti Button */}
      <ConfettiTrigger variant="floating" />
    </div>
  );
}

export default App;
