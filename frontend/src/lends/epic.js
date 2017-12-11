import { combineEpics } from 'redux-observable';

import ajax from '../api';

import { CREATE_LEND, UPDATE_LEND, fetchLendFulfilled } from './actions';

export function createLendCommentEpic(action$, store) {
  return action$
    .ofType(CREATE_LEND)
    .mergeMap(action =>
      ajax
        .post(`/lends`, action.lend)
        .map(result => fetchLendFulfilled(result.response)),
    );
}

export function updateLendCommentEpic(action$, store) {
  return action$
    .ofType(UPDATE_LEND)
    .mergeMap(action =>
      ajax
        .put(`/lends/${action.lend.id}`, action.lend)
        .map(result => fetchLendFulfilled(result.response)),
    );
}

export default combineEpics(createLendCommentEpic, updateLendCommentEpic);
