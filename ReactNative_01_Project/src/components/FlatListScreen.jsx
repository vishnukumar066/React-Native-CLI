import { View, Text, FlatList, StyleSheet } from 'react-native';


// FlatList is a component in React Native that is used to render a list of items efficiently. It is optimized for performance and can handle large datasets by rendering only the items that are currently visible on the screen. FlatList provides features like item recycling, lazy loading, and smooth scrolling, making it suitable for displaying long lists of data in mobile applications.
// FlatList takes in a data prop, which is an array of items to be rendered, and a renderItem prop, which is a function that defines how each item should be displayed. It also requires a keyExtractor prop to uniquely identify each item in the list.

const FlatListScreen = () => {
  
  const data = [
    {
      SNo: 1,
      Name: 'Item 1',
      Price: 10,
    },
    {
      SNo: 2,
      Name: 'Item 2',
      Price: 20,
    },
    {
      SNo: 3,
      Name: 'Item 3',
      Price: 30,
    },
    {
      SNo: 4,
      Name: 'Item 4',
      Price: 40,
    },
    {
      SNo: 5,
      Name: 'Item 5',
      Price: 50,
    },
    {
      SNo: 6,
      Name: 'Item 6',
      Price: 60,
    },
    {
      SNo: 7,
      Name: 'Item 7',
      Price: 70,
    },
    {
      SNo: 8,
      Name: 'Item 8',
      Price: 80,
    },
    {
      SNo: 9,
      Name: 'Item 9',
      Price: 90,
    },
    {
      SNo: 10,
      Name: 'Item 10',
      Price: 100,
    },
    {
      SNo: 11,
      Name: 'Item 11',
      Price: 110,
    },
    {
      SNo: 12,
      Name: 'Item 12',
      Price: 120,
    },
    {
      SNo: 13,
      Name: 'Item 13',
      Price: 130,
    },
    {
      SNo: 14,
      Name: 'Item 14',
      Price: 140,
    },
    {
      SNo: 15,
      Name: 'Item 15',
      Price: 150,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.SNo}</Text>
        <Text>{item.Name}</Text>
        <Text>{item.Price}</Text>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>S.No.</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Name</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Price</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FlatList Screen</Text>

      {/* <View style={styles.itemContainer}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>S.No.</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Name</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Price</Text>
      </View> */}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.SNo.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeader}
        nestedScrollEnabled={true}
        // scrollHorizontal={true}
        // scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a25a57',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    height: 300,
    width: 380,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'start',
    marginLeft: 5,
  },
  contentContainerStyle: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 3,
    backgroundColor: '#cb9b9b',
    borderRadius: 5,
    width: '100%',
  },
});

export default FlatListScreen;
