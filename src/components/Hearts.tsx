import { FC } from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../types/ui';
import Heart, { HeartRatio } from './Heart';

type Props = {
  ratios?: [HeartRatio, HeartRatio, HeartRatio, HeartRatio, HeartRatio];
} & Margin;

const Hearts: FC<Props> = ({
  ratios = ['full', 'full', 'full', 'empty', 'empty'] as const,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind('flex flex-row'),
        { marginTop, marginRight, marginBottom, marginLeft },
      ]}
    >
      <Heart ratio={ratios[0]} marginRight={3} />
      <Heart ratio={ratios[1]} marginRight={3} />
      <Heart ratio={ratios[2]} marginRight={3} />
      <Heart ratio={ratios[3]} marginRight={3} />
      <Heart ratio={ratios[4]} />
    </View>
  );
};

export default Hearts;
