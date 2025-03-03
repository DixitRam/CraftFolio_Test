/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: 'true',
			padding: '15px'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		fontFamily: {
			primary:  ['JetBrains Mono', 'Monospace'],
		},
		extend: {
			colors: {
				primary: "#1c1c22",
				accent: {
					DEFAULT: 'hsl(75,94%, 57%)',
					hover: 'hsl(90,94%, 57%)',
				}
			}
		},
	},
	plugins: [require("tailwindcss-animate")]
}

