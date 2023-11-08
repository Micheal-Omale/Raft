/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				"cod-gray": "#070606",
				"forest-green": "#2B892E",
				emerald: "#48D64C",
				"mine-shaft": "#3D3D3D",
				silver: "#BDBDBD",
			},
		},
    fontFamily: {
      Regular: ['"SF Pro Regular"'],
      Medium: ['"SF Pro Medium"'],
      SemiBold: ['"SF Pro Semibold"'],
      Bold: ['"SF Pro Bold"'],
    },
	},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}