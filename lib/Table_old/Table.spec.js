"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("./Table"));

describe('<Table />', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(_react.default.createElement(_Table.default, null));
  });
  it('should render a single table', function () {
    expect(wrapper).to.have.length(1);
  });
});