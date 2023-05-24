import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export const Field = ({ title, placeholder, value, onChange }) => {
  const isPassword = title === 'password';
  const [secure, setSecure] = useState(isPassword)

  return (
    <View style={[styles.containerInput, isPassword && { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure}
      // onFocus={ }
      />
      {isPassword && <Pressable
        style={{ marginRight: 16 }}
        onPress={() => setSecure(!secure)}
      >
        <Text style={styles.linkText} >Показать</Text>
      </Pressable>}
    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    marginHorizontal: 16,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e8e8e8',
    marginBottom: 16
  },
  input: {
    height: 50,
    padding: 16,
    color: '#212121',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19
  },
  linkText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1b4371'
  },
})