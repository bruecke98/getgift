import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SpeechBubble = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Gifts');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Specification ... e.g. Whale, Shark" />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <MaterialIcons name="card-giftcard" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    padding: 10,
    flex: 1
  },
  button: {
    backgroundColor: '#3B60E4',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10
  }
});

export default SpeechBubble;
