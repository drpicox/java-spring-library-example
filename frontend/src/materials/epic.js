import { combineEpics } from 'redux-observable';

import ajax from '../api';
import { CREATE_MATERIAL, fetchMaterialFulfilled } from './actions';
import { setView } from '../actions';

export function createMaterialEpic(action$, store) {
  return action$
    .ofType(CREATE_MATERIAL)
    .mergeMap(action =>
      ajax
        .post(`/materials`, action.material)
        .mergeMap(result => [
          fetchMaterialFulfilled(result.response),
          setView('ViewMaterial', result.response.id),
        ]),
    );
}

export default combineEpics(createMaterialEpic);
