/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {TouchableOpacity} from "react-native"

import Home from "../src/screen/Home"

const rootReducer = combineReducers({
	form: formReducer,
});

const store = createStore(rootReducer);

it('renders correctly', () => {
	const component = renderer.create(
		<Provider store={store}>
			<Home/>
		</Provider>
	);

	expect(component.toJSON()).toMatchSnapshot()

});
