import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function AccountScreen() {
  const { signout } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]} style={{flex: 1}}
    >
      <View style={styles.container}>
        <Spacer>
          <TouchableOpacity onPress={signout} >
            <Text style={styles.button} >Sign Out</Text>
          </TouchableOpacity>
        </Spacer>
      </View>
    </LinearGradient>
  );
}

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: (
    <MaterialCommunityIcons
      name="account-circle"
      size={20}
      style={{ color: "#f8f8f7" }}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f8f8f7",
    textAlign: "center",
    paddingVertical: 3,
    fontSize: 24,
    color: "#5b5a62",
    borderRadius: 5
  },
});

export default AccountScreen;
