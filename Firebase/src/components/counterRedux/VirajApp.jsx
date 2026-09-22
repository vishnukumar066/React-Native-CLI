import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from '../../store/store';

// do same in app.jsx

const VirajApp = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    // <Text>Viraj</Text>
  );
};

export default VirajApp;
