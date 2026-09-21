import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to home page"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to settings page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default ProfileScreen;
