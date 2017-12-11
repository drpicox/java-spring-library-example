import {
  createMaterial,
  CREATE_MATERIAL,
  fetchMaterialFulfilled,
  FETCH_MATERIAL_FULFILLED,
  fetchMaterialsFulfilled,
  FETCH_MATERIALS_FULFILLED,
} from '../actions';

describe('createMaterial', () => {
  it('should create an action of type CREATE_MATERIAL', () => {
    const action = createMaterial();
    expect(action).toMatchObject({
      type: CREATE_MATERIAL,
    });
  });

  it('should have the field material', () => {
    const MATERIAL = {};
    const action = createMaterial(MATERIAL);
    expect(action).toMatchObject({
      material: MATERIAL,
    });
  });
});

describe('fetchMaterialFulfilled', () => {
  it('should create an action of type FETCH_MATERIAL_FULFILLED', () => {
    const action = fetchMaterialFulfilled();
    expect(action).toMatchObject({
      type: FETCH_MATERIAL_FULFILLED,
    });
  });

  it('should add a payload', () => {
    const action = fetchMaterialFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});

describe('fetchMaterialsFulfilled', () => {
  it('should create an action of type FETCH_MATERIALS_FULFILLED', () => {
    const action = fetchMaterialsFulfilled();
    expect(action).toMatchObject({
      type: FETCH_MATERIALS_FULFILLED,
    });
  });

  it('should add a payload', () => {
    const action = fetchMaterialsFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});
