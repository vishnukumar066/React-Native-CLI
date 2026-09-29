import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        title="Go to profile page"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to home page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingsScreen;
