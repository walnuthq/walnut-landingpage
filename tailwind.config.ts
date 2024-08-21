import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
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
			keyframes: {
        "code-1": {
          "0%": { opacity: '0' },
          "2.5%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        "code-2": {
          "16.2%": { opacity: '0' },
          "18.75%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        "code-3": {
          "32.5%": { opacity: '0' },
          "35%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        "code-4": {
          "48.75%": { opacity: '0' },
          "51.25%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        "code-5": {
          "65%": { opacity: '0' },
          "72.5%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        "code-6": {
          "81.25%": { opacity: '0' },
          "83.75%": { opacity: '1' },
          "97.5%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        line: {
          "0%, 100%": { left: '0', opacity: '0' },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "10%, 40%, 60%, 90%": { opacity: '0' },
          "25%, 75%": { opacity: '1' },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
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
