module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "70vh": "75vh",
        "65vh": "65vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "35vh": "35vh",
        "30vh": "30vh",
       },
       fontSize: {
         "xxs": "0.60rem"
       },
       backgroundImage: theme => ({
        'intro-bg': "url('/public/adam.jpg')",
       }),
       zIndex: {
        'p10': '-10',
       }
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
