import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import TopTabs from '../navigation/tabs/TopTabs';

const HomeScreen = () => {
  const navigation = useNavigation();
  return <TopTabs />;
};

export default HomeScreen;
