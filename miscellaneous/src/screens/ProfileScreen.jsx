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
        <Text className="text-lg font-bold">ProfileScreen</Text>
      </View>

      <SwitchButton />
    </View>
  );
};

export default ProfileScreen;
