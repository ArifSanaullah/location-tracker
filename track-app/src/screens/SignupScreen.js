import React, { useContext } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { LinearGradient } from "expo-linear-gradient";

function SignupScreen() {
  const { state, signup } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={styles.gradient}
    >
      <StatusBar backgroundColor="#5b5a62" barStyle="light-content" />
      <View style={styles.container}>
        <AuthForm
          errorMessage={state.signupErrorMessage}
          formHeader="Sign Up for Tracker"
          submitButtonTitle="Sign Up"
          onSubmit={signup}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign In instead!"
        />
      </View>
    </LinearGradient>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  gradient: {
    flex: 1,
  },
});

export default SignupScreen;
