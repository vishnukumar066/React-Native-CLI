import { Text, View } from 'react-native';
import './global.css';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <AppNavigator />;
}

export default App;
