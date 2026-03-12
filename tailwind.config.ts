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
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        accent: '#0e7490',
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
              color: '#0e7490',
              fontWeight: '700',
            },
            h2: {
              color: '#0e7490',
              fontWeight: '600',
            },
            h3: {
              color: '#0e7490',
              fontWeight: '600',
            },
            a: {
              color: '#0e7490',
              '&:hover': {
                color: '#155e75',
              },
            },
            strong: {
              color: '#0e7490',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
