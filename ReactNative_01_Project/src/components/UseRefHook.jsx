import { useRef, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

const UseRefHook = () => {
    const [value, setValue] = useState('');
    const myRef = useRef();

    const handlePress = () => {
        console.log('Input Value:', value);

        myRef.current.setNativeProps({
            text: 'Vishnu',
            style: { color: 'black', fontSize: 15, fontWeight: 'bold' , backgroundColor: 'crimson'},
        })

        // myRef.current.focus();
    }

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
            useRef Hook Example
          </Text>

          <TextInput
              ref={myRef}
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
            onPress={handlePress}
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
  )
}

export default UseRefHook