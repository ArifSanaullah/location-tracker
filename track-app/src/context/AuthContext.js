import createDataContext from "./createDataContext";
import authReducer from "../reducers/authReducers";
import {
  signup,
  signin,
  signout,
  tryLocalSignin,
} from "../actions/authActions";

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, tryLocalSignin },
  { isSignedIn: false, signinErrorMessage: "", signupErrorMessage: "" }
);
