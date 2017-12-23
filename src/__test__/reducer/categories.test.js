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
});