/* eslint-disable @typescript-eslint/ban-types */
import { FC } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import LargeCard from './components/LargeCard';

type Props = {};

const Home: FC<Props> = () => {
  const tailwind = useTailwind();
  console.log(tailwind('font-bold text-accent text-h1'));

  return (
    <SafeAreaView>
      <View style={tailwind('flex flex-col p-[15px] pt-[25px]')}>
        <Text style={tailwind('font-bold text-h1 text-white ml-2')}>
          Caviar
        </Text>
        <Text style={tailwind('text-h2 text-white mt-[7px]')}>
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
            <Text style={tailwind('text-h3 text-native_blue')}>Plat</Text>
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
        <ScrollView style={tailwind('mt-[34px]')} horizontal>
          <LargeCard marginRight={12} />
          <LargeCard marginRight={12} />
          <LargeCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
