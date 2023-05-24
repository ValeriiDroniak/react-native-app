import { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

import { Button } from "./Button";
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
    console.log('data', values);
    Keyboard.dismiss();
    // fetch()
    // setValues(initialValues)
  };

  return (
    <View style={styles.form}>
      {dataInput.map(({ title, placeholder }) =>
        <Field
          title={title}
          placeholder={placeholder}
          value={values[title]}
          onChange={value => setValues(state => ({ ...state, [title]: value }))}
          key={title}
        />
      )}

      <Button
        title="Зарегистрироваться"
        handleSubmit={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
  },
})