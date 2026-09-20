import { View, Text } from 'react-native';
import Child from './Child';

const Parent = () => {
  const parentData = 'This is data from Parent Component';

  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#a25a57',
        height: 55,
        width: 380,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>Props Concept</Text>
      <Child data={parentData} />
    </View>
  );
};

export default Parent;
