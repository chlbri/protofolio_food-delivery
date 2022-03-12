import React, { FC } from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Avatar: FC = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={[
        tailwind(
          'rounded-full border-2 bg-white border-bgray w-avatar aspect-1',
        ),
        // { aspectRatio: 1 },
      ]}
    ></View>
  );
};

export default Avatar;
