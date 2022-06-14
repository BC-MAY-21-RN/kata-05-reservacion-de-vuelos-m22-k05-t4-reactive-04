import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Origin from '../screens/Origin';
import Destination from '../screens/Destination';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth().currentUser ? 'Home' : 'Register'}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Origin"
          component={Origin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
