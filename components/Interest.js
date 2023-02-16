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
      <View style={{ padding: 10, backgroundColor: 'grey', margin:10, borderRadius: 10 , shadowRadius: 10, shadowColor: "#fff",}}>

        <Image source={require("../assets/img/LogoI.webp")}  style={{color:"#1DA1F2", backgroundColor: 'grey', width: 40, height: 40, padding: 10}} />
        </View>

        <View style={{ padding: 10, backgroundColor: 'white', margin:10 , borderRadius: 10}}>

        <Image source={require("../assets/img/tiktok.png")}  style={{color:"#1DA1F2", backgroundColor: 'white', width: 40, height: 40}} />
        </View>

        <View style={{ padding: 10, backgroundColor: 'white', margin:10, borderRadius: 10}}>
          <Image source={require("../assets/img/face.png")}  style={{color:"#1DA1F2", backgroundColor: 'white', width: 40, height: 40}} />
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
    color: '#EDD3C4',
    lineBreakMode: 'anywhere',
    left: 5,
    top: 15,
  },
  titlesClicked:{
    color: '#7765E3'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
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
    
  },
  clicksText: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#7765E3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
    top: -60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imageWrapperSelected: {
    borderRadius: 10,
    
  },
});

export default InterestsScreen;
