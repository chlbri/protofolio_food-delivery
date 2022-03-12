/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      bgray: '#808080',
      native_blue: '#1a1b20',
      accent: '#e59b06',
    },
    fontSize: {
      h1: ['36', { lineHeight: '51', letterSpacing: '0' }],
      h2: ['24', { lineHeight: '34', letterSpacing: '0' }],
      title: ['18', { lineHeight: '25', letterSpacing: '0' }],
      h3: ['16', { lineHeight: '23', letterSpacing: '0' }],
      base: ['14', { lineHeight: '20', letterSpacing: '0' }],
      sm: ['12', { lineHeight: '17', letterSpacing: '0' }],
      xs: ['10', { lineHeight: '14', letterSpacing: '0' }],
    },
    extend: {
      width: {
        avatar: 45,
        card_xl: 312,
      },

      padding: {
        58: '58px',
      },
      borderRadius: {
        card_xl: 12,
        card_sm: 10,
      },
    },
  },
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },

        // #region For react Native
        'aspect-4*3': {
          aspectRatio: 4 / 3,
        },
        'aspect-2*1': {
          aspectRatio: 2 / 1,
        },
        'aspect-1': {
          aspectRatio: 1,
        },
        // #endregion
      });
    }),
  ],
};
