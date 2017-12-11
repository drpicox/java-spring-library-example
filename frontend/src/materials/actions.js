export const CREATE_MATERIAL = 'CREATE_MATERIAL';
export function createMaterial(material) {
  return {
    type: CREATE_MATERIAL,
    material,
  };
}

export const FETCH_MATERIAL_FULFILLED = 'FETCH_MATERIAL_FULFILLED';
export function fetchMaterialFulfilled(payload) {
  return {
    type: FETCH_MATERIAL_FULFILLED,
    payload,
  };
}

export const FETCH_MATERIALS_FULFILLED = 'FETCH_MATERIALS_FULFILLED';
export function fetchMaterialsFulfilled(payload) {
  return {
    type: FETCH_MATERIALS_FULFILLED,
    payload,
  };
}
