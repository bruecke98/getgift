import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Interest from './components/Interest';
import Gifts from './components/Gifts';
import FirstGifts from './components/firstGifts';
import Waitlist from './components/Waitlist';


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={'#EDD3C4'} barStyle="light-content" />
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#EDD3C4',
            },
            fontfamily: 'DancingScript',
            title: 'GetGift',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Interests"
          component={Interest}
          options={{
            headerStyle: {
              backgroundColor: '#EDD3C4',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Gifts"
          component={Gifts}
          options={{
            headerStyle: {
              backgroundColor: '#EDD3C4',
            },
            title: 'Gifts',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FirstGifts"
          component={FirstGifts}
          options={{
            headerStyle: {
              backgroundColor: '#EDD3C4',
            },
            title: 'Gifts',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Waitlist"
          component={Waitlist}
          options={{
            headerStyle: {
              backgroundColor: '#EDD3C4',
            },
            title: 'Join our Waitlist',
            headerTitleAlign: 'center',
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
