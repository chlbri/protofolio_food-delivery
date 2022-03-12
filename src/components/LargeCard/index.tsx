import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';
import Person from './Person';

type Props = {
  title?: string;
  src?: string;
} & Margin;

const LargeCard: FC<Props> = ({
  title = 'Riz thaïlandais à la sauce rouge',
  src,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  const tailwind = useTailwind();

  return (
    <View style={{ marginBottom, marginTop, marginLeft, marginRight }}>
      <View
        style={[
          tailwind(
            'bg-black w-card_xl rounded-card_xl aspect-2/1 shadow-card_lg',
          ),
        ]}
      >
        {src}
      </View>
      <View style={tailwind('mt-[21px] ml-[13px]')}>
        <Text style={tailwind('text-title text-white')}>{title}</Text>
        <Person />
      </View>
    </View>
  );
};

export default LargeCard;
