'use strict';


import React from 'react';
import renderer from 'react-test-renderer';
import Jest from 'jest';
import uuid from 'uuid/v1';
import CatForm from '../src/components/catForm.js';

test('test should pass and snapshot has been added', () => {
  let name = 'groceries';
  let budget = 10;
  let createBudget = (state) => {
    expect(CatForm.state().name).toBe(name);
    expect(CatForm.state().budget).toBe(budget);
  };
  const component = renderer.create(
    <CatForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('test should fail because change in name of budget', () => {
  const component = renderer.create(
    <CatForm name="groceries"/>
  );
  const other = renderer.create(
    <CatForm name="gas"/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let otherTree = other.toJSON();
  expect(tree).toEqual(otherTree);
});

test('test should pass with unique ids', () => {
  const component = renderer.create(
    <CatForm id={uuid()}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('test should fail because non unique ids', () => {
  const component = renderer.create(
    <CatForm id="1"/>
  );
  const other = renderer.create(
    <CatForm id="1"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let otherTree = other.toJSON();
  expect(otherTree).toEqual(tree);
});
