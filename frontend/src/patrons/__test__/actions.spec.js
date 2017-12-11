import {
  createPatron,
  CREATE_PATRON,
  fetchPatronFulfilled,
  FETCH_PATRON_FULFILLED,
  fetchPatronsFulfilled,
  FETCH_PATRONS_FULFILLED,
} from '../actions';

describe('createPatron', () => {
  it('should create an action of type CREATE_PATRON', () => {
    const action = createPatron();
    expect(action).toMatchObject({
      type: CREATE_PATRON,
    });
  });

  it('should add a patron', () => {
    const action = createPatron('some patron');
    expect(action).toMatchObject({
      patron: 'some patron',
    });
  });
});

describe('fetchPatronFulfilled', () => {
  it('should create an action of type FETCH_PATRON_FULFILLED', () => {
    const action = fetchPatronFulfilled();
    expect(action).toMatchObject({
      type: FETCH_PATRON_FULFILLED,
    });
  });

  it('should add a payload', () => {
    const action = fetchPatronFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});

describe('fetchPatronsFulfilled', () => {
  it('should create an action of type FETCH_PATRONS_FULFILLED', () => {
    const action = fetchPatronsFulfilled();
    expect(action).toMatchObject({
      type: FETCH_PATRONS_FULFILLED,
    });
  });

  it('should add a payload', () => {
    const action = fetchPatronsFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});
