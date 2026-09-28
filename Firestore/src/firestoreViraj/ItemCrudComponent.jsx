import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { addItem, deleteItem, getAllItems, updateItem } from './database';

const ItemCrudComponent = () => {
  const [items, setItems] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // -----------------------------------
  // GET ALL ITEMS
  // -----------------------------------

  const loadItems = async () => {
    try {
      setLoading(true);

      const data = await getAllItems();

      setItems(data);
    } catch (error) {
      console.error('Load items error:', error);

      Alert.alert('Error', 'Unable to load items.');
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------
  // LOAD ITEMS WHEN SCREEN OPENS
  // -----------------------------------

  useEffect(() => {
    loadItems();
  }, []);

  // -----------------------------------
  // CLEAR FORM
  // -----------------------------------

  const clearForm = () => {
    setName('');
    setPrice('');
    setStock('');
    setEditingId(null);
  };

  // -----------------------------------
  // ADD / UPDATE ITEM
  // -----------------------------------

  const handleSubmit = async () => {
    if (!name.trim()) {
      Alert.alert('Validation', 'Please enter item name.');
      return;
    }

    if (!price.trim()) {
      Alert.alert('Validation', 'Please enter price.');
      return;
    }

    if (!stock.trim()) {
      Alert.alert('Validation', 'Please enter stock.');
      return;
    }

    try {
      setSaving(true);

      const itemData = {
        name: name.trim(),
        price: Number(price),
        stock: Number(stock),
      };

      // UPDATE
      if (editingId) {
        await updateItem(editingId, itemData);

        Alert.alert('Success', 'Item updated successfully.');
      }

      // ADD
      else {
        await addItem(itemData);

        Alert.alert('Success', 'Item added successfully.');
      }

      clearForm();

      await loadItems();
    } catch (error) {
      console.error('Add/Update item error:', error);

      Alert.alert('Error', 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  };

  // -----------------------------------
  // EDIT ITEM
  // -----------------------------------

  const handleEdit = item => {
    setEditingId(item.id);

    setName(item.name ?? '');
    setPrice(item.price !== undefined ? String(item.price) : '');
    setStock(item.stock !== undefined ? String(item.stock) : '');
  };

  // -----------------------------------
  // DELETE ITEM
  // -----------------------------------

  const handleDelete = itemId => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',

        onPress: async () => {
          try {
            await deleteItem(itemId);

            setItems(currentItems =>
              currentItems.filter(item => item.id !== itemId),
            );

            Alert.alert('Success', 'Item deleted successfully.');
          } catch (error) {
            console.error('Delete item error:', error);

            Alert.alert('Error', 'Unable to delete item.');
          }
        },
      },
    ]);
  };

  // -----------------------------------
  // ITEM CARD
  // -----------------------------------

  const renderItem = ({ item }) => {
    return (
      <View className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">
        <View className="flex-row items-start justify-between">
          <View className="flex-1">
            <Text className="text-lg font-bold text-black">{item.name}</Text>

            <Text className="mt-1 text-base text-gray-700">
              Price: ₹{item.price}
            </Text>

            <Text className="mt-1 text-base text-gray-700">
              Stock: {item.stock}
            </Text>

            <Text className="mt-1 text-xs text-gray-400">ID: {item.id}</Text>
          </View>
        </View>

        <View className="mt-4 flex-row gap-3">
          <Pressable
            onPress={() => handleEdit(item)}
            className="flex-1 items-center rounded-xl bg-blue-600 py-3"
          >
            <Text className="font-semibold text-white">Edit</Text>
          </Pressable>

          <Pressable
            onPress={() => handleDelete(item.id)}
            className="flex-1 items-center rounded-xl bg-red-600 py-3"
          >
            <Text className="font-semibold text-white">Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* HEADER */}

      <View className="bg-black px-5 pb-5 pt-14">
        <Text className="text-2xl font-bold text-white">Item Manager</Text>

        <Text className="mt-1 text-sm text-gray-300">
          Firebase Firestore CRUD
        </Text>
      </View>

      {/* FORM */}

      <View className="mx-4 mt-4 rounded-2xl bg-white p-5">
        <Text className="mb-4 text-xl font-bold text-black">
          {editingId ? 'Update Item' : 'Add New Item'}
        </Text>

        {/* NAME */}

        <Text className="mb-2 font-medium text-gray-700">Item Name</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter item name"
          className="mb-4 rounded-xl border border-gray-300 px-4 py-3 text-black"
          placeholderTextColor="#9CA3AF"
        />

        {/* PRICE */}

        <Text className="mb-2 font-medium text-gray-700">Price</Text>

        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
          className="mb-4 rounded-xl border border-gray-300 px-4 py-3 text-black"
          placeholderTextColor="#9CA3AF"
        />

        {/* STOCK */}

        <Text className="mb-2 font-medium text-gray-700">Stock</Text>

        <TextInput
          value={stock}
          onChangeText={setStock}
          placeholder="Enter stock"
          keyboardType="numeric"
          className="mb-4 rounded-xl border border-gray-300 px-4 py-3 text-black"
          placeholderTextColor="#9CA3AF"
        />

        {/* SUBMIT */}

        <Pressable
          disabled={saving}
          onPress={handleSubmit}
          className={`items-center rounded-xl py-3 ${
            saving ? 'bg-gray-400' : 'bg-black'
          }`}
        >
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="font-bold text-white">
              {editingId ? 'Update Item' : 'Add Item'}
            </Text>
          )}
        </Pressable>

        {/* CANCEL EDIT */}

        {editingId && (
          <Pressable
            onPress={clearForm}
            className="mt-3 items-center rounded-xl border border-gray-300 py-3"
          >
            <Text className="font-semibold text-gray-700">Cancel Edit</Text>
          </Pressable>
        )}
      </View>

      {/* LIST HEADER */}

      <View className="mt-5 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold text-black">All Items</Text>

        <Pressable onPress={loadItems} disabled={loading}>
          <Text className="font-semibold text-blue-600">Refresh</Text>
        </Pressable>
      </View>

      {/* ITEM LIST */}

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#000" />

          <Text className="mt-3 text-gray-500">Loading items...</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="p-4 pb-10"
          ListEmptyComponent={
            <View className="items-center py-10">
              <Text className="text-base text-gray-500">No items found.</Text>

              <Text className="mt-1 text-sm text-gray-400">
                Add your first item above.
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default ItemCrudComponent;
