import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const TreeList = ({ entries }) => {
  return (

    <View style={styles.container}>
      <ScrollView horizontal>
        {entries.map((entry, index) => (
          <Text key={index} style={styles.text}>
            {entry}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    overflow: 'scroll',
    top: -50,
    borderRadius: 10,
  },
  text: {
    borderWidth: 1,
    borderColor: '#EDD3C4',
    padding: 10,
    margin: 5,
    color: '#EDD3C4',
    borderRadius: 10,

  },
});

export default TreeList;
