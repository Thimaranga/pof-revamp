import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens pulled directly from the Figma file
        gold: {
          DEFAULT: '#C6A84B',
          50: '#FBF7EC',
          100: '#F5EEDC',
          200: '#EADFC1',
          300: '#DDCB9C',
          400: '#D2BA7C',
          500: '#C6A84B',
          600: '#AD8F3B',
          700: '#8A7130',
          800: '#635123',
          900: '#453917',
        },
        ink: {
          DEFAULT: '#1C1C1C',
          soft: '#5E5A54',
        },
        cream: {
          DEFAULT: '#F5F2EC',
          border: '#EADFD3',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#141414',
          'dark-alt': '#1C1B19',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      maxWidth: {
        content: '1600px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
