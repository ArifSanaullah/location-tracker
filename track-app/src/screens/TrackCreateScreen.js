// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TrackForm from "../components/TrackForm";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

function TrackCreateScreen({ isFocused }) {
  // isFocused is coming from the HOC (withNavitationFocus)
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);

  const cb = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [locationError] = useLocation(isFocused || recording, cb);

  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text h2 style={styles.title}>
          Create Track
        </Text>
        <Map />
        {locationError ? (
          <Text>Please enable location services for the application</Text>
        ) : null}
        <TrackForm />
      </View>
    </LinearGradient>
  );
}

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} style={{color: "#f8f8f7"}} />,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    color: "#f8f8f7",
    fontSize: 48
  },
});

export default withNavigationFocus(TrackCreateScreen);
