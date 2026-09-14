import { ScrollView, Text } from 'react-native';
import MyButton from './src/components/MyButton';
import Parent from './src/components/Parent';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styling from './src/components/Styling';
import InputText from './src/components/InputText';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import LoginForm from './src/components/LoginForm';
import StatusBarDemo from './src/components/StatusBarDemo';
import UseRefHook from './src/components/UseRefHook';

function App() {
  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#f230f2', alignItems: 'center' }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            backgroundColor: '#a25a57',
            width: 380,
            borderRadius: 10,
            marginTop: 2,
            padding: 10,
          }}
        >
          Welcome to the React Native App!
        </Text>

        <StatusBarDemo />
        <LoginForm />
        <MyButton />
        <Parent />
        <Styling />
        <InputText />
        <SectionListScreen />
        <FlatListScreen />
        <MyButton />
        <UseRefHook />
      </SafeAreaView>
    </ScrollView>
  );
}

export default App;
