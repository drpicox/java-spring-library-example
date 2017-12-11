import { getPatronsList, getPatron } from '../selectors';

const PATRON_1 = { id: 1, name: 'patron 1' };
const PATRON_2 = { id: 2, name: 'patron 2' };
const PATRON_3 = { id: 3, name: 'patron 3' };
const STATE = {
  patrons: {
    1: PATRON_1,
    2: PATRON_2,
    3: PATRON_3,
  },
};

describe('getPatron', () => {
  it('should return the requested patron', () => {
    const patron = getPatron(STATE, { patronId: 1 });

    expect(patron).toBe(PATRON_1);
  });

  it('should return an empty object if patron does not exists', () => {
    const patron = getPatron(STATE, { patronId: 'UNEXISTING' });

    expect(patron).toMatchObject({});
  });
});

describe('getPatronsList', () => {
  it('should return the list of patrons', () => {
    const patrons = getPatronsList(STATE);
    expect(patrons).toEqual([PATRON_1, PATRON_2, PATRON_3]);
  });

  it('should return the same instance if called twice without changes', () => {
    const patrons1 = getPatronsList(STATE);
    const patrons2 = getPatronsList(STATE);

    expect(patrons1).toBe(patrons2);
  });
});
