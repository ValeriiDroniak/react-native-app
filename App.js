import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/images/bg-home-x2.jpg')}
        style={styles.bgImage}
      >

        <RegistrationScreen />

        <StatusBar style="auto" />
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
