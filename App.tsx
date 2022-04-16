import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import UpdateProfile from './src/screens/UpdateProfile';
import CreateNewAccount from './src/screens/CreateNewAccount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount}/>
        <Stack.Screen name="UpdateProfile" component={UpdateProfile}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}