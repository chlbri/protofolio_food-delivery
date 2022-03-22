import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn';

const _Layout: FC = ({ children }) => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('pb-[5px] bg-native_blue flex-1')}>
      <StatusBar translucent style="light" />
      {children}
    </SafeAreaView>
  );
};

export default _Layout;
