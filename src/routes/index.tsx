import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import MainMachineProvider from '../providers/mainMachine';
import ConnectionScreen from '../screens/Connection';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';
import { RootStackParams } from './types';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <MainMachineProvider>
        <RootStack.Navigator
          initialRouteName="Connection"
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen
            name="Connection"
            component={ConnectionScreen}
            options={{}}
          />
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            options={{}}
          />
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{}}
          />
        </RootStack.Navigator>
      </MainMachineProvider>
    </NavigationContainer>
  );
};

export default Routes;
