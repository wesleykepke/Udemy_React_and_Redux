import { FETCH_WEATHER } from '../actions/index';

/*
Initial state is an array, because we want to store a list of
weather stuff.
*/
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // [city, city, city]
  }
  return state;
}
