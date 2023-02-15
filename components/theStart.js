import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SimpleComponent(props) {
  return (
    <div>
      <h1 style={styles.h}>Hello, {props.name}!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

const styles = StyleSheet.create({
    h: {
        color: '#000',
        fontSize: 30,
        padding: 50,
    },
});

        

export default SimpleComponent;
