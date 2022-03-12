import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Avatar from './Avatar';
import Hearts from './Hearts';

type Props = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

const LargeCard: FC<Props> = ({
  children,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  const tailwind = useTailwind();

  return (
    <View style={{ marginBottom, marginTop, marginLeft, marginRight }}>
      <View
        style={[tailwind('bg-black w-card_xl rounded-card_xl aspect-2*1')]}
      >
        {children}
      </View>
      <View style={tailwind('mt-[21px] ml-[8px]')}>
        <Text style={tailwind('text-title text-white')}>
          Riz thaïlandais à la sauce rouge
        </Text>
        <View style={tailwind('pt-[3px]')}>
          <Text style={tailwind('text-base text-white')}>Jennifer</Text>
          <View style={tailwind('mt-[9px] flex flex-row')}>
            <Avatar />
            <View style={tailwind('w-[11px]')} />
            <View style={tailwind('')}>
              <Hearts />
              <Text style={tailwind('text-sm text-bgray mt-px')}>
                L’un des meilleurs plats que j’ai...
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LargeCard;
