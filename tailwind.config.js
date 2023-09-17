/** @type {import('tailwindcss').Config} */
export default {
  content: ["./server/routes/app_proxy/tailwind/main.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
      },
      width: {
        '192': '48rem'
      },
      fontFamily: {
        'roboto': ['Roboto', 'Arial', 'Helvetica',' sans-serif']
      },

      borderWidth: {
        '1': '1px'
      },
      screens: {
        'modal-size': {'max': '40rem' }

      },
    },
  },
  plugins: [],
}

