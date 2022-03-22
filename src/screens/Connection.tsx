import { FC } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import BackConn from '../../assets/images/back_conn.png';
import Powered from '../../assets/images/socials/powered.png';
import AuthButton from '../components/Connection/AuthButton';
import Socials from '../components/Connection/Socials';
import TextInput from '../components/Connection/TextInput';
import Cadenas from '../components/svg/Cadenas';
import _Layout from '../components/_Layout';

const ConnectionScreen: FC = () => {
  const tailwind = useTailwind();
  return (
    <_Layout>
      <ScrollView>
        <View
          style={[
            tailwind(
              'items-center px-[10px] pt-[62px] flex flex-col justify-between',
            ),
            { justifyContent: 'space-between' },
          ]}
        >
          <View style={tailwind('items-center')}>
            <Text style={tailwind('text-h1 text-accent font-bold')}>
              FoodiVoo
            </Text>
            <Text style={tailwind('text-title text-bgray mt-[7px]')}>
              Le resto qui s'invite chez vous !
            </Text>
            <ImageBackground
              source={BackConn}
              style={tailwind(
                'w-[336px] mt-[79px] pt-[41px] min-h-[300px] items-center',
              )}
              resizeMode="contain"
              imageStyle={tailwind('m-[5px]')}
              blurRadius={3}
            >
              <TextInput placeholder="Login..."></TextInput>
              <TextInput marginTop={32} placeholder="Password...">
                <Cadenas fillColor="gray" />
              </TextInput>
              <AuthButton marginTop={59}>{'Login & eat'}</AuthButton>
            </ImageBackground>
          </View>
          <Socials marginTop={47} />
          <Image
            source={Powered}
            style={[tailwind('w-[121px] h-[53px] mt-[97px]')]}
          />
        </View>
      </ScrollView>
    </_Layout>
  );
};

export default ConnectionScreen;
