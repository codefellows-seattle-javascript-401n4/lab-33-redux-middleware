import reducer from '../../reducer/expenses.js';

describe('EXPENSE REDUCER MIDDLEWARE', () => {
  test('should throw error if no name given', () => {
    expect(() => reducer(undefined, {
        type: 'EXPENSE_CREATE',
        payload: {
          name: '',
          cost: 0,
        },
      })).toThrowError('no category name given')
  });

  test('should throw error if no expense cost given', () => {
    expect(() => reducer(undefined, {
        type: 'EXPENSE_CREATE',
        payload: {
          name: 'poop',
          cost: 0,
        },
      })).toThrowError('no expense cost given')
  });
});