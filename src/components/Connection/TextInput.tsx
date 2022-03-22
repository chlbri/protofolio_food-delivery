import { FC } from 'react';
import { TextInput as RN_TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import tailwindConfig from '../../../tailwind.config';
import { Margin } from '../../types/ui';

type Props = { placeholder: string } & Margin;

const TextInput: FC<Props> = ({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  placeholder,
  children,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind(
          'bg-white shadow-card_sm w-[292px] max-w-11/12 h-[40px] px-[25px] pb-[2px] rounded-card_xl flex flex-row items-center justify-between',
        ),
        { marginBottom, marginTop, marginLeft, marginRight },
      ]}
    >
      <RN_TextInput
        style={[tailwind('text-title text-native_blue')]}
        placeholder={placeholder}
        placeholderTextColor={tailwindConfig.theme.colors.bgray}
      />
      <View style={tailwind('min-w-[30px] flex flex-col items-center')}>
        {children}
      </View>
    </View>
  );
};

export default TextInput;
