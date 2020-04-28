import createDataContext from "./createDataContext";
import { fetchTracks, createTrack } from "../actions/trackActions";
import trackReducer from "../reducers/trackReducers";

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
