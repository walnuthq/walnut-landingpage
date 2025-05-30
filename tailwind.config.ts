import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',     
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.ts',                            
  ],
  safelist: [
    'font-sans',
    'font-display',
    'var(--font-inter)',
    'var(--font-lexend)',
  ],
  theme: {
    fontSize: {
      '2xs': '.6875rem',
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        BLUE: 'var(--BLUE)',
        'DARK-BLUE': 'var(--DARK-BLUE)',
        'DARK-BLUE-2': 'var(--DARK-BLUE-2)',
        GREY: 'var(--GREY)',
        'GREY-2': 'var(--GREY-2)',
        WHITE: 'var(--WHITE)',
        'WHITE-2': 'var(--WHITE-2)',
        BLACK: 'var(--BLACK)',
        'BLACK-2': 'var(--BLACK-2)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      opacity: {
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
  plugins: [
    formsPlugin,
    headlessuiPlugin,
    require('@tailwindcss/typography'),
  ],
}

export default config
