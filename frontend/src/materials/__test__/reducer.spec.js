import { fetchMaterialFulfilled, fetchMaterialsFulfilled } from '../actions';
import reducer from '../reducer';

describe('materials reducer', () => {
  it('should create an empty object as initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toMatchObject({});
  });

  const MATERIAL_1 = { id: 1, title: 'material 1', patronId: 1 };
  const MATERIAL_2 = { id: 2, title: 'material 2', patronId: 1 };
  const MATERIAL_3 = { id: 3, title: 'material 3', patronId: 1 };

  describe('fetchMaterialFulfilled', () => {
    it('should add material after fetchMaterialFulfilled', () => {
      const action = fetchMaterialFulfilled(MATERIAL_2);
      let state = reducer({ 1: MATERIAL_1 }, action);

      expect(state).toEqual({ 1: MATERIAL_1, 2: MATERIAL_2 });
    });

    it('should update the material if existed', () => {
      const NEW_MATERIAL_2 = {
        ...MATERIAL_2,
        isbn: '978-0-87431-034-4',
      };
      const action = fetchMaterialFulfilled(NEW_MATERIAL_2);
      let state = reducer({ 1: MATERIAL_1, 2: MATERIAL_2 }, action);

      expect(state).toEqual({ 1: MATERIAL_1, 2: NEW_MATERIAL_2 });
    });
  });

  describe('fetchMaterialsFulfilled', () => {
    it('should add received elements', () => {
      const state = reducer(
        undefined,
        fetchMaterialsFulfilled([MATERIAL_1, MATERIAL_2, MATERIAL_3]),
      );
      expect(state).toMatchObject({
        1: MATERIAL_1,
        2: MATERIAL_2,
        3: MATERIAL_3,
      });
    });

    it('should replace previous received elements', () => {
      let state = reducer(undefined, fetchMaterialsFulfilled([MATERIAL_1]));
      state = reducer(state, fetchMaterialsFulfilled([MATERIAL_2]));

      expect(state).toEqual({ 2: MATERIAL_2 });
    });
  });
});
