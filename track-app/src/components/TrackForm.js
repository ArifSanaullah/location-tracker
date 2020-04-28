import React, { useContext } from "react";
import { Input, Text } from "react-native-elements";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.container}>
      <Spacer>
        <Input
          placeholder="Enter track name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
          <Text style={styles.button}>
            {" "}
            {recording ? "Stop" : "Start Recording"}{" "}
          </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <TouchableOpacity onPress={saveTrack}>
            <Text style={styles.button}>Save Recording</Text>
          </TouchableOpacity>
        ) : null}
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  button: {
    backgroundColor: "#f8f8f7",
    fontSize: 24,
    textAlign: "center",
    color: "#5b5a62",
    borderRadius: 5,
    paddingVertical: 3,
  },
});

export default TrackForm;
