import {
  getLendsList,
  getMaterialCurrentLend,
  getPatronCurrentLends,
} from '../selectors';

const LEND_1 = { id: 1, materialId: 1, patronId: 1, receivingDate: 0 };
const LEND_2 = { id: 2, materialId: 2, patronId: 1, receivingDate: 20180110 };
const LEND_3 = { id: 3, materialId: 2, patronId: 1, receivingDate: 0 };
const LEND_4 = { id: 4, materialId: 3, patronId: 2, receivingDate: 20180110 };
const STATE = {
  lends: {
    1: LEND_1,
    2: LEND_2,
    3: LEND_3,
    4: LEND_4,
  },
};

describe('getLendsList', () => {
  it('should return the list of lends', () => {
    const lends = getLendsList(STATE);
    expect(lends).toEqual([LEND_1, LEND_2, LEND_3, LEND_4]);
  });

  it('should return the same instance if called twice without changes', () => {
    const lends1 = getLendsList(STATE);
    const lends2 = getLendsList(STATE);

    expect(lends1).toBe(lends2);
  });
});

describe('getMaterialCurrentLend', () => {
  it('should return the current lend of a material', () => {
    const currentLend = getMaterialCurrentLend(STATE, { materialId: 2 });
    expect(currentLend).toBe(LEND_3);
  });

  it('should return undefined if no current lend exists', () => {
    const currentLend = getMaterialCurrentLend(STATE, { materialId: 3 });
    expect(currentLend).toBeUndefined();
  });
});

describe('getPatronCurrentLends', () => {
  it('should return the list of lends of a patron', () => {
    const currentLends = getPatronCurrentLends(STATE, { patronId: 1 });
    expect(currentLends).toEqual([LEND_1, LEND_3]);
  });

  it('should return empty array if no current lends exists', () => {
    const currentLends = getPatronCurrentLends(STATE, { patronId: 2 });
    expect(currentLends).toEqual([]);
  });
});
