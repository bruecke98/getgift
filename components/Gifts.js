import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign, Feather } from '@expo/vector-icons';


import ProductBox from './giftComponent/ProductBox';
import SpeechBubble from './SpeechBubble';

import TreeList from './TreeList';


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
    navigation.navigate('Waitlist');
  };

  const handleOccasionPress = (selectedOccasion) => {
    setOccasion(selectedOccasion);
  };

  return (
    <View style={styles.container}>

        <TreeList entries={['Child', 'Boy', 'Birthday', '<45€', 'Toys','Lego', 'Dinosaur', 'T-Rex']}/>


        <View style={styles.containerImg}>
                
            <View style={styles.container1}>
        
                <Text style={styles.price}>$19.99</Text>
                <Image source={require('../assets/img/gift/dino4.png')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}><AntDesign  name="delete" size={24} color="#000" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shopButton} onPress={handleShop}>
                    <Text style={styles.buttonText}><Feather name="shopping-cart" size={24} color="black" /></Text>
                    </TouchableOpacity>
            </View>
            </View>
            <View style={styles.container1}>
        
                <Text style={styles.price}>$39.99</Text>
                <Image source={require('../assets/img/gift/dino2.png')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}><AntDesign  name="delete" size={24} color="#000" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shopButton} onPress={handleShop}>
                    <Text style={styles.buttonText}><Feather name="shopping-cart" size={24} color="black" /></Text>
                    </TouchableOpacity>
            </View>

        
        </View>
        </View>

        <View style={styles.containerImg}>
                
            <View style={styles.container1}>
        
                <Text style={styles.price}>$12.99</Text>
                <Image source={require('../assets/img/gift/dino3.png')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}><AntDesign  name="delete" size={24} color="#000" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shopButton} onPress={handleShop}>
                    <Text style={styles.buttonText}><Feather name="shopping-cart" size={24} color="black" /></Text>
                    </TouchableOpacity>
            </View>
            </View>
            <View style={styles.container1}>
        
                <Text style={styles.price}>$30</Text>
                <Image source={require('../assets/img/gift/toy7.png')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}><AntDesign  name="delete" size={24} color="#000" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shopButton} onPress={handleShop}>
                    <Text style={styles.buttonText}><Feather name="shopping-cart" size={24} color="black" /></Text>
                    </TouchableOpacity>
            </View>

        
        </View>
        </View>
        
    

      <SpeechBubble />
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
      optionImage: {
        width: 80,
        height: 80,
        marginHorizontal: 9,
        backgroundColor: 'white',
        borderRadius: 40,
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      h1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        //make a line break
        lineBreakMode: 'anywhere',
    
        
    
        },
        imageWrapperSelected: {
            backgroundColor: 'green',
        },
        containerImg: {
            top: -20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
    
          container1: {
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 10,
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          image: {
            width: 120,
            height: 120,
            marginBottom: 20 
          },
          price: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,

          },
          buttonContainer: {
            flexDirection: 'row',
            width: 130
          },
          deleteButton: {
            backgroundColor: '#C8ADC0',
            borderRadius: 5,
            padding: 7,
            marginRight: 10,
            left: 5,
          },
          shopButton: {
            backgroundColor: '#7765E3',
            borderRadius: 5,
            padding: 7,
            right: -40,
          },
          buttonText: {
            color: '#fff',
            fontWeight: 'bold',
          },
});

export default HomeScreen;
