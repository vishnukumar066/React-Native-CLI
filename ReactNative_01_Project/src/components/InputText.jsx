import { View, Text, TextInput, Button, Pressable } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
  const [value, setValue] = useState('');

  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#a25a57',
        height: 135,
        width: 380,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          marginBottom: 5,
          fontWeight: 'bold',
        }}
      >
        Input Value: {value}
      </Text>
      <TextInput
        placeholder="Enter text here..."
        value={value}
        onChangeText={text => setValue(text)}
        style={{
          borderWidth: 2,
          borderColor: 'black',
          padding: 10,
          width: '100%',
          borderRadius: 5,
          height: 40,
          backgroundColor: '#e0a1a1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <Pressable
        onPress={() => setValue('')}
        style={{
          marginTop: 10,
          borderWidth: 2,
          borderColor: 'black',
          width: '30%',
          borderRadius: 10,
          marginLeft: '35%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          backgroundColor: '#7730f2',
        }}
      >
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
          Clear
        </Text>
      </Pressable>
    </View>
  );
};

export default InputText;
