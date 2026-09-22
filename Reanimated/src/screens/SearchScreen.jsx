import { View, Text } from 'react-native';
import ContextAPIExample from '../components/contextAPI/ContextAPIExample';
import VirajApp from '../components/counterRedux/VirajApp';
import ZustandExample from '../components/zustandExample/ZustandExample';

const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <ContextAPIExample />
      <Text>SearchScreen</Text>

      <VirajApp />

      <ZustandExample />
    </View>
  );
};

export default SearchScreen;
