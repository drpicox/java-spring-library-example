import { FETCH_LEND_FULFILLED, FETCH_LENDS_FULFILLED } from './actions';

export default function lends(state = {}, action) {
  switch (action.type) {
    case FETCH_LEND_FULFILLED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }

    case FETCH_LENDS_FULFILLED: {
      const newState = {};
      action.payload.forEach(LEND => (newState[LEND.id] = LEND));
      return newState;
    }

    default:
      return state;
  }
}
