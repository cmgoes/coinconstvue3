module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          fontSize: {
            '10': ['10px', '12px'],
            '11': ['11px', '13px'],
            '12': ['12px', '14px'],
            '14': ['14px', '17px'],
            '20': ['20px', '24px'],
          },
          maxWidth: {
            'xxs': '18rem',
          },
          colors: {
            'black-light': '#1E1F23',
            'yellow-darken': '#D3B376',
            'red-darken': '#E75F61',
            'red-lighten': 'rgba(231, 95, 97, 0.1)',
            'gray-darken': '#6E87A5',
            'gray-lighter': 'rgba(110, 135, 165, 0.2)',
            'gray-light': 'rgba(110, 135, 165, 0.1)',
            'green-darken': '#92CB5A',
            'green-lighten': 'rgba(146, 203, 90, 0.3)',
            'green-light': 'rgba(146, 203, 90, 0.1)',
            'white-light': 'rgba(255, 255, 255, 0.1)'
          },
          container: {
            center: true,
            padding: {
              DEFAULT: '28px',
            },
            screens: {
              'xs': "100%",
              'sm': "100%",
              'md': "100%",
              'lg': "100%",
              'xl': "100%",
              '2xl': "100%",
              '3xl': "100%",
              '4xl': "100%",
              '5xl': "100%",  
            }
          },
          screens: {
            'xs': {'max': '575px'},
            'sm': {'min': '576px'},
            'md': {'min': '768px'},
            'lg': {'min': '992px'},
            'xl': {'min': '1200px'},
            '2xl': {'min': '1400px'},
            '3xl': {'min': '1600px'},
            '4xl': {'min': '1800px'},
            '5xl': {'min': '1920px'},
          },
          width: {
            '1/10': '10%',
            '2/10': '20%',
            '3/10': '30%',
            '4/10': '40%',
            '5/10': '50%',
            '6/10': '60%',
            '7/10': '70%',
            '8/10': '80%',
            '9/10': '90%',
          },
          fontFamily: {
            'SF': 'SF Pro Display Regular',
            'SFMedium': 'SF Pro Display Medium',
            'SFBold': 'SF Pro Display Bold'
          }
        }
      }
    },
    autoprefixer: {}
  }
}
