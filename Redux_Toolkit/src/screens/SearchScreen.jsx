import { View, Text } from 'react-native';
import ContextAPIExample from '../components/contextAPI/ContextAPIExample';
import VirajApp from '../components/counterRedux/VirajApp';

const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <ContextAPIExample />
      <Text>SearchScreen</Text>

      <VirajApp />
    </View>
  );
};

export default SearchScreen;
