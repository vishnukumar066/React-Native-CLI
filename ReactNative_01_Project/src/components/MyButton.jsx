import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const MyButton = () => {
    const [value, setValue] = useState(0);

    const handleOnPress = () => {
        console.log('Log Button Pressed');
        console.warn('Warn Button Pressed');
        console.error('Error Button Pressed');
        setValue(Math.floor(Math.random() * 100) + 1);
    }

    const time = new Date().toLocaleTimeString();

  return (
    <View
      style={{ flex: 1, alignItems: 'center', marginTop: 50, width: '100%' }}
    >
      <Text style={{ fontSize: 30, marginTop: 20, marginBottom: 20 }}>
        Value : {value}
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>
        Time : {time}
      </Text>

      <Button title="Click Me" onPress={handleOnPress} />

      <Button title="Click Me" onPress={handleOnPress} />
    </View>
  );
}

export default MyButton;