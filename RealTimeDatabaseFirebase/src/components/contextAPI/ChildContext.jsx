import { Pressable, Text, View } from 'react-native';
import { useContext } from 'react';
import { CounterContext } from './ContextAPIExample';
import SubChildContext from './SubChildContext';

const ChildContext = () => {
  const { count, incrementCount } = useContext(CounterContext);
  return (
    <View>
      <Text>ChildContext</Text>
      <Text>Counter = {count}</Text>
      <Pressable
        onPress={incrementCount}
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
      <SubChildContext />
    </View>
  );
};

export default ChildContext;
