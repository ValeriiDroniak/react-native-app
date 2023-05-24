import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { LoginScreen } from './src/Screens/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./src/images/bg-home-x2.jpg')}
          style={styles.bgImage}
        >

          {!isLogin ? <RegistrationScreen onChangeLogin={setIsLogin} /> :
            <LoginScreen onChangeLogin={setIsLogin} />}

          <StatusBar style="auto" />
        </ImageBackground>
      </View >
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
