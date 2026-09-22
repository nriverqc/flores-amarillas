/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        sunflower: {
          light: '#fef08a',
          DEFAULT: '#eab308',
          vibrant: '#facc15',
          deep: '#ca8a04',
          dark: '#854d0e',
        },
        amberGlow: '#ffb703',
        warmAmber: '#fb8500',
        nightBg: '#09080e',
        nightCard: '#13111c',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-gentle': 'sway 4s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at center, rgba(250, 204, 21, 0.18) 0%, rgba(202, 138, 4, 0.05) 50%, transparent 75%)',
        'radial-amber': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.25) 0%, rgba(180, 83, 9, 0.04) 60%, transparent 80%)',
      }
    },
  },
  plugins: [],
}
