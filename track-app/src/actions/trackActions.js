import { FETCH_TRACKS, CREATE_TRACK } from "../actionTypes";
import trackerApi from "../api/tracker";

export const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({
    type: FETCH_TRACKS,
    payload: response.data,
  });
};

export const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};
