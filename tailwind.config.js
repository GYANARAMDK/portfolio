export default   {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "white", // Add your custom background color here
      },
      boxShadow: {
        'all-sides': '0 4px 6px rgba(181, 141, 179, 0.56), 0 -4px 6px rgba(181, 141, 179, 0.56), 4px 0 6px rgba(181, 141, 179, 0.56), -4px 0 6px rgba(181, 141, 179, 0.56)',
      },
    },
  },
  plugins: [],
};
