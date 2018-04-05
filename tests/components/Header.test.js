import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../src/components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});