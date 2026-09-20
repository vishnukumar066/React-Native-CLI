import { View, Text, Button, ScrollView } from 'react-native'
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
    <ScrollView>
    <View
      style={{ flex: 1, alignItems: 'center', marginTop: 10, backgroundColor: '#a25a57', height: 200, width: 380, borderRadius: 10 }}
    >
      <Text style={{ fontSize: 30, marginTop: 20, marginBottom: 20 }}>
        Value : {value}
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>
        Time : {time}
      </Text>

      <Button title="Click Me" onPress={handleOnPress} />
      </View>
    </ScrollView>
  );
}

export default MyButton;