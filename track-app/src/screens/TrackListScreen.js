import React, { useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StatusBar,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

function TrackListScreen({ navigation }) {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <LinearGradient
      colors={["#89818d", "#5b5a62"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1 }}
    >
      <View>
        <NavigationEvents onWillFocus={fetchTracks} />
        <StatusBar backgroundColor="#5b5a62" barStyle="light-content" />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.track}
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <LinearGradient
                  colors={["#a09db0", "#a09db0"]}
                  start={[0, 1]}
                  end={[1, 0]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.title}>{item.name}</Text>
                  <Feather name="chevron-right" style={styles.chevron} />
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </LinearGradient>
  );
}

TrackListScreen.navigationOptions = {
  title: "Tracks",
  headerTintColor: "#f8f8f7",
  headerStyle: {
    backgroundColor: "#5b5a62",
  },
};

// #f8f8f7  #cfcdd7 #a09db0 #89818d #5b5a62 #d7cabd

const styles = StyleSheet.create({
  chevron: {
    fontSize: 32,
    color: "#f8f8f7",
  },
  title: {
    color: "#f8f8f7",
    fontSize: 28,
    margin: 10,
    padding: 0,
  },
  linearGradient: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderRadius: 5,
    margin: 10,
  },
});

export default TrackListScreen;
