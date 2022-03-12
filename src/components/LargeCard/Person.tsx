import { FC } from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';
import Avatar from '../Avatar';
import Hearts from '../Hearts';

type Props = {
  name?: string;
  note?: number;
  bestComment?: string;
  children?: never;
} & Margin;

const Person: FC<Props> = ({
  name = 'Jennifer',
  // note,
  bestComment = 'L’un des meilleurs plats que j’ai mangé',
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const tailwind = useTailwind();

  return (
    <View
      style={[
        tailwind('pt-[3px]'),
        { marginTop, marginRight, marginBottom, marginLeft },
      ]}
    >
      <Text style={tailwind('text-base text-white')}>{name}</Text>
      <View style={tailwind('mt-[9px] flex flex-row')}>
        <Avatar />
        <View style={tailwind('ml-[11px]')}>
          <Hearts />
          <Text style={tailwind('text-sm text-bgray mt-px')}>
            {bestComment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Person;
