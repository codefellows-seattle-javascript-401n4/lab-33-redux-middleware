import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';

import reducer from '../appState/reducer';

describe('Reducer tests', () => {

	let category = {name: 'Fabulous', createDate: new Date(), id: uuid()};
	let state;
	
	test('add a new category', () => {
		let action = {type: 'CATEGORY_ADD', payload: category};
		    state = reducer(state, action);

		expect(state.length).toEqual(1);
		expect(state[0].name).toEqual('Fabulous');
			
	});

	test('update a category', () => {
		
		let newCategory = {name: 'New and improved!'};			

			state = reducer(state, {
			type: 'CATEGORY_UPDATE',
			payload: {
				name: newCategory.name,
				createDate: new Date(),
				id: category.id,
			}
		});

		expect(state[0].name).toEqual('New and improved!');
		expect(state.length).toEqual(1);
	});

	test('remove a category', () => {
	 
		let cat1 = {name: 'Cat1', id: uuid()};
		let cat2 = {name: 'Cat2', id: uuid()};
		state = [{...cat1}, {...cat2}];
		
		state = reducer(state, {
			type: 'CATEGORY_DESTROY', 
			payload: cat1.id
		});

		expect(state.length).toEqual(1);
		expect(state[0].name).toEqual('Cat2');
  });
})