import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../style/Styling.js';

const Styling = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#a25a57',
        height: 70,
        width: 380,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: 'black', fontSize: 15 }}>Inline Styling</Text>

      <Text style={style.text}>Internal Styling</Text>

      {/* For external styling need a seperate file .js and export default that,  StyleSheet.create({ text: { color: 'white', fontSize: 20 }} */}

      <Text style={styles.text}>External Styling</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
  },
});

export default Styling;
