import { StyleSheet, TextInput, View } from "react-native"

export const Field = ({ placeholder, value, onChange }) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
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
  }
})