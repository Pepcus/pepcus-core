import React from 'react';

import Table from './Table';

describe('<Table />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Table />);
    });

    it('should render a single table', () => {
        expect(wrapper).to.have.length(1);
    });
});
