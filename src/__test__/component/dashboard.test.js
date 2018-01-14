import React from 'react';
import {shallow, mount} from 'enzyme';

import Dashboard from '../../component/dashboard';
import Main from '../../main.js';

describe.skip('DASHBOARD', () => {
  test('test', () => {
    let mainWrapper = shallow(<Main />);
    console.log(mainWrapper.state());
    let dashboard = shallow(<Dashboard />);
    console.log(dashboard);
  })
})