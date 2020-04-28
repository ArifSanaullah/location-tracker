import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Input, Text } from "react-native-elements";
import Spacer from "./Spacer";

function AuthForm({ formHeader, errorMessage, submitButtonTitle, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{backgroundColor: "rgba(0,0,0,0.2)"}} >
      <Spacer>
        <Text h3 style={{ color: "#f8f8f7" }}>
          {formHeader}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={{ borderBottomColor: "#f8f8f7" }}
        placeholderTextColor="#f8f8f7"
        labelStyle={styles.label}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        selectionColor="red"
        placeholderTextColor="#f8f8f7"
        inputContainerStyle={{ borderBottomColor: "#f8f8f7" }}
        labelStyle={styles.label}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <TouchableOpacity onPress={() => onSubmit({ email, password })}>
          <Text style={styles.button}>{submitButtonTitle}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  label: {
    color:"#f8f8f7"
  },
  button: {
    backgroundColor: "#f8f8f7",
    borderRadius: 5,
    textAlign: "center",
    paddingVertical: 3,
    fontSize: 24
    
  }
});

export default AuthForm;
