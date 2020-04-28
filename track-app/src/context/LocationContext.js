import createDataContext from "./createDataContext";
import locationReducers from "../reducers/locationReducers";
import {
  startRecording,
  stopRecording,
  addLocation,
  changeName,
  resetCreateTrackForm,
} from "../actions/locationActions";

export const { Context, Provider } = createDataContext(
  locationReducers,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    resetCreateTrackForm,
  },
  { recording: false, locations: [], currentLocation: null, name: "" }
);
