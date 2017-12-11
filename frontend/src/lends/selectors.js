import { createSelector } from 'reselect';

export function getLends(state) {
  return state.lends;
}

export const getLendsList = createSelector([getLends], lends =>
  Object.values(lends),
);

function getMaterialId(state, { materialId }) {
  return materialId;
}
function getPatronId(state, { patronId }) {
  return patronId;
}

export const getMaterialCurrentLend = createSelector(
  [getLendsList, getMaterialId],
  (lendsList, materialId) =>
    lendsList.find(
      lend => lend.materialId === materialId && lend.receivingDate === 0,
    ),
);

export const getPatronCurrentLends = createSelector(
  [getLendsList, getPatronId],
  (lendsList, patronId) =>
    lendsList.filter(
      lend => lend.patronId === patronId && lend.receivingDate === 0,
    ),
);
