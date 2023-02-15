import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProductBox from './giftComponent/ProductBox';
import SpeechBubble from './SpeechBubble';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';



const HomeScreen = () => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () => {
    await Font.loadAsync({
      'dancing-script-regular': require('../assets/font/DancingScript-Regular.ttf'),
      'dancing-script-bold': require('../assets/font/DancingScript-Bold.ttf'),
    });
    setFontsLoaded(true);
  };


  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [occasion, setOccasion] = useState('');
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const handleAgePress = (selectedAge) => {
    setAge(selectedAge);
  };

  const handleDelete = () => {
    // handle delete button click here
  };

  const handleShop = () => {
    // handle shop button click here
  };

  const handleOccasionPress = (selectedOccasion) => {
    setOccasion(selectedOccasion);
  };
  if (!fontLoaded) {
    fetchFonts().then(() => {
      setFontLoaded(true);
    });
  }else{
  return (
    <View style={styles.container}>
        <Text style={styles.h2}>GetGift </Text>
        <Text style={styles.h1}>We are happy you like our MVP! </Text>
        <TextInput style={styles.input} placeholder="Please input your Mail..." />
    </View>
  );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDD3C4',
        alignItems: 'center',
        justifyContent: 'center',
        },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        
        },
    h2: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'dancing-script-regular',
        marginBottom: 100,
        },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        },

});

export default HomeScreen;
