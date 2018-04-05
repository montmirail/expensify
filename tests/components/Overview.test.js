import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../../src/components/Overview';

test('should render overview correctly', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper).toMatchSnapshot();
});