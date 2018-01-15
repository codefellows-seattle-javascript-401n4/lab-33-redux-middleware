'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Jest from 'jest';
import uuid from 'uuid/v1';
import ExpenseForm from '../src/components/expenseForm.js';

test('should pass with valid expense content', () => {
  let name = 'eggs';
  let price = 5;
  let createExpense = (state) => {
    expect(ExpenseForm.state().name).toBe(name);
    expect(ExpenseForm.state().price).toEqual(price);
  };
});

test('should fail with a change of the expense name', () => {
  const component = renderer.create(
    <ExpenseForm name="eggs"/>
  );
  const other = renderer.create(
    <ExpenseForm name="milk"/>
  );

  let tree = component.toJSON();
  let otherTree = other.toJSON();
  expect(tree).toMatchSnapshot();
  expect(otherTree).toEqual(tree);
});

test('should pass with an unique id', () => {
  const component = renderer.create(
    <ExpenseForm id={uuid()}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail because non unique ids', () => {
  const component = renderer.create(
    <ExpenseForm id="1"/>
  );
  const other = renderer.create(
    <ExpenseForm id="1"/>
  );
  let tree = component.toJSON();
  let otherTree = otherTree.toJSON();
  expect(tree).toMatchSnapshot();
  expect(otherTree).toEqual(tree);
});
