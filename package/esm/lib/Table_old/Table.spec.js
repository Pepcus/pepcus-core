import React from 'react';
import Table from "./Table";
describe('<Table />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(React.createElement(Table, null));
  });
  it('should render a single table', () => {
    expect(wrapper).to.have.length(1);
  });
});