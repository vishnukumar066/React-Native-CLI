import { useCallback, useMemo, useRef } from 'react';
import { Text, View, Pressable } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

const AppBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Sheet index changed
  const handleSheetChange = useCallback(index => {
    console.log('Bottom Sheet Index:', index);
  }, []);

  // Open sheet
  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  // Close sheet
  const closeSheet = () => {
    bottomSheetRef.current?.close();
  };

  // Expand to 90%
  const expandSheet = () => {
    bottomSheetRef.current?.snapToIndex(2);
  };

  // Minimize to 25%
  const minimizeSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  // Backdrop
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <View className="flex-1 bg-gray-100 px-6 justify-center">
      {/* Main Screen */}
      <View className="items-center">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-black">
          <Text className="text-3xl">📱</Text>
        </View>

        <Text className="text-2xl font-bold text-gray-900">
          Bottom Sheet Demo
        </Text>

        <Text className="mt-2 text-center text-base text-gray-500">
          A complete example using Gorhom Bottom Sheet + NativeWind.
        </Text>

        {/* Open Button */}
        <Pressable
          onPress={openSheet}
          className="mt-8 w-full rounded-2xl bg-black px-6 py-4 active:opacity-80"
        >
          <Text className="text-center text-base font-bold text-white">
            Open Bottom Sheet
          </Text>
        </Pressable>
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: '#ffffff',
          borderRadius: 28,
        }}
        handleIndicatorStyle={{
          width: 45,
          backgroundColor: '#d1d5db',
        }}
      >
        <BottomSheetScrollView
          contentContainerClassName="px-6 pb-10"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-gray-900">
                Quick Actions
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                Manage your options
              </Text>
            </View>

            {/* Close */}
            <Pressable
              onPress={closeSheet}
              className="h-10 w-10 items-center justify-center rounded-full bg-gray-100 active:bg-gray-200"
            >
              <Text className="text-xl text-gray-700">✕</Text>
            </Pressable>
          </View>

          {/* Action Buttons */}
          <View className="mt-6">
            <Text className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Actions
            </Text>

            {/* Edit Profile */}
            <Pressable className="mb-3 flex-row items-center rounded-2xl bg-gray-100 p-4 active:bg-gray-200">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Text className="text-xl">👤</Text>
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-base font-semibold text-gray-900">
                  Edit Profile
                </Text>

                <Text className="mt-1 text-sm text-gray-500">
                  Update your personal information
                </Text>
              </View>

              <Text className="text-xl text-gray-400">›</Text>
            </Pressable>

            {/* Notifications */}
            <Pressable className="mb-3 flex-row items-center rounded-2xl bg-gray-100 p-4 active:bg-gray-200">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                <Text className="text-xl">🔔</Text>
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-base font-semibold text-gray-900">
                  Notifications
                </Text>

                <Text className="mt-1 text-sm text-gray-500">
                  Manage notification preferences
                </Text>
              </View>

              <Text className="text-xl text-gray-400">›</Text>
            </Pressable>

            {/* Share */}
            <Pressable className="mb-3 flex-row items-center rounded-2xl bg-gray-100 p-4 active:bg-gray-200">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Text className="text-xl">↗️</Text>
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-base font-semibold text-gray-900">
                  Share
                </Text>

                <Text className="mt-1 text-sm text-gray-500">
                  Share this application
                </Text>
              </View>

              <Text className="text-xl text-gray-400">›</Text>
            </Pressable>
          </View>

          {/* Sheet Controls */}
          <View className="mt-6">
            <Text className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Sheet Controls
            </Text>

            <View className="flex-row gap-3">
              {/* Minimize */}
              <Pressable
                onPress={minimizeSheet}
                className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 active:bg-gray-100"
              >
                <Text className="text-center text-xl">↙</Text>

                <Text className="mt-2 text-center font-semibold text-gray-800">
                  Minimize
                </Text>
              </Pressable>

              {/* Expand */}
              <Pressable
                onPress={expandSheet}
                className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 active:bg-gray-100"
              >
                <Text className="text-center text-xl">↗</Text>

                <Text className="mt-2 text-center font-semibold text-gray-800">
                  Expand
                </Text>
              </Pressable>

              {/* Close */}
              <Pressable
                onPress={closeSheet}
                className="flex-1 rounded-2xl bg-red-50 p-4 active:bg-red-100"
              >
                <Text className="text-center text-xl">✕</Text>

                <Text className="mt-2 text-center font-semibold text-red-600">
                  Close
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Account Section */}
          <View className="mt-6 rounded-2xl bg-gray-900 p-5">
            <Text className="text-lg font-bold text-white">
              Premium Account
            </Text>

            <Text className="mt-2 text-sm leading-5 text-gray-400">
              Upgrade your account to unlock more features and remove
              limitations.
            </Text>

            <Pressable className="mt-4 rounded-xl bg-white px-5 py-3 active:opacity-80">
              <Text className="text-center font-bold text-gray-900">
                Upgrade Now
              </Text>
            </Pressable>
          </View>

          {/* Danger Zone */}
          <View className="mt-6">
            <Text className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Account
            </Text>

            <Pressable className="rounded-2xl border border-red-100 bg-red-50 p-4 active:bg-red-100">
              <Text className="font-semibold text-red-600">Log Out</Text>

              <Text className="mt-1 text-sm text-red-400">
                Sign out from this device
              </Text>
            </Pressable>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default AppBottomSheet;
