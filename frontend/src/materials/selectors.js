import { createSelector } from 'reselect';

export function getMaterials(state) {
  return state.materials;
}

export function getMaterial(state, { materialId }) {
  return getMaterials(state)[materialId] || {};
}

export const getMaterialsList = createSelector([getMaterials], materials =>
  Object.values(materials).sort((a, b) => b.id - a.id),
);
