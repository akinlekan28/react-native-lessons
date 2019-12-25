import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={{ margin: 15 }}>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {/* <Text style={styles.error}>My password is {password}</Text> */}
      {password != "" && password.length < 7 ? (
        <Text>Password must be longer than 7 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    marginBottom: 15,
    borderColor: "black",
    borderWidth: 1
  },
  error: {
    color: "red"
  }
});

export default TextScreen;
