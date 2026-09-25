import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { registerUser } from '../../services/auth';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let valid = true;

    setNameError('');
    setEmailError('');
    setPasswordError('');

    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else if (name.length <= 2) {
      setNameError('Please enter a valid name');
      valid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    }

    return valid;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // API call will go here
      // await loginUser({ email, password });

      await registerUser(email, password);
      Alert.alert('Success', 'An email verification code has been sent.');

      console.log('Login:', email);

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Registration failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      className="mt-2.5 w-full flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerClassName="grow justify-center p-2.5"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full max-w-[420px] self-center rounded-[10px] bg-[#beab90] p-6 shadow-lg">
          {/* Header */}
          <View className="mb-[30px] items-center">
            <View className="mb-[18px] h-16 w-16 items-center justify-center rounded-[20px] bg-violet-600">
              <Text className="text-[30px] font-extrabold text-white">V</Text>
            </View>

            <Text className="mb-2 text-[28px] font-extrabold text-gray-900">
              Welcome Back 👋
            </Text>

            <Text className="text-center text-sm text-gray-500">
              Login to continue to your account
            </Text>
          </View>

          {/* Form */}
          <View className="w-full">
            {/* Name */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Full Name
            </Text>

            <View
              className={`h-[54px] w-full flex-row items-center rounded-[10px] border bg-gray-50 px-[14px] ${
                nameError ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <Text className="mr-2.5 text-[18px]">✉</Text>

              <TextInput
                className="h-full flex-1 text-[15px] text-gray-900"
                placeholder="Enter your name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={text => {
                  setName(text);
                  setNameError('');
                }}
                keyboardType="text"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
            </View>

            {nameError ? (
              <Text className="mb-3 mt-[5px] text-xs text-red-500">
                {nameError}
              </Text>
            ) : null}

            {/* Email */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </Text>

            <View
              className={`h-[54px] w-full flex-row items-center rounded-[10px] border bg-gray-50 px-[14px] ${
                emailError ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <Text className="mr-2.5 text-[18px]">✉</Text>

              <TextInput
                className="h-full flex-1 text-[15px] text-gray-900"
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
                returnKeyType="next"
              />
            </View>

            {emailError ? (
              <Text className="mb-3 mt-[5px] text-xs text-red-500">
                {emailError}
              </Text>
            ) : null}

            {/* Password */}
            <View className="mt-[18px] flex-row items-center justify-between">
              <Text className="mb-2 text-sm font-semibold text-gray-700">
                Password
              </Text>
            </View>

            <View
              className={`h-[54px] w-full flex-row items-center rounded-[10px] border bg-gray-50 px-[14px] ${
                passwordError ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <Text className="mr-2.5 text-[18px]">🔒</Text>

              <TextInput
                className="h-full flex-1 text-[15px] text-gray-900"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                returnKeyType="done"
                onSubmitEditing={handleRegister}
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={10}
              >
                <Text className="text-[13px] font-bold text-violet-600">
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </Pressable>
            </View>

            {passwordError ? (
              <Text className="mb-3 mt-[5px] text-xs text-red-500">
                {passwordError}
              </Text>
            ) : null}

            {/* Register Button */}
            <Pressable
              onPress={handleRegister}
              disabled={loading}
              className="mt-6 h-[54px] items-center justify-center rounded-[10px] bg-violet-600 shadow-lg"
              style={({ pressed }) => [
                pressed && {
                  transform: [{ scale: 0.98 }],
                },
                loading && {
                  opacity: 0.7,
                },
              ]}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text className="text-base font-bold text-white">Register</Text>
              )}
            </Pressable>

            {/* Login */}
            <View className="mt-6 flex-row justify-center">
              <Text className="text-sm text-gray-500">
                Already have an account?
              </Text>

              <Pressable onPress={handleLogin}>
                <Text className="text-sm font-bold text-violet-600">Login</Text>
              </Pressable>
            </View>
          </View>

          {/* Go Back Button */}
          <View className="w-1/4 self-center">
            <Pressable
              onPress={handleGoback}
              className="mt-6 h-[54px] items-center justify-center rounded-[10px] bg-violet-600 shadow-lg"
            >
              <Text className="text-base font-bold text-white">Go Back</Text>
            </Pressable>
          </View>

          {/* Footer */}
          <Text className="mt-[25px] text-center text-[11px] leading-[17px] text-gray-400">
            By continuing, you agree to our Terms & Privacy Policy.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
