import { View, Text, StatusBar } from 'react-native';

const StatusBarDemo = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#a25a57',
        width: 380,
        borderRadius: 10,
        padding: 5,
      }}
    >
      <Text style={{ fontSize: 30 }}>StatusBarDemo</Text>

      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={false}
        translucent={false}
        animated={true}
      />
    </View>
  );
};

export default StatusBarDemo;
