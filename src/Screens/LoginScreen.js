import { Pressable, StyleSheet, Text, View } from 'react-native';

import { LoginForm } from '../components/LoginForm';

export const LoginScreen = ({ onChangeLogin }) => {
  return (
    <View style={[styles.wrapper, { overflow: 'hidden', paddingBottom: 110 }]}>

      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Войти</Text>
      </View>

      <LoginForm />

      <View style={styles.wraperText}>
        <Text style={styles.linkText}>Нет аккаунта? </Text>
        <Pressable onPress={() => onChangeLogin(false)}>
          <Text style={styles.linkText} >Зарегистрироваться</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  wrapperTitle: {
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32
  },
  title: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35
  },
  wraperText: {
    width: '100%',
    flexDirection: 'row',
    // gap: 2,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  linkText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1b4371'
  },
});