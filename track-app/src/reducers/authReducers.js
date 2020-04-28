import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
} from "../actionTypes";

const authReducers = (state, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, signupErrorMessage: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, signupErrorMessage: "", token: action.payload };
    case SIGNUP_FAIL:
      return { ...state, signupErrorMessage: action.payload };
    case SIGNIN:
      return { ...state, signinErrorMessage: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, signinErrorMessage: "", token: action.payload };
    case SIGNIN_FAIL:
      return { ...state, signinErrorMessage: action.payload };
    case SIGNOUT:
      return { ...state, token: "" };
    default:
      return state;
  }
};

export default authReducers;
