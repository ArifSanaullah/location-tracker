import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { Context as LocationContext } from "../context/LocationContext";

function Map() {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <ActivityIndicator
        size="large"
        color="#f8f8f7"
        style={{
          alignSelf: "center",
          flex: 1
        }}
      />
    );
  }

  return (
    <>
      <LinearGradient
        colors={["#89818d", "#5b5a62"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}
      >
        <MapView
          style={styles.map}
          initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Circle
            radius={30}
            center={currentLocation.coords}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
          />
          <Polyline
            coordinates={locations.map((location) => location.coords)}
          />
        </MapView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
