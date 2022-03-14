import {
  NavigationProp,
  useNavigation as use,
} from '@react-navigation/native';
import { RootStackParams } from '../routes/types';

export default function useNavigation() {
  return use<NavigationProp<RootStackParams>>();
}
