import { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

import { Button } from "./Button";
import { Field } from "./Field";

const dataInput = [
  { title: 'email', placeholder: 'Адрес электронной почты' },
  { title: 'password', placeholder: 'Пароль' }
];

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = () => {
    console.log('data', values);
    Keyboard.dismiss();
    setValues(initialValues)
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
        title="Войти"
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