import { View, Text, Image, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ReanimatedExample = () => {
  const flip = useSharedValue(0);

  const frontImageSource = {
    uri: 'https://i.pinimg.com/736x/89/45/45/894545939a29407e74ed40a2f9123e87.jpg',
  };

  const backImageSource = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvy-fkGqz8mIz39oHCuiuhBEjLVbOX34QKX1-IocskBx0CQkCqjQpFx51Q&s=10',
  };

  const animatedStyleFront = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${flip.value}deg` }],
      opacity: flip.value >= 90 ? 0 : 1,
    };
  });

  const animatedStyleBack = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${flip.value + 180}deg` }],
      opacity: flip.value >= 90 ? 1 : 0,
    };
  });

  const handleFlip = () => {
    flip.value = withSpring(flip.value === 0 ? 180 : 0);
  };

  return (
    <View className="flex-1 justify-center items-center bg-purple-400">
      <View className="w-[96%] h-80">
        <Animated.View
          style={[animatedStyleFront]}
          className="absolute w-[100%] h-full rounded-md bg-orange-500 justify-center items-center p-2"
        >
          <Image
            source={frontImageSource}
            className="w-full h-72 rounded-lg"
            resizeMode="cover"
          />
          <Text>Front Side</Text>
        </Animated.View>
        <Animated.View
          style={[animatedStyleBack]}
          className="absolute w-[100%] h-full rounded-md bg-orange-500 justify-center items-center p-2"
        >
          <Image
            source={backImageSource}
            className="w-full h-72 rounded-lg"
            resizeMode="cover"
          />
          <Text>Back Side</Text>
        </Animated.View>
      </View>

      <Pressable
        onPress={handleFlip}
        className="mt-20 bg-fuchsia-500 px-6 py-3 rounded-lg "
      >
        <Text className="font-bold text-3xl">Flip</Text>
      </Pressable>
    </View>
  );
};

export default ReanimatedExample;
