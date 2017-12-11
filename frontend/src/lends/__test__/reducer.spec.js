import reducer from '../reducer';
import { fetchLendFulfilled, fetchLendsFulfilled } from '../actions';

describe('lends reducer', () => {
  it('should fetch an empty object as initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toMatchObject({});
  });

  const LEND_1 = { id: 1, materialId: 1, patronId: 1 };
  const LEND_2 = { id: 2, materialId: 2, patronId: 2 };

  describe('fetchLendFulfilled', () => {
    it('should add the fetched lend', () => {
      const action = fetchLendFulfilled(LEND_2);
      const state = reducer({ 1: LEND_1 }, action);

      expect(state).toMatchObject({
        1: LEND_1,
        2: LEND_2,
      });
    });

    it('should modify the fetched lend, if existed', () => {
      const NEW_LEND_2 = {
        ...LEND_2,
        receivingDate: 20180110,
      };
      const action = fetchLendFulfilled(NEW_LEND_2);
      const state = reducer({ 1: LEND_1, 2: LEND_2 }, action);

      expect(state).toMatchObject({
        1: LEND_1,
        2: NEW_LEND_2,
      });
    });
  });

  describe('fetchLendsFulfilled', () => {
    it('should add comments', () => {
      const action = fetchLendsFulfilled([LEND_1, LEND_2]);
      const state = reducer(undefined, action);

      expect(state).toMatchObject({
        1: LEND_1,
        2: LEND_2,
      });
    });

    it('should replace old commends if present', () => {
      const firstAction = fetchLendsFulfilled([LEND_1]);
      const secondAction = fetchLendsFulfilled([LEND_2]);
      const state = [firstAction, secondAction].reduce(reducer, undefined);

      expect(state).toMatchObject({ 2: LEND_2 });
      expect(state).not.toMatchObject({ 1: LEND_1 });
    });
  });
});
