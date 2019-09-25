import React from 'react';
import TableRow from "./TableRow";
describe('<TableRow />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(React.createElement(TableRow, null));
  });
  it('should render a single table row', () => {
    expect(wrapper).to.have.length(1);
  });
});