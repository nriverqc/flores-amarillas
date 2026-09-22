import { FlowerData } from '../types';

export const flowersData: FlowerData[] = [
  {
    id: 'girasol',
    name: 'Girasol Radiante',
    scientificName: 'Helianthus annuus',
    meaning: 'Flores eternas que no se marchitan',
    quote: '«Estas las creé especialmente para ti en código, y lo mejor es que no se van a marchitar nunca.»',
    description: 'Creadas especialmente para sacarte una sonrisa y recordarte lo especial que eres para mí.',
    tag: 'Flores eternas',
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
      title: 'Flores eternas',
      subtitle: '21 de Septiembre • Creadas para ti',
      poeticQuote: '«No quería por nada del mundo que te quedaras sin tus flores amarillas.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'No quería por nada del mundo que te quedaras sin tus flores amarillas este 21 de septiembre. Quizás no son de esas que se compran en la esquina y se secan a la semana; estas las creé especialmente para ti en código, y lo mejor es que no se van a marchitar nunca. Quería sacarte una sonrisa y recordarte lo especial que eres para mí.'
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
    meaning: 'Interés sincero y real',
    quote: '«Aunque a veces los tiempos no cuadren tanto como quisiera, estás muy presente.»',
    description: 'El gusto de saber de ti, contarnos cómo estuvo el día y mantener la conexión.',
    tag: 'Interés sincero',
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
      title: 'Interés sincero',
      subtitle: '21 de Septiembre • En el día a día',
      poeticQuote: '«Me encanta contarte cómo estuvo mi día, escuchar el tuyo y saber de ti.»',
      bodyParagraphs: [
        'Lorena,',
        'Sé que a veces me demoro en responder o que la conversación no fluye perfecto todos los días por nuestras ocupaciones, pero te prometo que mi interés por ti es totalmente real. Me encanta contarte cómo estuvo mi día, escuchar el tuyo y saber de ti. Aunque a veces los tiempos no cuadren tanto como quisiera, estás muy presente.'
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
    meaning: 'Desde la fiesta y ganas de vernos',
    quote: '«Tengo muchas ganas de que organicemos nuestra primera salida solo los dos.»',
    description: 'La ilusión de volver a vernos en persona y pasar un rato tan bacano como esa noche.',
    tag: 'Desde la fiesta',
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
      title: 'Desde la fiesta',
      subtitle: '21 de Septiembre • Ganas de vernos',
      poeticQuote: '«Hablar contigo se ha vuelto una de mis cosas favoritas.»',
      bodyParagraphs: [
        'Hola Lorena,',
        'Parece increíble que no nos hayamos vuelto a ver en persona desde la fiesta de mi prima, pero hablar contigo se ha vuelto una de mis cosas favoritas. Tengo muchas ganas de que organizemos nuestra primera salida solo los dos y pasar un rato tan bacano como esa noche.'
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
    meaning: 'Hecho a tu medida, paso a paso',
    quote: '«Construí este rincón digital pensando únicamente en ti.»',
    description: 'Avanzando paso a paso, disfrutando el proceso y con ganas de compartir más.',
    tag: 'Hecho a tu medida',
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
      title: 'Hecho a tu medida',
      subtitle: '21 de Septiembre • Paso a paso',
      poeticQuote: '«Para darte un detalle diferente que demuestre lo mucho que me importa seguir conociéndote.»',
      bodyParagraphs: [
        'Lorena,',
        'Construí este rincón digital pensando únicamente en ti, para darte un detalle diferente que demuestre lo mucho que me importa seguir conociéndote. Vamos paso a paso, disfrutando el proceso y con muchas ganas de compartir más momentos juntos. Disfruta mucho tus flores.'
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
  flowerBoyQuote: '«Flores que creé especialmente para ti en código y que nunca se van a marchitar.»',
};
