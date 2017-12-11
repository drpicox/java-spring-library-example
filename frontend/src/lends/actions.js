export const CREATE_LEND = 'CREATE_LEND';
export function createLend(lend) {
  return {
    type: CREATE_LEND,
    lend,
  };
}

export const UPDATE_LEND = 'UPDATE_LEND';
export function updateLend(lend) {
  return {
    type: UPDATE_LEND,
    lend,
  };
}

export const FETCH_LEND_FULFILLED = 'FETCH_LEND_FULFILLED';
export function fetchLendFulfilled(payload) {
  return {
    type: FETCH_LEND_FULFILLED,
    payload,
  };
}

export const FETCH_LENDS_FULFILLED = 'FETCH_LENDS_FULFILLED';
export function fetchLendsFulfilled(payload) {
  return {
    type: FETCH_LENDS_FULFILLED,
    payload,
  };
}
