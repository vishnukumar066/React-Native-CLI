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
import { forgotPassword } from '../../services/auth';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('vishnukumarhs077@gmail.com');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    let valid = true;

    setEmailError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // API call will go here
      // await loginUser({ email, password });
      await forgotPassword(email);
      Alert.alert(
        'Reset email send successfully',
        'A password reset email has been sent. Please check your inbox and spam folder.',
      );

      console.log('Login:', email);

      setEmail('');
    } catch (error) {
      console.log('Submission failed');
      Alert.alert('Password reset failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
              Oh ho! Forgot Password
            </Text>

            <Text className="text-center text-sm text-gray-500">
              Enter email to continue to your account
            </Text>
          </View>

          {/* Form */}
          <View className="w-full">
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

            {/* Submit Button */}
            <Pressable
              onPress={handleSubmit}
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
                <Text className="text-base font-bold text-white">Submit</Text>
              )}
            </Pressable>

            {/* Login */}
            <View className="mt-6 flex-row justify-center">
              <Text className="text-sm text-gray-500">Back to</Text>

              <Pressable onPress={handleLogin}>
                <Text className="text-sm font-bold text-violet-600">
                  {' '}
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
