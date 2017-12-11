import { FETCH_MATERIAL_FULFILLED, FETCH_MATERIALS_FULFILLED } from './actions';

export default function materials(state = {}, action) {
  switch (action.type) {
    case FETCH_MATERIAL_FULFILLED: {
      const material = action.payload;
      return {
        ...state,
        [material.id]: material,
      };
    }

    case FETCH_MATERIALS_FULFILLED: {
      const newState = {};
      action.payload.forEach(material => {
        newState[material.id] = material;
      });
      return newState;
    }
    default:
      return state;
  }
}
