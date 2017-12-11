import { doPopulate, DO_POPULATE } from '../actions';

describe('doPopulate', () => {
  it('should create an action of type DO_POPULATE', () => {
    const action = doPopulate();
    expect(action).toMatchObject({
      type: DO_POPULATE,
    });
  });
});
