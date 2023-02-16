import React, { useState } from 'react';
import { TextInput, View, StyleSheet, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SocialMedia = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const suggestions = ["capple", "canana", "cherry", "date", "elderberry"];

  const handleInputChange = (value) => {
    setInputValue(value);
    setShowDropdown(value.length > 0);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setShowDropdown(false);
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectSuggestion(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );


  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
   
    <View style={[styles.container, isFocused && styles.focused]}>
    <Image source={require("../assets/img/insta.webp")}  style={{color:"#1DA1F2", backgroundColor: 'white', width: 50, height: 50, padding: 10}} />
      <TextInput
        style={styles.input}
        placeholder="@tommyNephew"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleInputChange}
        value={inputValue}

      />
  

    </View>
    </>
  );
};

const styles = StyleSheet.create({
    SocialMed: {
  
    },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
  },
  focused: {
    backgroundColor: '#fff',
  },
  input: {
    marginLeft: 16,
    flex: 1,
    color: '#000000',
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  dropdown: {
    width: '120%',
    right: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    maxHeight: 150,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SocialMedia;
