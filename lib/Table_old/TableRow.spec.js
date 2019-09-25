"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

describe('<TableRow />', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(_react.default.createElement(_TableRow.default, null));
  });
  it('should render a single table row', function () {
    expect(wrapper).to.have.length(1);
  });
});