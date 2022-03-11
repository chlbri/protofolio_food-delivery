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
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
