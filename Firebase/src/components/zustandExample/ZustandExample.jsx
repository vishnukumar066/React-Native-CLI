import { Pressable, Text, View } from 'react-native';
import { useCounter } from './store.js';

const ZustandExample = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <View>
      <Text>Zustand State Management</Text>
      <Text>Counter = {count}</Text>
      <Pressable
        onPress={increment}
        style={{
          backgroundColor: 'red',
          margin: 20,
          padding: 10,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Increase</Text>
      </Pressable>

      <Pressable
        onPress={decrement}
        style={{
          backgroundColor: 'purple',
          margin: 20,
          padding: 10,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Decrease</Text>
      </Pressable>
    </View>
  );
};

export default ZustandExample;
