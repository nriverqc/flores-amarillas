import { FlowerData } from '../types';

export const flowersData: FlowerData[] = [
  {
    id: 'girasol',
    name: 'Girasol Radiante',
    scientificName: 'Helianthus annuus',
    meaning: 'Un detalle bonito, alegría y buena vibra',
    quote: '«Desde que nos conocimos en la reunión de mi prima me caíste súper bien.»',
    description: 'El símbolo indiscutible de este día: buena energía, luz y el gusto de sacarte una sonrisa.',
    tag: 'El detalle',
    colorScheme: {
      primary: '#f59e0b',
      secondary: '#fbbf24',
      glow: 'rgba(245, 158, 11, 0.45)',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
    letter: {
      id: 'carta-girasol',
      flowerId: 'girasol',
      flowerName: 'Girasol Radiante',
      title: 'El detalle',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Espero que te gusten tanto como a mí me gusta hablar contigo.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'No me podía quedar sin mandarte tus flores amarillas este 21 de septiembre. Desde que nos conocimos en la reunión de mi prima me caíste súper bien y no quería dejar pasar este día sin sacarte una sonrisa. Espero que te gusten tanto como a mí me gusta hablar contigo.'
      ],
      closing: 'Con cariño,',
      signature: 'Nicolas Rivera ✨',
      bgGlow: 'from-amber-500/20 via-yellow-500/10 to-transparent'
    }
  },
  {
    id: 'rosa',
    name: 'Rosa Ámbar',
    scientificName: 'Rosa canina aurea',
    meaning: 'Buena vibra, fluidez y espontaneidad',
    quote: '«Me parece genial lo fluido y chévere que ha sido hablar contigo estos días.»',
    description: 'Representa la buena energía y la frescura de hablar con alguien especial sin afanes.',
    tag: 'La vibra',
    colorScheme: {
      primary: '#eab308',
      secondary: '#fef08a',
      glow: 'rgba(234, 179, 8, 0.4)',
      badgeBg: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
    },
    letter: {
      id: 'carta-rosa',
      flowerId: 'rosa',
      flowerName: 'Rosa Ámbar',
      title: 'La vibra',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Me encanta la buena energía que transmites y lo espontáneo que ha sido todo.»',
      bodyParagraphs: [
        'Lorena,',
        'Me parece genial lo fluido y chévere que ha sido hablar contigo estos días. Aunque apenas nos estamos conociendo, la paso muy bien cada vez que charlamos. Me encanta la buena energía que transmites y lo espontáneo que ha sido todo.'
      ],
      closing: 'Con cariño,',
      signature: 'Nicolas Rivera ✨',
      bgGlow: 'from-yellow-500/20 via-amber-400/10 to-transparent'
    }
  },
  {
    id: 'tulipan',
    name: 'Tulipán Solar',
    scientificName: 'Tulipa gesneriana',
    meaning: 'Alegrar los días, buena energía y gratas sorpresas',
    quote: '«Desde ese día ha sido una sorpresa muy bacana empezar a conocerte.»',
    description: 'Para quienes traen buena vibra y hacen que cada día tenga un toque diferente.',
    tag: 'El motivo',
    colorScheme: {
      primary: '#fbbf24',
      secondary: '#fde68a',
      glow: 'rgba(251, 191, 36, 0.4)',
      badgeBg: 'bg-amber-400/15 text-amber-200 border-amber-400/30',
    },
    letter: {
      id: 'carta-tulipan',
      flowerId: 'tulipan',
      flowerName: 'Tulipán Solar',
      title: 'El motivo',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Dicen que el 21 de septiembre se regalan flores amarillas a las personas que le alegran a uno los días.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'Dicen que el 21 de septiembre se regalan flores amarillas a las personas que le alegran a uno los días y que traen buena vibra. Y la verdad, desde ese día ha sido una sorpresa muy bacana empezar a conocerte. Que tengas un día increíble.'
      ],
      closing: 'Con cariño,',
      signature: 'Nicolas Rivera ✨',
      bgGlow: 'from-amber-400/20 via-yellow-300/10 to-transparent'
    }
  },
  {
    id: 'margarita',
    name: 'Margarita Silvestre',
    scientificName: 'Euryops pectinatus',
    meaning: 'Interés sincero, risas y buenos momentos',
    quote: '«Sinceramente me interesa mucho seguir conociéndote y compartir más momentos juntos.»',
    description: 'La espontaneidad y las ganas de seguir compartiendo risas y ver qué va pasando.',
    tag: 'El interés',
    colorScheme: {
      primary: '#fcd34d',
      secondary: '#fffbeb',
      glow: 'rgba(252, 211, 77, 0.4)',
      badgeBg: 'bg-yellow-300/15 text-yellow-200 border-yellow-300/30',
    },
    letter: {
      id: 'carta-margarita',
      flowerId: 'margarita',
      flowerName: 'Margarita Silvestre',
      title: 'El interés',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Sinceramente me interesa mucho seguir conociéndote, compartir más momentos juntos y ver qué va pasando.»',
      bodyParagraphs: [
        'Lorena,',
        'Ojalá te haya gustado este detalle diferente. Sinceramente me interesa mucho seguir conociéndote, compartir más momentos juntos y ver qué va pasando. Disfruta mucho tus flores.'
      ],
      closing: 'Con cariño,',
      signature: 'Nicolas Rivera ✨',
      bgGlow: 'from-yellow-300/20 via-amber-200/10 to-transparent'
    }
  }
];

export const generalCelebrationData = {
  title: 'Flores Amarillas para Lorena 🌼',
  dateBadge: '21 de Septiembre',
  heroSubtitle: 'Un pequeño detalle para este 21 de septiembre',
  flowerBoyQuote: '«Desde que nos conocimos en la reunión de mi prima me caíste súper bien.»',
};
