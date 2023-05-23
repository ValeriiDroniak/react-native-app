import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Field } from "./Field";

const dataInput = [
  { title: 'name', placeholder: 'Логин' },
  { title: 'email', placeholder: 'Адрес электронной почты' },
  { title: 'password', placeholder: 'Пароль' }
];

const initialValues = { name: '', email: '', password: '' };

export const RegistrationForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = () => {
    console.log('1111', values)
    // fetch()
    // setValues(initialValues)
  };



  return (
    <View style={styles.register}>
      {dataInput.map(({ title, placeholder }) =>
        <Field
          placeholder={placeholder}
          value={values[title]}
          onChange={value => setValues(state => ({ ...state, [title]: value }))}
          key={title}
        />
      )}

      <Pressable
        style={styles.btn}
        onPress={handleSubmit}
      >
        <Text style={styles.btnText}>Зарегистрироваться</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  register: {
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
  },
  btn: {
    display: 'flex',
    marginTop: 28,
    marginBottom: 16,
    marginHorizontal: 16,
    maxWidth: '100%',
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19
  },
})