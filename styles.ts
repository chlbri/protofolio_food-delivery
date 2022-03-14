import { Utilities } from 'tailwind-rn';

const _styles: Utilities = {
  'shadow-card_lg': {
    style: {
      shadowOpacity: 28 / 100,
      shadowColor: 'black',
      shadowOffset: { width: -2, height: 10 },
      shadowRadius: 2,
      elevation: 13,
    },
  },
  'shadow-card_sm': {
    style: {
      shadowOpacity: 28 / 100,
      shadowColor: 'black',
      shadowOffset: { width: -2, height: 5 },
      shadowRadius: 3,
      elevation: 6,
    },
  },
  'aspect-3/2': {
    style: {
      aspectRatio: 3 / 2,
    },
  },
  'aspect-2/1': {
    style: {
      aspectRatio: 2,
    },
  },
  'aspect-1': {
    style: {
      aspectRatio: 1,
    },
  },
};

export default _styles;
