export type FlowerType = 'girasol' | 'rosa' | 'tulipan' | 'margarita';

export interface Letter {
  id: string;
  flowerId: FlowerType;
  flowerName: string;
  title: string;
  subtitle: string;
  poeticQuote: string;
  bodyParagraphs: string[];
  closing: string;
  signature: string;
  bgGlow: string;
}

export interface FlowerData {
  id: FlowerType;
  name: string;
  scientificName: string;
  meaning: string;
  quote: string;
  description: string;
  tag: string;
  colorScheme: {
    primary: string;
    secondary: string;
    glow: string;
    badgeBg: string;
  };
  letter: Letter;
}

export type SoundEffect = 'bloom' | 'openLetter' | 'sparkle' | 'chime' | 'softChord';
