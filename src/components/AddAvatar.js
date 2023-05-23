import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import testAvatar from '../images/man.png'

export const AddAvatar = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(testAvatar);
  }, [])

  const handlePress = () => {
    if (!image) {
      setImage(testAvatar);
      return;
    }

    setImage(null)
  }

  return (
    <View style={styles.container}
    >
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={image}
        />
      </View>
      <Pressable
        onPress={handlePress}
        style={[
          styles.btn,
          { borderColor: image ? '#e8e8e8' : '#ff6c00' }
        ]}
      >
        <AntDesign
          name={image ? 'close' : 'plus'}
          size={18}
          color={image ? '#bdbdbd' : '#ff6c00'}
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