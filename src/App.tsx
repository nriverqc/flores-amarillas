import { useState } from 'react';
import { FlowerData } from './types';
import { BackgroundPetals } from './components/BackgroundPetals';
import { HeroSection } from './components/HeroSection';
import { FlowerGrid } from './components/FlowerGrid';
import { TraditionSection } from './components/TraditionSection';
import { LetterModal } from './components/LetterModal';
import { ConfettiTrigger } from './components/ConfettiTrigger';
import { Footer } from './components/Footer';
import { soundFx } from './components/AudioEffects';

export function App() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerData | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleOpenLetter = (flower: FlowerData) => {
    setSelectedFlower(flower);
    setIsLetterOpen(true);
    soundFx.playOpenLetter();
  };

  const handleCloseLetter = () => {
    setIsLetterOpen(false);
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

        <TraditionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Letter Modal for Lorena */}
      <LetterModal
        isOpen={isLetterOpen}
        letter={selectedFlower ? selectedFlower.letter : null}
        onClose={handleCloseLetter}
      />

      {/* Floating Confetti Button */}
      <ConfettiTrigger variant="floating" />
    </div>
  );
}

export default App;
