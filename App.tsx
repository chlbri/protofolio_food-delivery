import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import Home from './src/Home';
import _styles from './styles';
import tailwind_base from './tailwind.json';

export default function App() {
  const utilities = { ...tailwind_base, ..._styles };
  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="light" animated />
      </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b20',
  },
});
