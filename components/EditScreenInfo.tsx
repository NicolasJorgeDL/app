import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Login = () => {
  const [text, onChangeText] = React.useState("");
  const [password2, onChangePassword] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Usuario"
        textContentType="username"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password2}
        placeholder="Senha"
        textContentType="password"
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    alignContent: "center",
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000',
    backgroundColor: '#E5DFF0'
  },
});

export default Login;