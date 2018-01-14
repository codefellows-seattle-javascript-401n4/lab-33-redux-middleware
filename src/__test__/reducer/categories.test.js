import reducer from '../../reducer/categories.js';

let state;

describe('CATEGORY REDUCER MIDDLEWARE', () => {
  test('should throw error if no name given', () => {
    expect(() => reducer(undefined, {
        type: 'CATEGORY_CREATE',
        payload: {
          name: '',
          budget: 0,
        },
      })).toThrowError('no category name given')
  });

  test('should throw error if no budget amount given', () => {
    expect(() => reducer(undefined, {
        type: 'CATEGORY_CREATE',
        payload: {
          name: 'poop',
          budget: 0,
        },
      })).toThrowError('no budget amount given')
  });
});

describe('CATEGORY REDUCER', () => {
  test('should initialize with an empty array', () => {
    let emptyState = reducer(undefined, {});
    expect(emptyState).toEqual([]);
  });

  test('CATEGORY_CREATE returns updated state with given payload', () => {
    state = reducer(undefined, {
      type: 'CATEGORY_CREATE',
      payload: {
        name: 'food',
        budget: 69,
        id: 1234,
      }
    })
    expect(state[0].name).toBe('food');
    expect(state[0].budget).toBe(69);
  });

  test('CATEGORY_UPDATE updates state', () => {
    let id = state[0].id;
    let newState = reducer(state, {
      type: 'CATEGORY_UPDATE',
      payload: {
        name: 'different food',
        budget: 100,
        id: 1234,
      }
    })
    expect(newState[0].name).toBe('different food');
    expect(newState[0].budget).toBe(100);
  });

  test('CATEGORY_DESTROY deletes a category', () => {
    let id = state[0].id;
    let newState = reducer(state,{
      type: 'CATEGORY_DESTROY',
      payload: {
        name: 'doesnt matter',
        budget: 1,
        id: 1234,
      }
    })
    expect(newState).toEqual([]);
  })
});
