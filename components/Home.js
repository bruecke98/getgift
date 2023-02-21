import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import  Slider  from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'dancing-script-regular': require('../assets/font/DancingScript-Regular.ttf'),
    'dancing-script-bold': require('../assets/font/DancingScript-Bold.ttf'),
  });
};


const HomeScreen = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [occasion, setOccasion] = useState('');
  const [gender, setGender] = useState('');

  const [value, setValue] = useState(Math.floor(50));
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    navigation.navigate('Interests', { age, occasion });
  };

  const handleAgePress = (selectedAge) => {
    setAge(selectedAge);
  };

  const handleOccasionPress = (selectedOccasion) => {
    setOccasion(selectedOccasion);
  };
  
  const handleGenderPress = (selectedOccasion) => {
    setGender(selectedOccasion);
  };
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Age </Text>
        
        
        <View style={styles.optionsContainer}>
         <TouchableOpacity onPress={() => handleAgePress('baby')}>
          <Image source={require('../assets/img/baby.png')} style={[styles.optionImage, age === 'baby' && styles.imageWrapperSelected ] }  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAgePress('child')}>
          <Image source={require('../assets/img/child.png')} style={[styles.optionImage, age === 'child' && styles.imageWrapperSelected  ] }  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAgePress('teen')}>
          <Image source={require('../assets/img/teen.png')} style={[styles.optionImage, age === 'teen' && styles.imageWrapperSelected ] } />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAgePress('adult')}>
          <Image source={require('../assets/img/adult.png')} style={[styles.optionImage, age === 'adult' && styles.imageWrapperSelected ] } />
        </TouchableOpacity>
      </View>

      <Text style={styles.h1}>Gender </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => handleGenderPress('Women')}>
          <Image source={require('../assets/img/women.png')} style={[styles.optionImage, gender === 'Women' && styles.imageWrapperSelected]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderPress('Men')}>
          <Image source={require('../assets/img/men.png')} style={[styles.optionImage, gender === 'Men' && styles.imageWrapperSelected]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderPress('Divers')}>
          <Image source={require('../assets/img/divers.png')} style={[styles.optionImage, gender === 'Divers' && styles.imageWrapperSelected]} />
        </TouchableOpacity>
      </View>

      <Text style={styles.h1}>Occasion </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => handleOccasionPress('Party')}>
          <Image source={require('../assets/img/christmas.png')} style={[styles.optionImage, occasion === 'Party' && styles.imageWrapperSelected]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOccasionPress('Birthday')}>
          <Image source={require('../assets/img/birthday.png')} style={[styles.optionImage, occasion === 'Birthday' && styles.imageWrapperSelected]} />
        </TouchableOpacity>
      </View>

      <Text style={styles.h1}>Budget: {Math.round(value)}€</Text>
      <View style={styles.optionsContainer}>
      <Slider
        style={styles.slide}
        minimumValue={5}
        maximumValue={100}
        step={5}
        value={Math.floor(value)}
        onValueChange={setValue}
        thumbTintColor="#bbbde8"
        minimumTrackTintColor="#bbbde8"
        maximumTrackTintColor="#bbbde8"

      />
      </View>


      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to Interests</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c1014',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  slide: {
    transform: [{ scaleY: 2.5 }],
    width: 200,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },

  optionImage: {
    width: 80,
    height: 80,
    marginHorizontal: 9,
    backgroundColor: '#bbbde8',
    borderRadius: 40,
  },
  button: {
    backgroundColor: '#787cd1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 320,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00171f',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c9dcec',
    //make a line break
    lineBreakMode: 'anywhere',
    //fontFamily: 'dancing-script-bold'
    

    },
    imageWrapperSelected: {
        backgroundColor: '#787cd1',
      },
});

export default HomeScreen;


//dark 787cd1
//medium bbbde8
//light  c9dcec
//container 0c1014