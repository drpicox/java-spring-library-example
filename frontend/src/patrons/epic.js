import { combineEpics } from 'redux-observable';

import ajax from '../api';
import { CREATE_PATRON, fetchPatronFulfilled } from './actions';
import { setView } from '../actions';

export function createPatronEpic(action$, store) {
  return action$
    .ofType(CREATE_PATRON)
    .mergeMap(action =>
      ajax
        .post(`/patrons`, action.patron)
        .mergeMap(result => [
          fetchPatronFulfilled(result.response),
          setView('ViewPatron', result.response.id),
        ]),
    );
}

export default combineEpics(createPatronEpic);
