import { FC } from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';
import Avatar from '../Avatar';
import Text from '../Text';
import Tags from './Tags';

type Props = {
  name: string;
  tags: string[];
  children?: never;
} & Margin;

const Person: FC<Props> = ({
  name,
  tags,
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
      <View style={tailwind('mt-[9px] flex flex-row')}>
        <Avatar />
        <View style={tailwind('ml-[11px] justify-center')}>
          <Text style={tailwind('text-base text-white mb-[3px]')}>
            {name}
          </Text>
          <Tags {...{ tags }} />
        </View>
      </View>
    </View>
  );
};

export default Person;
