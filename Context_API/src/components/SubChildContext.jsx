import { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { CounterContext } from './ContextAPIExample';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubChildContext = () => {
  // const { count } = useContext(CounterContext);
  const [value, setValue] = useState();

  useEffect(() => {
    const getFunction = async () => {
      const x = await AsyncStorage.getItem('count');
      if (x !== null) {
        setValue(Number(x));
      }
    };

    getFunction();
  });

  return (
    <View>
      <Text>SubChildContext</Text>
      <Text>Count = {value}</Text>
    </View>
  );
};

export default SubChildContext;
