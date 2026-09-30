import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import ImageComponentExample from '../components/ImageComponentExample';
import SwitchButton from '../components/SwitchButton';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageComponentExample />
      <View style={{ marginTop: 350, gap: 15 }}>
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

      <SwitchButton />
    </View>
  );
};

export default ProfileScreen;
