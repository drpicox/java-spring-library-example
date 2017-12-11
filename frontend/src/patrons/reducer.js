import { FETCH_PATRON_FULFILLED, FETCH_PATRONS_FULFILLED } from './actions';

export default function patrons(state = {}, action) {
  switch (action.type) {
    case FETCH_PATRON_FULFILLED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }

    case FETCH_PATRONS_FULFILLED: {
      const newState = {};
      action.payload.forEach(patron => {
        newState[patron.id] = patron;
      });
      return newState;
    }

    default:
      return state;
  }
}
