/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type Props = {};

const Home: FC<Props> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex flex-col items-center')}>
      <Text style={tailwind('font-bold text-4xl')}>Home,</Text>
      <Text style={tailwind('font-bold text-4xl mt-3')}>sweet home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
