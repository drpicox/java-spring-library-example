import ajax from '../api';

import { DO_POPULATE } from './actions';
import {
  fetchLendsFulfilled,
  fetchMaterialsFulfilled,
  fetchPatronsFulfilled,
} from '../actions';

export function doPopulateEpic(action$) {
  return action$
    .ofType(DO_POPULATE)
    .switchMap(action =>
      ajax
        .get('/populate')
        .mergeMap(result => [
          fetchLendsFulfilled(result.response.lends),
          fetchMaterialsFulfilled(result.response.materials),
          fetchPatronsFulfilled(result.response.patrons),
        ]),
    );
}

export default doPopulateEpic;
