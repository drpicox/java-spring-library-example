import { fetchPatronFulfilled, fetchPatronsFulfilled } from '../actions';
import reducer from '../reducer';

describe('users reducer', () => {
  it('should create an empty object as initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toMatchObject({});
  });

  const PATRON_1 = { id: 1, name: 'patron 1' };
  const PATRON_2 = { id: 2, name: 'patron 2' };
  const PATRON_3 = { id: 3, name: 'patron 3' };

  describe('fetchPatronFulfilled', () => {
    it('should add an element', () => {
      const action = fetchPatronFulfilled(PATRON_3);
      const state = reducer({ 1: PATRON_1, 2: PATRON_2 }, action);
      expect(state).toMatchObject({
        1: PATRON_1,
        2: PATRON_2,
        3: PATRON_3,
      });
    });

    it('should update an element', () => {
      const NEW_PATRON_1 = {
        ...PATRON_1,
        name: 'new name 1',
      };
      const action = fetchPatronFulfilled(NEW_PATRON_1);
      const state = reducer({ 1: PATRON_1, 2: PATRON_2 }, action);
      expect(state).toMatchObject({
        1: NEW_PATRON_1,
        2: PATRON_2,
      });
    });
  });

  describe('fetchPatronsFulfilled', () => {
    it('should add elements', () => {
      const action = fetchPatronsFulfilled([PATRON_1, PATRON_2, PATRON_3]);
      const state = reducer(undefined, action);
      expect(state).toMatchObject({
        1: PATRON_1,
        2: PATRON_2,
        3: PATRON_3,
      });
    });

    it('should replace previous elements', () => {
      let state = reducer(undefined, fetchPatronsFulfilled([PATRON_1]));
      state = reducer(state, fetchPatronsFulfilled([PATRON_2]));

      expect(state).toEqual({ 2: PATRON_2 });
    });
  });
});
