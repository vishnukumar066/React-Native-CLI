import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ImageComponentExample = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Cover Image */}
        <Image
          source={{
            uri: 'https://cdn.wallpapersafari.com/20/43/gMr41D.jpg',
          }}
          resizeMode="cover"
          style={styles.coverImage}
        />

        {/* Profile Image */}
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/074/101/490/small/a-pink-wall-with-flowers-and-greenery-free-photo.jpeg',
            }}
            resizeMode="cover"
            style={styles.profileImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    position: 'relative',
  },

  coverImage: {
    width: '100%',
    height: 250,
  },

  profileImageWrapper: {
    position: 'absolute',
    top: 190,
    left: 20,

    width: 120,
    height: 120,

    borderRadius: 60,
    backgroundColor: '#ffffff',

    padding: 4,

    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 56,
  },
});

export default ImageComponentExample;
