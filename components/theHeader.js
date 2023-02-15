import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function Header({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Details2');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.title}>GetGift App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
