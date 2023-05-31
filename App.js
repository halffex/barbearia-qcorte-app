import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    /*<>
      <Login />
      <StatusBar style="light" />
    </>*/

    <NavigationContainer>
      <StatusBar style="ligth" />
      <Routes/>
    </NavigationContainer>

  );
}