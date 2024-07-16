import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				violet: '#7C71FF',
				violet2: '#6456FF',
				light: '#E4E4E7',
				black: '#121826',
				black2: '#212936',
				gray: '#6C727F',
				darkGray: '#394150',
				error: '#FE3636',
				success: '#37B24D',
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgb(255, 255, 255/ 0.05)',
				md: '0 4px 6px -1px rgb(255, 255, 255/ 0.1), 0 2px 4px -2px rgb(255, 255, 255/ 0.1)',
				lg: '0 10px 15px -3px rgb(255, 255, 255/ 0.12), 0 4px 6px -4px rgb(255, 255, 255/ 0.12)',
			},
		},
		screens: {
			mobile: '420px',
			lgMobile: '480px',
			md: '640px',
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
		},
	},
	plugins: [],
}

export default config
