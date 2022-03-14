/* eslint-disable @typescript-eslint/ban-types */
import { FC } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import BaseCard from '../components/BaseCard';
import LargeCard from '../components/LargeCard';
import _Layout from '../components/_Layout';
import useNavigation from '../hooks/useNavigation';

type Props = {};

const HomeScreen: FC<Props> = () => {
  const tailwind = useTailwind();
  const { navigate } = useNavigation();

  return (
    <_Layout>
      <ScrollView>
        <View style={tailwind('p-[10px] pt-[15px]')}>
          <TouchableOpacity
            onPress={() => {
              navigate('Connection');
            }}
          >
            <Text style={tailwind('text-xs text-bgray ml-[18px]')}>
              {'< se déconnecter'}
            </Text>
          </TouchableOpacity>
          <Text style={tailwind('font-bold text-h1 text-white ml-[18px]')}>
            Caviar
          </Text>
          <Text style={tailwind('text-h2 text-white mt-[7px] ml-[5px]')}>
            La cuisine moderne
          </Text>

          <View
            style={tailwind(
              'flex mt-4 flex-row items-center w-full justify-between',
            )}
          >
            <View
              style={tailwind('mt-[7px] bg-accent px-4 py-1 rounded-full')}
            >
              <Text style={tailwind('text-h3 text-native_blue')}>
                Plat
              </Text>
            </View>
            <Text style={tailwind('text-h3 text-white mt-[7px]')}>
              Entrées
            </Text>
            <Text style={tailwind('text-h3 text-white mt-[7px]')}>
              Desserts
            </Text>
            <Text style={tailwind('text-h3 text-white mt-[7px]')}>
              Apéritifs
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tailwind('pt-[18px] pr-[10px] flex flex-row')}>
              <LargeCard marginRight={15} />
              <LargeCard marginRight={15} />
              <LargeCard />
            </View>
          </ScrollView>
          <View style={tailwind('mt-[40px]')}>
            <Text style={tailwind('text-h2 text-white  ml-[5px]')}>
              Amis
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={tailwind('pt-[8px] pr-[10px] flex flex-row')}>
                <BaseCard marginRight={12} />
                <BaseCard marginRight={12} />
                <BaseCard />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </_Layout>
  );
};

export default HomeScreen;
