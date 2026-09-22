import { FlowerData } from '../types';

export const flowersData: FlowerData[] = [
  {
    id: 'girasol',
    name: 'Girasol Radiante',
    scientificName: 'Helianthus annuus',
    meaning: 'Un detalle bonito, alegría y buena vibra',
    quote: '«Que este 21 de septiembre te saque una gran sonrisa e ilumine tu día.»',
    description: 'El símbolo por excelencia de este día: luz, energía positiva y buenos deseos en cada pétalo.',
    tag: 'Un detalle especial',
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
      title: 'Un detalle especial',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«No quería dejar pasar este día sin mandarte un detalle bonito.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'No quería dejar pasar este 21 de septiembre sin mandarte un detalle bonito. Aunque apenas nos estamos conociendo, me parece genial cada conversación y el tiempo que compartimos. Espero que este día te saque una sonrisa y que estas flores amarillas iluminen tu jornada.'
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
    meaning: 'Calma, buena energía y descubrir momentos',
    quote: '«Sin afanes, disfrutando el momento y conociéndonos poco a poco.»',
    description: 'Representa la tranquilidad de coincidir con alguien agradable y disfrutar de las conversaciones sin prisa.',
    tag: 'Paso a paso',
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
      title: 'Paso a paso',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Me gusta mucho la calma y la buena vibra con la que nos hemos ido conociendo.»',
      bodyParagraphs: [
        'Lorena,',
        'Me gusta mucho la calma y la buena vibra con la que nos hemos ido conociendo. Sin afanes, disfrutando el momento y descubriendo lo especial que eres. Gracias por la buena compañía y la buena energía de siempre.'
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
    meaning: 'Nuevos comienzos, sorpresas gratas y entusiasmo',
    quote: '«Empezar a conocerte ha sido una sorpresa muy grata.»',
    description: 'Simboliza los momentos alegres y los comienzos que traen frescura y entusiasmo sincero.',
    tag: 'Un buen comienzo',
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
      title: 'Un buen comienzo',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Desear momentos bonitos y alegres a las personas que aportan algo lindo a tu vida.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'Dicen que regalar flores amarillas el 21 de septiembre es una forma de desear momentos bonitos y alegres a las personas que aportan algo lindo a tu vida. Para mí, empezar a conocerte ha sido una sorpresa muy grata. Que tengas un día increíble.'
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
    meaning: 'Interés sincero, risas compartidas y espontaneidad',
    quote: '«Me motiva mucho seguir conociéndote y compartir risas.»',
    description: 'Sencilla y honesta: el gusto de conectar de forma natural y compartir momentos alegres.',
    tag: 'Interés genuino',
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
      title: 'Interés genuino',
      subtitle: '21 de Septiembre • Día de las Flores Amarillas',
      poeticQuote: '«Sinceramente, me motiva mucho seguir conociéndote y ver a dónde nos lleva este camino.»',
      bodyParagraphs: [
        'Lorena,',
        'Espero que disfrutes mucho esta pequeña experiencia interactiva. Sinceramente, me motiva mucho seguir conociéndote, compartir risas y ver a dónde nos lleva este camino. Disfruta mucho tus flores.'
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
  heroSubtitle: 'Un pequeño detalle para celebrar este 21 de septiembre',
  flowerBoyQuote: '«Un detalle sincero para sacarte una sonrisa en este 21 de septiembre.»',
};
