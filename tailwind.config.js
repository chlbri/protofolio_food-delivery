/* eslint-disable @typescript-eslint/no-var-requires */
const theme = require('./_theme.ts');

module.exports = {
  content: ['src/**/*.tsx'],
  theme,
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  plugins: [require('tailwind-scrollbar-hide')],
};
