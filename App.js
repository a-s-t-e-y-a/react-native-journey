import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Butto from './src/components/login_signup/button.js';
const App = () => {
  return <Butto title="Login" />;
};

export default App;
