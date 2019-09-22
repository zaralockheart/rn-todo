/**
 * @format
 * @jest-environment jsdom
 */

import React from 'react'
import 'react-native'
import { mount } from 'enzyme'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {Field, reducer as formReducer} from 'redux-form'

import AddTodo from "../src/screen/AddTodo"

const rootReducer = combineReducers({
	form: formReducer,
})

const store = createStore(rootReducer)

describe('Add Todo Form', () => {

	it('renders correctly', () => {

		const component = mount(
			<Provider store={store}>
				<AddTodo/>
			</Provider>
		)

	})
})
