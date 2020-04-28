import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
} from "../actionTypes";
import { navigate } from "../navigationRef";

export const signup = (dispatch) => async ({ email, password }) => {
  dispatch({ type: SIGNUP, payload: "" });
  try {
    const response = await trackerApi.post("/signup/", { email, password });

    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: "Something went wrong with signup :/",
    });
  }
};

export const signin = (dispatch) => async ({ email, password }) => {
  try {
    dispatch({ type: SIGNIN, payload: "" });

    const response = await trackerApi.post("/signin", { email, password });

    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: "Something went wrong with sign in :/",
    });
  }
};

export const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGNIN_SUCCESS, payload: token });
    navigate("TrackList");
  } else {
    navigate("Signin");
  }
};

export const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: SIGNOUT });
  navigate("Signin");
  //on success setstate to signedout
  //on fail throw an error message somewhere
};
