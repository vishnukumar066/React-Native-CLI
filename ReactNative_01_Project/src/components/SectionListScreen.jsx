import { View, Text, SectionList, StyleSheet } from 'react-native';

const SectionListScreen = () => {
  const data = [
    {
      title: 'Fruits',
      data: [
        { id: 1, name: 'Apple', price: 20 },
        { id: 2, name: 'Banana', price: 15 },
        { id: 3, name: 'Mango', price: 25 },
        { id: 4, name: 'Orange', price: 20 },
        { id: 5, name: 'Grapes', price: 30 },
      ],
    },
    {
      title: 'Vegetables',
      data: [
        { id: 6, name: 'Carrot', price: 10 },
        { id: 7, name: 'Potato', price: 8 },
        { id: 8, name: 'Tomato', price: 12 },
        { id: 9, name: 'Carrot', price: 10 },
        { id: 10, name: 'Potato', price: 8 },
        { id: 11, name: 'Tomato', price: 12 },
      ],
    },
  ];

  const ListHeaderComponent = () => (
    <View style={styles.itemContainer}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>S. No.</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Name</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Price</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text>{item.price.toFixed(2)}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>SectionListScreen</Text>

      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={item => item.id.toString()}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.contentContainerStyle}
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
  sectionHeader: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
  },
});

export default SectionListScreen;
