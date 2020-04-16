let theme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
    },
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect': {
          // backgroundColor: '#F0F4F8',
          boxShadow: theme('boxShadow.default'),
          // border: 'none',
          borderColor: theme('colors.gray.100'),
        },
      },
      dark: {
        'input, textarea, multiselect': {
          backgroundColor: theme('colors.gray.800'),
          boxShadow: theme('boxShadow.default'),
          borderColor: theme('colors.gray.700'),
          '&:focus': {
            // borderColor: theme('colors.purple.500'),
            // boxShadow: `0 0 0 2px ${theme('colors.puprle.400')}`,
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        display: ['ff-meta-serif-web-pro', ...theme.fontFamily.serif],
        sans: ['aktiv-grotesk', ...theme.fontFamily.sans],
        serif: ['New York', ...theme.fontFamily.serif],
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      colors: {
        page: {
          primary: 'var(--page-primary)',
          secondary: 'var(--page-secondary)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          accent: 'var(--fg-accent)',
        },
        purple: {
          '25': '#f0f0ff',
          '50': '#E6E6FF',
          '100': '#C4C6FF',
          '200': '#A2A5FC',
          '300': '#8888FC',
          '400': '#7069FA',
          '500': '#5D55FA',
          '600': '#4D3DF7',
          '700': '#3525E6',
          '800': '#1D0EBE',
          '900': '#0C008C',
        },

        teal: {
          '50': '#EFFCF6',
          '100': '#C6F7E2',
          '200': '#8EEDC7',
          '300': '#65D6AD',
          '400': '#3EBD93',
          '500': '#27AB83',
          '600': '#199473',
          '700': '#147D64',
          '800': '#0C6B58',
          '900': '#014D40',
        },
        gray: {
          '25': '#f8fafc',
          '50': '#F0F4F8',
          '100': '#D9E2EC',
          '200': '#BCCCDC',
          '300': '#9FB3C8',
          '400': '#829AB1',
          '500': '#627D98',
          '600': '#486581',
          '700': '#334E68',
          '800': '#243B53',
          '900': '#102A43',
        },
        'light-blue': {
          '50': '#E3F8FF',
          '100': '#B3ECFF',
          '200': '#81DEFD',
          '300': '#5ED0FA',
          '400': '#40C3F7',
          '500': '#2BB0ED',
          '600': '#1992D4',
          '700': '#127FBF',
          '800': '#0B69A3',
          '900': '#035388',
        },

        red: {
          '50': '#FFE3E3',
          '100': '#FFBDBD',
          '200': '#FF9B9B',
          '300': '#F86A6A',
          '400': '#EF4E4E',
          '500': '#E12D39',
          '600': '#CF1124',
          '700': '#AB091E',
          '800': '#8A041A',
          '900': '#610316',
        },
        yellow: {
          '50': '#FFFBEA',
          '100': '#FFF3C4',
          '200': '#FCE588',
          '300': '#FADB5F',
          '400': '#F7C948',
          '500': '#F0B429',
          '600': '#DE911D',
          '700': '#CB6E17',
          '800': '#B44D12',
          '900': '#8D2B0B',
        },
      },
      boxShadow: {
        float: '0 4px 14px 0 rgba(60,38,110,0.13)',
      },
    },
  },
  variants: {
    shadow: ['active'],
    backgroundColor: ['hover', 'focus', 'responsive', 'active', 'disabled'],
    border: ['responsive'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
