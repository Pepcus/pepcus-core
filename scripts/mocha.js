import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { JSDOM } from 'jsdom';
import { configure, mount, render, shallow } from 'enzyme';
import { renderIntoDocument } from 'react-dom/test-utils';

// Define the global `window` object when using the JSDOM.
const { window } = new JSDOM(`<!doctype html><html><body></body></html>`);
// Helper for copying some props from one place to another.
function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce(
            (result, prop) => ({
                ...result,
                [prop]: Object.getOwnPropertyDescriptor(src, prop)
            }),
            {}
        );
    Object.defineProperties(target, props);
}
// Help fix some linting errors with eslint,
// but, most importantly, supercharge `chai`.
chai.use(dirtyChai);
// Sinon.js assertions for chai.
chai.use(sinonChai);
// Enzyme assertions for chai.
// NOTE: Notice the invocation at the end.
chai.use(chaiEnzyme());
// Configure `enzme` with the new React 16.x adapter.
configure({ adapter: new Adapter() });
// Assign some globals to the Node.js world.
// This way we don't need to always import these in every file.
// Use them directly in `**/*.spec.js` file(s).
global.document = window.document;
global.expect = expect;
global.mount = mount;
global.render = render;
global.renderIntoDocument = renderIntoDocument;
global.shallow = shallow;
global.sinon = sinon;
global.window = window;
global.navigator = {
    userAgent: 'node.js'
};
// Copy the props from the JSDOM window, to the Node globals.
copyProps(window, global);
