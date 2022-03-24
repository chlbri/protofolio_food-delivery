/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    colors: {
      black: '#000000',
      white: '#eeeeee',
      bgray: '#808080',
      native_blue: '#1a1b20',
      accent: '#e59b06',
    },
    fontSize: {
      h1: 36,
      h2: 24,
      title: 18,
      h3: 16,
      base: 14,
      sm: 12,
      xs: 10,
    },
    extend: {
      width: {
        avatar: 45,
        card_xl: 312,
        card: 195,
      },
      maxWidth: {
        '4/5': '80%',
        '11/12': `${(100 * 11) / 12}%`,
      },
      borderRadius: {
        card_xl: 12,
        card: 10,
      },
    },
  },
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  plugins: [require('tailwind-scrollbar-hide')],
};
