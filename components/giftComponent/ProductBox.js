import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const ProductBox = ({ price, imageUrl }) => {

  const handleDelete = () => {
    // handle delete button click here
  };

  const handleShop = () => {
    // handle shop button click here
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.price}>${price}</Text>
      <Image source={''} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopButton} onPress={handleShop}>
          <Text style={styles.buttonText}>Shop</Text>
        </TouchableOpacity>
      </View>
      
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    width: 100,
    height: 100,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  shopButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductBox;