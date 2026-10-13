/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: { center: true, padding: "1rem" },
		extend: {
			colors: {
				// ARDASYSMIC brand tokens
				cyan: "#00A8FF",
				deepblue: "#1B4B8F",
				orange: "#FF7F00",
				amber: "#F26B1D",
				ink: "#05070F",
				ink2: "#0A0E1A",
				// shadcn semantic surface (dark)
				background: "#05070F",
				foreground: "#E6E9F0",
				card: "#0A0E1A",
				"card-foreground": "#E6E9F0",
				primary: "#00A8FF",
				"primary-foreground": "#05070F",
				secondary: "#FF7F00",
				"secondary-foreground": "#05070F",
				muted: "#141A25",
				"muted-foreground": "#8BA1B3",
				accent: "#FF7F00",
				"accent-foreground": "#05070F",
				destructive: "#FF7F00",
				"destructive-foreground": "#05070F",
				border: "#1F3144",
				input: "#1F3144",
				ring: "#00A8FF",
				"ring-offset-background": "#05070F",
			},
			fontFamily: {
				display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
				body: ["Inter", "system-ui", "sans-serif"],
				mono: ["Fira Code", "Fira Mono", "ui-monospace", "monospace"],
			},
			animation: {
				// Brand signature
				"pulse-ring": "pulse-ring 2.2s linear infinite",
				"radar": "radar 3s ease-in-out infinite",
				// Magic UI
				"marquee": "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				"blink-cursor": "blink-cursor 1.2s step-end infinite",
				"shine": "shine var(--duration) infinite linear",
				"shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
				"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
				"orbit": "orbit calc(var(--duration)*1s) linear infinite",
				"meteor": "meteor 5s linear infinite",
			},
			keyframes: {
				"pulse-ring": {
					"0%": { transform: "scale(0.85)", opacity: "0.6" },
					"70%": { transform: "scale(2.2)", opacity: "0" },
					"100%": { transform: "scale(0.85)", opacity: "0" },
				},
				"radar": {
					"0%": { opacity: "0.6" },
					"50%": { opacity: "0.15" },
					"100%": { opacity: "0.6" },
				},
				"marquee": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				"blink-cursor": {
					"0%, 49%": { opacity: "1" },
					"50%, 100%": { opacity: "0" },
				},
				"shine": {
					"0%": { "background-position": "0% 0%" },
					"50%": { "background-position": "100% 100%" },
					to: { "background-position": "0% 0%" },
				},
				"shimmer-slide": {
					to: { transform: "translate(calc(100cqw - 100%), 0)" },
				},
				"spin-around": {
					"0%": { transform: "translateZ(0) rotate(0)" },
					"15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
					"65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
					"100%": { transform: "translateZ(0) rotate(360deg)" },
				},
				"orbit": {
					"0%": {
						transform: "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
					},
					"100%": {
						transform: "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
					},
				},
				"meteor": {
					"0%": {
						transform: "rotate(var(--angle)) translateX(0)",
						opacity: "1",
					},
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(var(--angle)) translateX(-500px)",
						opacity: "0",
					},
				},
			},
			transitionDelay: {
				700: "700ms",
				1000: "1000ms",
			},
		},
	},
	plugins: [],
};
