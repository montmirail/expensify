import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound';

test('should render overview correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});