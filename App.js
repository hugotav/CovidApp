import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Classificação from './views/Classificacao';
import CoradsI from './views/CoradsI';
import CoradsII from './views/CoradsII';
import CoradsIII from './views/CoradsIII';
import CoradsIV from './views/CoradsIV';
import CoradsV from './views/CoradsV';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="  " component={Home} />
          <Stack.Screen name="Classificação" component={Classificação} />
          <Stack.Screen name="Corads-1" component={CoradsI} />
          <Stack.Screen name="Corads-2" component={CoradsII} />
          <Stack.Screen name="Corads-3" component={CoradsIII} />
          <Stack.Screen name="Corads-4" component={CoradsIV} />
          <Stack.Screen name="Corads-5" component={CoradsV} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}