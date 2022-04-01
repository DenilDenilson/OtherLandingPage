module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },
    extend: {
      colors: {
        //### Primary

        'Red': 'hsl(0, 100%, 68%)',

        //### Neutral

        'Very-Dark-Blue': 'hsl(230, 29%, 20%)',
        'Dark-Grayish-Blue': 'hsl(230, 11%, 40%)',
        'Grayish-Blue': 'hsl(231, 7%, 65%)',
        'Light-Grayish-Blue': 'hsl(207, 33%, 95%)',
      },

      fontFamily: {
        // font-family: 'Barlow', sans-serif;
        // font-family: 'Barlow Condensed', sans-serif;
        'Barlow': ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow-Condensed', 'sans'],
      },
    },
  },
  plugins: [],
}