import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src: any, target: any) {
	Object.defineProperties(target, {
		...Object.getOwnPropertyDescriptors(src),
		...Object.getOwnPropertyDescriptors(target),
	});
}

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
	userAgent: 'node.js',
};
copyProps(window, global);

// heh https://github.com/airbnb/enzyme/issues/831#issuecomment-490644160
const originalConsoleError = console.error;
console.error = (message: any) => {
	if (message.startsWith('Warning:')) {
		return;
	}

	originalConsoleError(message);
};

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });
