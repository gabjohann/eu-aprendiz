const { violet, blackA, mauve, green, gray } = require('@radix-ui/colors')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				lightBlue: '#02007B',
				darkBlue: '#0B0B32',
				orange: '#ED921F',
				...mauve,
				...violet,
				...green,
				...blackA,
				...gray,
			},
			backgroundImage: {
				videoCard: "url('./public/bg-card.png')",
			},
			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				contentShow: {
					from: {
						opacity: '0',
						transform: 'translate(-50%, -48%) scale(0.96)',
					},
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
				},
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
}
