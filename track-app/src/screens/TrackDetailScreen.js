import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context as TrackCotnext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";

function TractDetailScreen({ navigation }) {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackCotnext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={styles.gradient}
    >
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </LinearGradient>
  );
}

TractDetailScreen.navigationOptions = {
  title: "Track Details",
  headerTintColor: "#f8f8f7",
  headerStyle: {
    backgroundColor: "#5b5a62",
  },
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  title: {
    fontSize: 48,
    margin: 10,
    marginTop: 5,
    color: "#f8f8f7"
  },
  gradient: {
    flex: 1,
  },
});

export default TractDetailScreen;
