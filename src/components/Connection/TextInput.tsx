import { FC } from 'react';
import { TextInput as RN_TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import tailwindConfig from '../../../tailwind.config';
import { FontFamilies } from '../../fonts';
import { Margin } from '../../types/ui';

type Props = { placeholder: string; fontFamily?: FontFamilies } & Margin;

const TextInput: FC<Props> = ({
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  placeholder,
  children,
  fontFamily = 'AvenirNext_regular',
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind(
          'bg-white shadow-card_sm w-[292px] max-w-11/12 py-[10px] px-[25px] rounded-card_xl flex flex-row items-center justify-between',
        ),
        { marginBottom, marginTop, marginLeft, marginRight },
      ]}
    >
      <RN_TextInput
        style={[
          tailwind('text-title text-native_blue flex-1 bg-white'),
          { fontFamily },
        ]}
        placeholder={placeholder}
        placeholderTextColor={tailwindConfig.theme.colors.bgray}
      />
      <View style={tailwind('w-[30px] flex flex-col items-center')}>
        {children}
      </View>
    </View>
  );
};

export default TextInput;
