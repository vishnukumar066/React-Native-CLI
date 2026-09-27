import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import { Text, View } from 'react-native';
import MainDrawer from './drawers/MainDrawer';
import MainTabs from './tabs/MainTabs';

const AppNavigator = () => {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainDrawer /> : <AuthStack />}
      {/* <MainTabs /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
