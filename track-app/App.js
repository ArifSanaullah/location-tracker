import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome } from "@expo/vector-icons";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} style={{color:"#f8f8f7"}} />,
};

const mainFlow = createBottomTabNavigator(
  {
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "#89818d",
      activeBackgroundColor: "#cfcdd7",
      activeTintColor: "#5b5a62",
      inactiveTintColor: "#d7cabd",
      style: {
        borderTopWidth: 0,
      },
    },
  }
);

// #f8f8f7  #cfcdd7 #a09db0 #89818d #5b5a62 #d7cabd

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow,
});

const App = createAppContainer(switchNavigator);

export default () => (
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
);
