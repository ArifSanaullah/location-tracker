import {
  ADD_CURRENT_LOCATION,
  STOP_RECORDING,
  START_RECORDING,
  ADD_LOCATION,
  CHANGE_NAME,
  RESET_CREATE_TRACK_FORM,
} from "../actionTypes";

export const startRecording = (dispatch) => () => {
  dispatch({ type: START_RECORDING });
};

export const stopRecording = (dispatch) => () => {
  dispatch({ type: STOP_RECORDING });
};

export const addLocation = (dispatch) => (location, recording) => {
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location,
  });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

export const changeName = (dispatch) => (name) => {
  dispatch({ type: CHANGE_NAME, payload: name });
};

export const resetCreateTrackForm = (dispatch) => () => {
  dispatch({
    type: RESET_CREATE_TRACK_FORM,
    payload: { name: "", locations: [] },
  });
};
