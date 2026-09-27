import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChildContext from './ChildContext';

// create, provide, use
export const CounterContext = createContext();

const ContextAPIExample = () => {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    setCount(count + 1);
    await AsyncStorage.setItem('count', `${count}`);
  };

  return (
    <CounterContext.Provider value={{ count, incrementCount }}>
      <ChildContext />
    </CounterContext.Provider>
  );
};

export default ContextAPIExample;
