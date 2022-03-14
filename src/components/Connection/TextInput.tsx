import { FC } from 'react';
import { TextInput as RN_TextInput } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Margin } from '../../types/ui';

type Props = { placeholder?: string; children?: never } & Margin;

const TextInput: FC<Props> = ({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  placeholder = 'Login...',
}) => {
  const tailwind = useTailwind();
  return (
    <RN_TextInput
      style={[
        tailwind(
          'shadow-card_sm bg-white w-[292px] max-w-11/12 h-[40px] px-[25px] pb-[2px] rounded-card_xl text-title text-native_blue',
        ),
        { marginBottom, marginTop, marginLeft, marginRight },
      ]}
      placeholder={placeholder}
      placeholderTextColor={tailwind('text-bgray').color as any}
    />
  );
};

export default TextInput;
