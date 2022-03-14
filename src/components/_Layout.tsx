import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn';

const _Layout: FC = ({ children }) => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('pb-[25px] bg-native_blue flex-1')}>
      {children}
    </SafeAreaView>
  );
};

export default _Layout;
