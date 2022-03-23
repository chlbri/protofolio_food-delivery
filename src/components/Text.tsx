import { FC } from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import { FontFamilies } from '../fonts';

type Props = {
  style?: StyleProp<TextStyle>;
  fontFamily?: FontFamilies;
};

const Text: FC<Props> = ({
  style,
  fontFamily = 'AvenirNext_regular',
  children,
}) => {
  return <RNText style={[style, { fontFamily }]}>{children}</RNText>;
};

export default Text;
