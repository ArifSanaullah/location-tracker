import { FETCH_TRACKS, CREATE_TRACK } from "../actionTypes";

const trackReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return action.payload; // NOTE: we returned only action.payload in here. reason is the whenever we are making an api request we ahvfe to make sure that we don't get any other stuff in the response of that request. this is called single source of truth. we getting tracks only from api's response and nowhere else.
    case CREATE_TRACK:
      console.log(action.payload.name, action.payload.locations.length);
    default:
      return state;
  }
};

export default trackReducer;
