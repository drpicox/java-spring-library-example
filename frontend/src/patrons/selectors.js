import { createSelector } from 'reselect';

export function getPatrons(state) {
  return state.patrons;
}

export function getPatron(state, { patronId }) {
  return getPatrons(state)[patronId] || {};
}

export const getPatronsList = createSelector([getPatrons], patrons =>
  Object.values(patrons),
);
