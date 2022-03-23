import { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import FacebookSRc from '../../../assets/images/socials/facebook.png';
import LinkedInSrc from '../../../assets/images/socials/LinkedIn.png';
import TwitterSrc from '../../../assets/images/socials/twitter.png';
import { Margin } from '../../types/ui';
import Text from '../Text';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {} & Margin;

const Socials: FC<Props> = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind('items-center'),
        { marginTop, marginRight, marginBottom, marginLeft },
      ]}
    >
      <Text style={tailwind('text-base text-bgray')}>
        Ou se connecter avec :
      </Text>
      <View style={tailwind('flex flex-row mt-[15px]')}>
        <TouchableOpacity style={tailwind('shadow-card_sm')}>
          <Image
            source={FacebookSRc}
            style={tailwind('h-[38px] w-[38px]')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('shadow-card_sm')}>
          <Image
            source={LinkedInSrc}
            style={tailwind('h-[38px] w-[38px] ml-[38px]')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('shadow-card_sm')}>
          <Image
            source={TwitterSrc}
            style={tailwind('h-[38px] w-[38px] ml-[38px]')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Socials;
