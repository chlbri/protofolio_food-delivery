import { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import BackConnSm from '../../../assets/images/back_conn_sm.png';
import useNavigation from '../../hooks/useNavigation';
import { Margin } from '../../types/ui';
import Text from '../Text';

type Props = {
  children?: string;
  variant?: string;
} & Margin;

const AuthButton: FC<Props> = ({
  children = 'Login',
  marginBottom,
  marginTop = 59,
  marginLeft,
  marginRight,
  variant,
}) => {
  const tailwind = useTailwind();
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Home');
      }}
    >
      <View
        style={[
          tailwind(
            'bg-black h-[46px] w-[336px] rounded-card_xl flex flex-row px-[22px] justify-between items-center pb-[2px] mt-[59px] shadow-card_lg',
          ),
          { marginBottom, marginTop, marginLeft, marginRight },
        ]}
      >
        <Image source={BackConnSm} style={tailwind('w-[18px] h-[16px]')} />
        <Text
          style={[tailwind('text-title text-white')]}
          fontFamily="AvenirNext_semiBold"
        >
          {children}
        </Text>
        <Image source={BackConnSm} style={tailwind('w-[18px] h-[16px]')} />
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;
