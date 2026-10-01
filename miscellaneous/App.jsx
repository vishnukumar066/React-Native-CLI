import Toast from 'react-native-toast-message';
import './global.css';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { toastConfig } from './src/components/toast/toastConfig';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <AppNavigator />
      <Toast
        config={toastConfig}
        position="bottom"
        visibilityTime={3000}
        autoHide={true}
        swapable={true}
      />
    </>
  );
}

export default App;
