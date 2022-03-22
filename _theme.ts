const theme = {
  colors: {
    black: '#000000',
    white: '#eeeeee',
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
} as const;

export default theme;
