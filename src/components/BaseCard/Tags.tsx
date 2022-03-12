import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';

type Props = {
  tags: string[];
} & Margin;

function taggify(tag: string) {
  return [tag && tag.trim() !== '', `#${tag}`] as const;
}

const Tags: FC<Props> = ({
  tags,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const tailwind = useTailwind();
  const [isTag1, tag1] = taggify(tags[0]);
  const [isTag2, tag2] = taggify(tags[1]);
  const [isTag3, tag3] = taggify(tags[2]);

  return (
    <View
      style={[
        tailwind('flex flex-row max-w-full'),
        { marginTop, marginRight, marginBottom, marginLeft },
      ]}
    >
      {isTag1 && (
        <Text style={tailwind('text-xs text-bgray')}>{tag1}</Text>
      )}
      {isTag2 && (
        <Text style={tailwind('text-xs text-bgray ml-[4px]')}>{tag2}</Text>
      )}
      {isTag3 && (
        <Text style={tailwind('text-xs text-bgray ml-[4px]')}>{tag3}</Text>
      )}
    </View>
  );
};

export default Tags;
