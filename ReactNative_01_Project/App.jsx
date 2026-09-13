import { Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, backgroundColor: '#f230f2' }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 50,
        }}
      >
        Welcome to the React Native App!
      </Text>

      <MyButton />
    </View>
  );
}

export default App;
