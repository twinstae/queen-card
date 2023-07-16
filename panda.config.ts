import { defineConfig } from "@pandacss/dev"

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/app/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Used to create reusable config presets for your project or team.
	presets: ["@pandacss/dev/presets"],
	// Useful for theme customization
	theme: {
		extend: {}
	},
	// The framework to use for generating supercharged elements.
	jsxFramework: "react",


	// The output directory for your css system
	outdir: "styled-system",


})