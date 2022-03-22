import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import useNavigation from '../../hooks/useNavigation';
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
  const { navigate } = useNavigation();

  return (
    <View style={{ marginBottom, marginTop, marginLeft, marginRight }}>
      <Pressable
        style={[
          tailwind(
            'bg-black w-card_xl rounded-card_xl aspect-2/1 shadow-card_lg',
          ),
        ]}
        onPress={() => {
          navigate('Details');
        }}
      >
        {src}
      </Pressable>
      <View style={tailwind('mt-[21px] ml-[13px]')}>
        <Text style={tailwind('text-title text-white')}>{title}</Text>
        <Person />
      </View>
    </View>
  );
};

export default LargeCard;
