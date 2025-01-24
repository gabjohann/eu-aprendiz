/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				lightBlue: '#02007B',
				darkBlue: '#0B0B32',
				orange: '#ED921F',
			},
			backgroundImage: {
				videoCard: "url('./src/assets/bg-card.png')",
			},
		},
	},
	plugins: [],
}
