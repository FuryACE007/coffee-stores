module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        braga: "'Braga', serif",
        josefinSans_Light: "'JosefinSans-Light', sans",
        josefinSans_Regular: "'JosefinSans-Regular', sans",
        josefinSlab_Light: "'JosefinSlab-Light', serif",
        josefinSlab_Regular: "'JosefinSlab-Regular', serif"
      }
    },
  },
  plugins: [],
}