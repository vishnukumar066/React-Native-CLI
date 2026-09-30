// import { useState } from 'react';
// import { View, Text, Switch } from 'react-native';

// const SwitchButton = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   const toggleSwitch = () => {
//     setIsEnabled(!isEnabled);
//   };

//   return (
//     <View className="mt-20 justify-center items-center bg-orange-500 mx-36 p-10">
//       <Text>SwitchButton</Text>

//       <Switch
//         trackColor={{ false: '#000000', true: '#f0f0f0' }}
//         thumbColor={isEnabled ? 'red' : 'yellow'}
//         ios_backgroundColor={{ true: '#000' }}
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//               style={{ backgroundColor: 'green' }}
//       />
//     </View>
//   );
// };

// export default SwitchButton;

import { Check, Cross, X } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(isEnabled ? 70 : 0, {
            duration: 300,
            easing: Easing.out(Easing.cubic),
          }),
        },
      ],
    };
  });

  return (
    <View className="mt-3 mx-10 items-center rounded-3xl bg-orange-500 p-5">
      <Text className="mb-6 text-xl font-bold text-white">Modern Switch</Text>

      <Pressable
        onPress={toggleSwitch}
        className={`h-16 w-36 rounded-full p-2 ${
          isEnabled ? 'bg-emerald-500' : 'bg-slate-700'
        }`}
      >
        {/* ON / OFF */}
        <View className="absolute inset-0 flex-row items-center justify-between px-5">
          <Text
            className={`text-sm font-extrabold ${
              isEnabled ? 'text-white' : 'text-slate-400'
            }`}
          >
            ON
          </Text>

          <Text
            className={`text-sm font-extrabold ${
              !isEnabled ? 'text-white' : 'text-slate-400'
            }`}
          >
            OFF
          </Text>
        </View>

        {/* Animated Thumb */}
        <Animated.View
          style={thumbAnimatedStyle}
          className="h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
        >
          <View
            className={`h-10 w-10 items-center justify-center rounded-full ${
              isEnabled ? 'bg-emerald-500' : 'bg-slate-700'
            }`}
          >
            {isEnabled ? (
              <Check size={20} strokeWidth={4} color="white" />
            ) : (
              <X size={20} strokeWidth={4} color="white" />
            )}
          </View>
        </Animated.View>
      </Pressable>

      <Text className="mt-5 text-base font-semibold text-white">
        {isEnabled ? 'Switch is ON' : 'Switch is OFF'}
      </Text>
    </View>
  );
};

export default SwitchButton;
