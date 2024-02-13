import React,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/components/Home';
import ApartmentDetails from './app/components/ApartmentDetails';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
