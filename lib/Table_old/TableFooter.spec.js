"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _TableFooter = _interopRequireDefault(require("./TableFooter"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

describe('<TableFooter />', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(_react.default.createElement(_TableFooter.default, {
      schema: schema
    }));
  });
  it('should render a blank table footer, without any data present', function () {
    expect(wrapper.find('tfoot')).to.be.blank();
  });
  it('should render a table footer with 1 table row', function () {
    wrapper.setProps({
      data: data
    });
    expect(wrapper.find(_TableRow.default)).to.have.length(1);
  });
  it('should render a table footer with 1 table rows and 2 table cells', function () {
    wrapper.setProps({
      data: data
    });
    expect(wrapper.find(_TableCell.default)).to.have.length(schema.columns.length);
  });
});
var schema = {
  columns: [{
    id: 'id',
    title: 'Identification Number'
  }, {
    id: 'companyName',
    title: 'Company Name'
  }],
  rows: {
    zebra: true
  }
};
var data = [{
  id: '6ed0d015-3174-4eff-b73e-17dd4bd537ee',
  companyName: 'Simonis - Welch'
}, {
  id: 'e155bbb1-11e7-4285-9d34-315a1e347e2a',
  companyName: 'Monahan - Conn'
}, {
  id: '9bf70d69-3376-49a8-831c-25a555aae7c6',
  companyName: 'Paucek, Sipes and Ryan'
}, {
  id: 'fbcd86a2-1552-459b-8df1-e47b0a3a11b5',
  companyName: 'Gulgowski, Jaskolski and Mosciski'
}, {
  id: '127b69d6-f8d2-4856-9194-f6fa74e88da6',
  companyName: 'Hamill and Sons'
}, {
  id: 'f945cfde-cf23-4819-8cae-dfb5ea4f6de2',
  companyName: 'Leuschke, VonRueden and Koss'
}];