import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProductBox from './giftComponent/ProductBox';
import SpeechBubble from './SpeechBubble';

const HomeScreen = () => {
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

  return (
    <View style={styles.container}>
        <Text style={styles.h1}>We are happy you like our MVP! </Text>
        <TextInput style={styles.input} placeholder="Please input your Mail..." />
    </View>
  );
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
