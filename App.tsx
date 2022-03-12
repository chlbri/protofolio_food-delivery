import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import Home from './src/Home';
import utilities from './tailwind.json';

export default function App() {
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
