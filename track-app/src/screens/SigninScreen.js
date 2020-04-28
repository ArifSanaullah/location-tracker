import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { LinearGradient } from "expo-linear-gradient";

function SigninScreen() {
  const { state, signin } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <AuthForm
          errorMessage={state.signinErrorMessage}
          formHeader="Sign In to your Account"
          submitButtonTitle="Sign In"
          onSubmit={signin}
        />
        <NavLink
          routeName="Signup"
          text="Don't have an account? Sign Up instead!"
        />
      </View>
    </LinearGradient>
  );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
