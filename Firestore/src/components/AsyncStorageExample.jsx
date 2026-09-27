import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Check, Download, Save, Trash2, User } from 'lucide-react-native';

const STORAGE_KEY = 'userName';

const AsyncStorageExample = () => {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const [loading, setLoading] = useState(false);

  // Save name
  const handleSaveName = async () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      Alert.alert('Required', 'Please enter your name first.');
      return;
    }

    try {
      setLoading(true);
      await AsyncStorage.setItem(STORAGE_KEY, trimmedName);
      setSavedName(trimmedName);
      setName('');
      Alert.alert('Success', 'Your name has been saved successfully.');
    } catch (error) {
      console.error('Error saving name:', error);
      Alert.alert('Error', 'Something went wrong while saving your name.');
    } finally {
      setLoading(false);
    }
  };

  // Get name
  const handleGetName = async () => {
    try {
      setLoading(true);
      const storedName = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedName !== null) {
        console.log('Stored name:', storedName);
        setSavedName(storedName);
        setName(storedName);
      } else {
        setSavedName('');
        Alert.alert('Not Found', 'No saved name was found in AsyncStorage.');
      }
    } catch (error) {
      console.error('Error getting name:', error);
      Alert.alert('Error', 'Something went wrong while getting your name.');
    } finally {
      setLoading(false);
    }
  };

  // Remove name
  const handleRemoveName = async () => {
    try {
      setLoading(true);

      await AsyncStorage.removeItem(STORAGE_KEY);

      setName('');
      setSavedName('');

      Alert.alert(
        'Removed',
        'Your saved name has been removed successfully.',
      );
    } catch (error) {
      console.error('Error removing name:', error);
      Alert.alert('Error', 'Something went wrong while removing your name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-red-200"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerClassName="grow p-5 pt-10 pb-10"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-7 items-center">
          <View className="mb-4 h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-600 shadow-lg">
            <User size={32} color="#ffffff" strokeWidth={2.2} />
          </View>

          <Text className="mb-1.5 text-[28px] font-extrabold text-slate-900">
            AsyncStorage
          </Text>

          <Text className="text-center text-sm text-slate-500">
            Store and manage your data locally
          </Text>
        </View>

        {/* Main Card */}
        <View className="mb-[18px] rounded-[20px] bg-white p-5 shadow-md">
          <Text className="mb-2.5 text-[15px] font-bold text-slate-700">
            Your Name
          </Text>

          <View className="mb-[18px] h-[54px] flex-row items-center rounded-xl border-[1.5px] border-slate-300 bg-slate-50 px-[15px]">
            <User size={21} color="#64748b" strokeWidth={2} />

            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#94a3b8"
              value={name}
              onChangeText={setName}
              className="ml-2.5 flex-1 py-0 text-base text-slate-900"
              autoCapitalize="words"
              returnKeyType="done"
            />
          </View>

          {/* Save Button */}
          <Pressable
            onPress={handleSaveName}
            disabled={loading}
            className="mb-3 h-[52px] flex-row items-center justify-center gap-2.5 rounded-xl bg-blue-600"
            style={({ pressed }) => [
              pressed && {
                opacity: 0.75,
                transform: [{ scale: 0.98 }],
              },
              loading && {
                opacity: 0.6,
              },
            ]}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <>
                <Save size={20} color="#ffffff" strokeWidth={2.2} />

                <Text className="text-base font-bold text-white">
                  Save Name
                </Text>
              </>
            )}
          </Pressable>

          {/* Get Button */}
          <Pressable
            onPress={handleGetName}
            disabled={loading}
            className="mb-3 h-[52px] flex-row items-center justify-center gap-2.5 rounded-xl bg-teal-700"
            style={({ pressed }) => [
              pressed && {
                opacity: 0.75,
                transform: [{ scale: 0.98 }],
              },
              loading && {
                opacity: 0.6,
              },
            ]}
          >
            <Download size={20} color="#ffffff" strokeWidth={2.2} />

            <Text className="text-base font-bold text-white">
              Get Saved Name
            </Text>
          </Pressable>

          {/* Remove Button */}
          <Pressable
            onPress={handleRemoveName}
            disabled={loading}
            className="h-[52px] flex-row items-center justify-center gap-2.5 rounded-xl bg-red-600"
            style={({ pressed }) => [
              pressed && {
                opacity: 0.75,
                transform: [{ scale: 0.98 }],
              },
              loading && {
                opacity: 0.6,
              },
            ]}
          >
            <Trash2 size={20} color="#ffffff" strokeWidth={2.2} />

            <Text className="text-base font-bold text-white">
              Remove Name
            </Text>
          </Pressable>
        </View>

        {/* Saved Data */}
        {savedName ? (
          <View className="mb-[18px] rounded-[18px] border border-green-200 bg-white p-[18px]">
            <View className="mb-3 flex-row items-center">
              <View className="mr-2.5 h-[30px] w-[30px] items-center justify-center rounded-full bg-green-600">
                <Check size={18} color="#ffffff" strokeWidth={3} />
              </View>

              <Text className="text-[15px] font-bold text-green-800">
                Saved Data
              </Text>
            </View>

            <Text className="mb-[5px] text-[22px] font-extrabold text-slate-900">
              {savedName}
            </Text>

            <Text className="text-xs text-slate-500">
              Storage Key: {STORAGE_KEY}
            </Text>
          </View>
        ) : null}

        {/* Information */}
        <View className="rounded-2xl bg-sky-100 p-[18px]">
          <Text className="mb-1.5 text-[15px] font-extrabold text-sky-800">
            How it works
          </Text>

          <Text className="text-[13px] leading-5 text-sky-900">
            AsyncStorage stores simple key-value data locally on your device.
            The saved name remains available even after closing and reopening
            the app.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AsyncStorageExample;
