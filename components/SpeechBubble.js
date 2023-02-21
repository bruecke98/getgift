import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SpeechBubble = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleButtonPress = () => {
    navigation.navigate('Gifts');
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isFocused ? 0.75 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isFocused, fadeAnim]);

  const inputStyle = isFocused ? styles.inputFocused : styles.input;
  const backgroundStyle = isFocused ? styles.backgroundFocused : styles.background;

  return (
    <View style={styles.container}>
      <Animated.View style={[backgroundStyle, { opacity: fadeAnim }]} />
      <TextInput
        style={[styles.text, inputStyle]}
        placeholder="Specification ... e.g. Whale, Shark"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <MaterialIcons name="card-giftcard" size={24} color="#0c1014" />
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
    paddingHorizontal: 30,
    paddingBottom: 30,
    flexDirection: 'row'
  },
  text: {
    color: '#0c1014',
    flex: 1,
  },
  background: {
    position: 'absolute',
    height: "1%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  backgroundFocused: {
    position: 'absolute',
    height: "1000%",
    top:-400,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  input: {
    backgroundColor: '#c9dcec',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    color: '#0c1014',
    fontSize: 17
  },
  inputFocused: {
    backgroundColor: '#c9dcec',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    color: '#0c1014',
    zIndex: 1,
    fontSize: 22
  },
  button: {
    backgroundColor: '#787cd1',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10
  }
});

export default SpeechBubble;
