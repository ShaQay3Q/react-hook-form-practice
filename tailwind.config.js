/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		letterSpacing: {
			tightest: "-.075em",
			tighter: "-.05em",
			tight: "-.025em",
			normal: "0",
			wide: ".025em",
			wider: ".05em",
			widest: ".1em",
			widest: ".25em",
			extend: {},
		},
		plugins: [],
	},
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ["./src/**/*.{js,jsx,ts,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };
