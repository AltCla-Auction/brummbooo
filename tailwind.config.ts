import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E2A38',
          light: '#2D3E52',
        },
        orange: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        cream: '#FFF7E6',
        surface: '#F5F5F5',
        primary: {
          50: '#FFF7E6',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: [
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#374151',
            lineHeight: '1.8',
            h1: {
              color: '#1E2A38',
              fontWeight: '700',
            },
            h2: {
              color: '#1E2A38',
              fontWeight: '600',
            },
            h3: {
              color: '#1E2A38',
              fontWeight: '600',
            },
            a: {
              color: '#D97706',
              '&:hover': {
                color: '#B45309',
              },
            },
            strong: {
              color: '#1E2A38',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
