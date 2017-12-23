import reducer from '../../reducer/categories.js';

describe('Category Reducer', () => {
  test('should initialize with an empty array', () => {
    let emptyState = reducer(undefined, {});
    expect(emptyState).toEqual([]);
  });

  test('CATEGORY_CREATE should throw error if no name given', () => {
    expect(() => reducer(undefined, {
        type: 'CATEGORY_CREATE',
        payload: {
          name: '',
          budget: 0,
        },
      })).toThrowError('no category name given')
  });

  test('CATEGORY_CREATE should throw error if no budget amount given', () => {
    expect(() => reducer(undefined, {
        type: 'CATEGORY_CREATE',
        payload: {
          name: 'poop',
          budget: 0,
        },
      })).toThrowError('no budget amount given')
  });

  test('CATEGORY_CREATE returns updated state with given payload', () => {
    let newState = reducer(undefined, {
      type: 'CATEGORY_CREATE',
      payload: {
        name: 'food',
        budget: 69,
      }
    })
    expect(newState[0].name).toBe('food');
    expect(newState[0].budget).toBe(69);
  });
});