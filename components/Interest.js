import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        <View>
        <TouchableOpacity onPress={() => handlePress('Sport')}>
          <Text style={[styles.titles, 'Sport' in clicks && styles.titlesClicked]}>Sport</Text>
          <Image style={[styles.image,  'Sport' in clicks && styles.imageWrapperSelected ]}  source={require('../assets/img/sport.jpg')} />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={() => handlePress('toys')}>
          <Text style={[styles.titles, 'toys' in clicks && styles.titlesClicked]}>Toys</Text>

          <Image style={[styles.image,  'toys' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/toys.jpg')} />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imageContainer2}>
        <TouchableOpacity onPress={() => handlePress('childbook')}>
          <Text style={[styles.titles, 'childbook' in clicks && styles.titlesClicked]}>Books</Text>

          <Image style={[styles.image,  'childbook' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/childbook.webp')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('sweets')}>
          <Text style={[styles.titles, 'sweets' in clicks && styles.titlesClicked]}>Sweets</Text>

          <Image style={[styles.image,  'sweets' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/sweets.jpg')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.imageContainer2}>
        <TouchableOpacity onPress={() => handlePress('Schleich')}>
          <Text style={[styles.titles, 'Schleich' in clicks && styles.titlesClicked]}>Schleich</Text>

          <Image style={[styles.image,  'Schleich' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/schleich.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('techChild')}>
          <Text style={[styles.titles, 'techChild' in clicks && styles.titlesClicked]}>Tech</Text>

          <Image style={[styles.image,  'techChild' in clicks && styles.imageWrapperSelected ]} source={require('../assets/img/techChild.jpg')} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handlePressGift}>
        <Text style={styles.buttonText}>Go to Gifts</Text>
      </TouchableOpacity>
      <Text style={styles.clicksText}>Clicks: {JSON.stringify(clicks)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    
  },
  imageContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
    flexDirection: 'row',
    
  },
  clicksText: {
    fontSize: 16,
    marginTop: 20,
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
    color: 'white',
  },
  imageWrapperSelected: {
    borderRadius: 10,
    
  },
});

export default InterestsScreen;
