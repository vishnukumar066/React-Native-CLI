import { View, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastDemo = () => {
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Your operation was completed successfully. 👋',
    });
  };

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong. Please try again. ❌',
    });
  };

  const showWarningToast = () => {
    Toast.show({
      type: 'warning',
      text1: 'Warning',
      text2: 'Please check your information before continuing. ⚠️',
    });
  };

  const showInfoToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Information',
      text2: 'A verification email has been sent to you. ℹ️',
    });
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-gray-900">Toast Demo</Text>

      <Text className="text-gray-500 mt-1 mb-6">
        Test all available toast types
      </Text>

      {/* Success */}
      <TouchableOpacity
        onPress={showSuccessToast}
        className="bg-green-600 p-3 rounded-xl items-center mb-3"
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold">Show Success Toast</Text>
      </TouchableOpacity>

      {/* Error */}
      <TouchableOpacity
        onPress={showErrorToast}
        className="bg-red-600 p-3 rounded-xl items-center mb-3"
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold">Show Error Toast</Text>
      </TouchableOpacity>

      {/* Warning */}
      <TouchableOpacity
        onPress={showWarningToast}
        className="bg-orange-500 p-3 rounded-xl items-center mb-3"
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold">Show Warning Toast</Text>
      </TouchableOpacity>

      {/* Info */}
      <TouchableOpacity
        onPress={showInfoToast}
        className="bg-blue-600 p-3 rounded-xl items-center mb-3"
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold">Show Info Toast</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToastDemo;
