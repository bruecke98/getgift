import React, { useState }  from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Interest from './components/Interest';
import Gifts from './components/Gifts';
import FirstGifts from './components/firstGifts';
import Waitlist from './components/Waitlist';


import * as Font from 'expo-font';
import { AppLoading } from 'expo';




const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () => {
    await Font.loadAsync({
      'dancing-script-regular': require('./assets/font/DancingScript-Regular.ttf'),
      'dancing-script-bold': require('./assets/font/Roboto-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontLoaded) {
    fetchFonts().then(() => {
      setFontLoaded(true);
    });
  }else{
  return (
    <>
    <StatusBar backgroundColor={'#bbbde8'} barStyle="light-content" />
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#bbbde8',
            },
            title: 'GetGift',
            headerTitleAlign: 'center',
            headerTitleStyle: { 
              fontFamily: 'dancing-script-bold',
              fontSize: 32,
            },
          }}
        />
        <Stack.Screen
          name="Interests"
          component={Interest}
          options={{
            title: 'Social Media',
            headerStyle: {
              backgroundColor: '#bbbde8',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'dancing-script-bold',
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Gifts"
          component={Gifts}
          options={{
            headerStyle: {
              backgroundColor: '#bbbde8',
            },
            title: 'Gifts',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'dancing-script-bold',
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="FirstGifts"
          component={FirstGifts}
          options={{
            headerStyle: {
              backgroundColor: '#bbbde8',
            },
            title: 'Gifts',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'dancing-script-bold',
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Waitlist"
          component={Waitlist}
          options={{
            headerStyle: {
              backgroundColor: '#bbbde8',
            },
            title: 'Join our Waitlist',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'dancing-script-bold',
              fontSize: 30,
            },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
  }
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


//#302b70 dunkel lila
//#bbbde8 lila mittel


