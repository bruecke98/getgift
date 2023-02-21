import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, BackHandler, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import SocialMedia from './SocialMedia';

function InterestsScreen() {
  const navigation = useNavigation();
  const [clicks, setClicks] = useState({});

  const handlePress = (interest) => {
    if (interest  in clicks) {
      const newClicks = { ...clicks };
      delete newClicks[interest];
      setClicks(newClicks);
    }else{
      const newClicks = { ...clicks };
      newClicks[interest] = (newClicks[interest] || 0) + 1;
      setClicks(newClicks);
    }
  };

  const handlePressGift = () => {
    navigation.navigate('FirstGifts', { clicks });
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal>
        <View>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('Sport')}>
          <Text style={[styles.titles, 'Sport' in clicks && styles.titlesClicked]}>Sport</Text>
          <Image style={[styles.image,  'Sport' in clicks && styles.imageWrapperSelected ]}  source={require('../assets/img/sport.jpg')} />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('toys')}>
          <Text style={[styles.titles, 'toys' in clicks && styles.titlesClicked]}>Toys</Text>

          <Image style={[styles.image,  'toys' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/toys.jpg')} />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('techChild')}>
          <Text style={[styles.titles, 'techChild' in clicks && styles.titlesClicked]}>Tech</Text>

          <Image style={[styles.image,  'techChild' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/techChild.jpg')} />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('childbook')}>
          <Text style={[styles.titles, 'childbook' in clicks && styles.titlesClicked]}>Books</Text>

          <Image style={[styles.image,  'childbook' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/childbook.webp')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('sweets')}>
          <Text style={[styles.titles, 'sweets' in clicks && styles.titlesClicked]}>Sweets</Text>

          <Image style={[styles.image,  'sweets' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/sweets.jpg')} />
        </TouchableOpacity>
        <View>
        <TouchableOpacity style={styles.t} onPress={() => handlePress('Schleich')}>
          <Text style={[styles.titles, 'Schleich' in clicks && styles.titlesClicked]}>Schleich</Text>

          <Image style={[styles.image,  'Schleich' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/schleich.jpg')} />
        </TouchableOpacity>
        </View>
        </ScrollView>
      </View>


      <View style={styles.SocialMed}> 
      <View style={{ padding: 10, backgroundColor: '#787cd1', margin:10, borderRadius: 10 , shadowRadius: 10, shadowColor: "#fff",}}>

        <Image source={require("../assets/img/LogoI.webp")}  style={{backgroundColor: '#787cd1', width: 40, height: 40, padding: 10}} />
        </View>

        <View style={{ padding: 10, backgroundColor: '#c9dcec', margin:10 , borderRadius: 10}}>

        <Image source={require("../assets/img/tiktok.png")}  style={{color:"#1DA1F2", backgroundColor: '#c9dcec', width: 40, height: 40}} />
        </View>

        <View style={{ padding: 10, backgroundColor: '#c9dcec', margin:10, borderRadius: 10}}>
          <Image source={require("../assets/img/f9.png")}  style={{color:"#1DA1F2", backgroundColor: '#c9dcec', width: 40, height: 40}} />
        </View>
   
        </View>

      <View style={styles.imageContainer3}>
        <SocialMedia />
      </View>
      



      <TouchableOpacity style={styles.button} onPress={handlePressGift}>
        <Text style={styles.buttonText}>Go to Gifts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SocialMed:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    flex: 1,
    top: -10,
  },
  t:{
    marginRight: 20,
  },
  titles:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#c9dcec',
    lineBreakMode: 'anywhere',
    left: 5,
    top: 15,
  },
  titlesClicked:{
    color: '#787cd1',
  },
  imageClicked:{
    opacity: 0.5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c1014',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#c9dcec',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    flex: 1,
    flexDirection: 'row',
    top: 30,
    
  },
  imageContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    top: -20,
    marginTop: -20,
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    top: -50,
    marginTop: -100,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#787cd1',
    opacity: 0.5,

    
  },
  clicksText: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#787cd1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 320,
    alignItems: 'center',
    top: -60,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00171f',
  },
  imageWrapperSelected: {
    borderRadius: 10,
    opacity: 0.9,
    backgroundColor: '#c9dcec'
    
  },
});

export default InterestsScreen;
