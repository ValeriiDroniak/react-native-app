import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export const AddAvatar = () => {
  const [imageUri, setImageUri] = useState(null);

  const handlePress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission not granted');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;
      const selectedImageUri = assets[0]?.uri;
      setImageUri(selectedImageUri);
    }
  };

  return (
    <View style={styles.container}
    >
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={{ uri: imageUri }} />
      </View>
      <Pressable
        onPress={handlePress}
        style={[
          styles.btn,
          { borderColor: imageUri ? '#e8e8e8' : '#ff6c00' }
        ]}
      >
        <AntDesign
          name={imageUri ? 'close' : 'plus'}
          size={18}
          color={imageUri ? '#bdbdbd' : '#ff6c00'}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    top: 0,
    left: '50%',
    borderRadius: 16,
    transform: [
      { translateX: -60 },
      { translateY: -60 }],
  },
  imgWrapper: {
    overflow: 'hidden',
    borderRadius: 16
  },
  img: {
    width: '100%',
    height: '100%'
  },
  btn: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ff6c00',
    bottom: 14,
    right: 0,
    transform: [{ translateX: 12.5 }]
  }
})