import React, { FC } from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';
import Person from './Person';

type Props = {
  title?: string;
  src?: string;
  name?: string;
  tags?: string[];
  children?: never;
} & Margin;

const BaseCard: FC<Props> = ({
  name = 'Alfred',
  tags = ['Pâtes', 'Poisson'],
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
            'bg-bgray w-card rounded-card aspect-3/2 shadow-card_sm',
          ),
        ]}
      >
        {src}
      </View>
      <Person marginTop={10} marginLeft={13} {...{ name, tags }} />
    </View>
  );
};

export default BaseCard;
