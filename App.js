import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Button from './src/components/login_signup/button.js';
const App = () => {
  return <Button title="Login" />;
};

export default App;
