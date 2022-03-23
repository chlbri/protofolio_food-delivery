export const AVENIR_NEXT = {
  AvenirNext_bold: require('../assets/fonts/AvenirNext/AvenirNext-Bold.ttf'),
  AvenirNext_boldItalic: require('../assets/fonts/AvenirNext/AvenirNext-BoldItalic.ttf'),
  AvenirNext_heavy: require('../assets/fonts/AvenirNext/AvenirNext-Heavy.ttf'),
  AvenirNext_heavyItalic: require('../assets/fonts/AvenirNext/AvenirNext-HeavyItalic.ttf'),
  AvenirNext_italic: require('../assets/fonts/AvenirNext/AvenirNext-Italic.ttf'),
  AvenirNext_medium: require('../assets/fonts/AvenirNext/AvenirNext-Medium.ttf'),
  AvenirNext_mediumItalic: require('../assets/fonts/AvenirNext/AvenirNext-MediumItalic.ttf'),
  AvenirNext_regular: require('../assets/fonts/AvenirNext/AvenirNext-Regular.ttf'),
  AvenirNext_semiBold: require('../assets/fonts/AvenirNext/AvenirNext-SemiBold.ttf'),
  AvenirNext_semiBoldItalic: require('../assets/fonts/AvenirNext/AvenirNext-SemiBoldItalic.ttf'),
  AvenirNext_ultraLight: require('../assets/fonts/AvenirNext/AvenirNext-UltraLight.ttf'),
  AvenirNext_ultraLightItalic: require('../assets/fonts/AvenirNext/AvenirNext-UltraLightItalic.ttf'),
} as const;

export const FONTS = { ...AVENIR_NEXT } as const;

export type FontFamilies = keyof typeof FONTS;
