import {
  createLend,
  CREATE_LEND,
  updateLend,
  UPDATE_LEND,
  fetchLendFulfilled,
  FETCH_LEND_FULFILLED,
  fetchLendsFulfilled,
  FETCH_LENDS_FULFILLED,
} from '../actions';

describe('createLend', () => {
  it('should create an action of type CREATE_LEND', () => {
    const action = createLend();
    expect(action).toMatchObject({
      type: CREATE_LEND,
    });
  });

  it('should have lend paramenter', () => {
    const LEND = { id: 2 };
    const action = createLend(LEND);
    expect(action).toMatchObject({
      lend: LEND,
    });
  });
});

describe('updateLend', () => {
  it('should update an action of type UPDATE_LEND', () => {
    const action = updateLend();
    expect(action).toMatchObject({
      type: UPDATE_LEND,
    });
  });

  it('should have lend paramenters', () => {
    const action = updateLend(2);
    expect(action).toMatchObject({
      lend: 2,
    });
  });
});

describe('fetchLendFulfilled', () => {
  it('should fetch an action of type FETCH_LEND_FULFILLED', () => {
    const action = fetchLendFulfilled();
    expect(action).toMatchObject({
      type: FETCH_LEND_FULFILLED,
    });
  });

  it('should have payload paramenter', () => {
    const action = fetchLendFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});

describe('fetchLendsFulfilled', () => {
  it('should create an action of type FETCH_LENDS_FULFILLED', () => {
    const action = fetchLendsFulfilled();
    expect(action).toMatchObject({
      type: FETCH_LENDS_FULFILLED,
    });
  });

  it('should have payload paramenter', () => {
    const action = fetchLendsFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});
