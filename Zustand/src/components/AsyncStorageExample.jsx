import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
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
      if (await AsyncStorage.removeItem(STORAGE_KEY)) {
        setName('');
        setSavedName('');
        Alert.alert(
          'Removed',
          'Your saved name has been removed successfully.',
        );
      } else {
        Alert.alert('Not Found', 'Please save a name to remove.');
      }
    } catch (error) {
      console.error('Error removing name:', error);
      Alert.alert('Error', 'Something went wrong while removing your name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <User size={32} color="#ffffff" strokeWidth={2.2} />
          </View>

          <Text style={styles.title}>AsyncStorage</Text>

          <Text style={styles.subtitle}>
            Store and manage your data locally
          </Text>
        </View>

        {/* Main Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Your Name</Text>

          <View style={styles.inputContainer}>
            <User size={21} color="#64748b" strokeWidth={2} />

            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#94a3b8"
              value={name}
              onChangeText={setName}
              style={styles.input}
              autoCapitalize="words"
              returnKeyType="done"
            />
          </View>

          {/* Save Button */}
          <Pressable
            onPress={handleSaveName}
            disabled={loading}
            style={({ pressed }) => [
              styles.button,
              styles.saveButton,
              pressed && styles.buttonPressed,
              loading && styles.buttonDisabled,
            ]}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <>
                <Save size={20} color="#ffffff" strokeWidth={2.2} />

                <Text style={styles.buttonText}>Save Name</Text>
              </>
            )}
          </Pressable>

          {/* Get Button */}
          <Pressable
            onPress={handleGetName}
            disabled={loading}
            style={({ pressed }) => [
              styles.button,
              styles.getButton,
              pressed && styles.buttonPressed,
              loading && styles.buttonDisabled,
            ]}
          >
            <Download size={20} color="#ffffff" strokeWidth={2.2} />

            <Text style={styles.buttonText}>Get Saved Name</Text>
          </Pressable>

          {/* Remove Button */}
          <Pressable
            onPress={handleRemoveName}
            disabled={loading}
            style={({ pressed }) => [
              styles.button,
              styles.removeButton,
              pressed && styles.buttonPressed,
              loading && styles.buttonDisabled,
            ]}
          >
            <Trash2 size={20} color="#ffffff" strokeWidth={2.2} />

            <Text style={styles.buttonText}>Remove Name</Text>
          </Pressable>
        </View>

        {/* Saved Data */}
        {savedName ? (
          <View style={styles.savedCard}>
            <View style={styles.savedHeader}>
              <View style={styles.checkContainer}>
                <Check size={18} color="#ffffff" strokeWidth={3} />
              </View>

              <Text style={styles.savedTitle}>Saved Data</Text>
            </View>

            <Text style={styles.savedName}>{savedName}</Text>

            <Text style={styles.storageKey}>Storage Key: {STORAGE_KEY}</Text>
          </View>
        ) : null}

        {/* Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>How it works</Text>

          <Text style={styles.infoText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecaca',
  },

  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,

    elevation: 6,
    shadowColor: '#2563eb',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },

  // Main Card
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,

    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 10,
  },

  inputContainer: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#f8fafc',
    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#0f172a',
    marginLeft: 10,
    paddingVertical: 0,
  },

  // Buttons
  button: {
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 12,
  },

  saveButton: {
    backgroundColor: '#2563eb',
  },

  getButton: {
    backgroundColor: '#0f766e',
  },

  removeButton: {
    backgroundColor: '#dc2626',
    marginBottom: 0,
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  // Saved Data
  savedCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },

  savedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  checkContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  savedTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#166534',
  },

  savedName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 5,
  },

  storageKey: {
    fontSize: 12,
    color: '#64748b',
  },

  // Info
  infoCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    padding: 18,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#075985',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#0c4a6e',
  },
});
