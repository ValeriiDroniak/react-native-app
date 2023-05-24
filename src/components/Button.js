import { Pressable, StyleSheet, Text } from "react-native"

export const Button = ({ title, handleSubmit }) => {
  return (
    <Pressable
      style={styles.btn}
      onPress={handleSubmit}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable >
  )
}

const styles = StyleSheet.create({
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