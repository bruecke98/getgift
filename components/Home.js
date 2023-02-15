import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import  Slider  from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native';



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
          <Image source={require('../assets/img/party.png')} style={[styles.optionImage, occasion === 'Party' && styles.imageWrapperSelected]} />
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
        thumbTintColor="#7765E3"
        minimumTrackTintColor="#EDD3C4"
        maximumTrackTintColor="#EDD3C4"

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
    backgroundColor: '#080708',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  slide: {
    width: 200,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },

  optionImage: {
    width: 80,
    height: 80,
    marginHorizontal: 9,
    backgroundColor: '#EDD3C4',
    borderRadius: 40,
  },
  button: {
    backgroundColor: '#7765E3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EDD3C4',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDD3C4',
    //make a line break
    lineBreakMode: 'anywhere',
    fontFamily:'dancing-bold',
    

    },
    imageWrapperSelected: {
        backgroundColor: '#7765E3',
      },
});

export default HomeScreen;
