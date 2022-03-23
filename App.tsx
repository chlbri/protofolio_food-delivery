import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { TailwindProvider } from 'tailwind-rn';
import FONTS from './src/fonts';
import Routes from './src/routes';
import _styles from './styles';
import tailwind_base from './tailwind.json';

export default function App() {
  const utilities = { ...tailwind_base, ..._styles };
  const [fontsLoaded] = useFonts(FONTS);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TailwindProvider utilities={utilities}>
      <Routes />
    </TailwindProvider>
  );
}
