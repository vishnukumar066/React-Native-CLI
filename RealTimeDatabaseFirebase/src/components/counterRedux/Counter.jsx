import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Count : {count}</Text>

      <Pressable
        onPress={() => dispatch(increment())}
        style={{
          backgroundColor: 'red',
          margin: 20,
          padding: 10,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Press</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
