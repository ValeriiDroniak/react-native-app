import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AddAvatar } from '../components/AddAvatar';
import { RegistrationForm } from '../components/RegistrationForm'

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrapper}>
      <AddAvatar />

      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Регистрация</Text>
      </View>

      <RegistrationForm />

      <View style={styles.wraperText}>
        <Text style={styles.linkText}>Уже есть аккаунт?</Text>
        <Pressable>
          <Text style={styles.linkText} >Войти</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    paddingTop: 70,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  wrapperTitle: {
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
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
    gap: 2,
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