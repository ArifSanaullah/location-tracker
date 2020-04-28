import {
  ADD_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CHANGE_NAME,
  RESET_CREATE_TRACK_FORM
} from "../actionTypes";

const locationReducers = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };

    case START_RECORDING:
      return { ...state, recording: true };

    case STOP_RECORDING:
      return { ...state, recording: false };

    case ADD_LOCATION: {
      return { ...state, locations: [...state.locations, action.payload] };
    }

    case CHANGE_NAME:
      return { ...state, name: action.payload };
    
    case RESET_CREATE_TRACK_FORM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default locationReducers;
