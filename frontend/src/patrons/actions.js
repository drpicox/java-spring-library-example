export const CREATE_PATRON = 'CREATE_PATRON';
export function createPatron(patron) {
  return {
    type: CREATE_PATRON,
    patron,
  };
}

export const FETCH_PATRON_FULFILLED = 'FETCH_PATRON_FULFILLED';
export function fetchPatronFulfilled(payload) {
  return {
    type: FETCH_PATRON_FULFILLED,
    payload,
  };
}

export const FETCH_PATRONS_FULFILLED = 'FETCH_PATRONS_FULFILLED';
export function fetchPatronsFulfilled(payload) {
  return {
    type: FETCH_PATRONS_FULFILLED,
    payload,
  };
}
