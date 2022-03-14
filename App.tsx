import { TailwindProvider } from 'tailwind-rn';
import Routes from './src/routes';
import _styles from './styles';
import tailwind_base from './tailwind.json';

export default function App() {
  const utilities = { ...tailwind_base, ..._styles };
  return (
    <TailwindProvider utilities={utilities}>
      <Routes />
    </TailwindProvider>
  );
}
