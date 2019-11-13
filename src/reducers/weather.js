import { SET_WEATHER, SET_ERROR } from "../actions/types";

const initialState = { loaded: false, error: false };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (action.type) {
    case SET_WEATHER:
      return { ...payload, loaded: true, error: false };
    case SET_ERROR: {
      return { loaded: false, error: true };
    }
    default:
      return state;
  }
}
