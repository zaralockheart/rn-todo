/**
 * @format
 * @jest-environment jsdom
 */

import React from 'react'
import 'react-native'
import TestRenderer from 'react-test-renderer'
// Note: test renderer must be required after react-native.
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {Field, reducer as formReducer} from 'redux-form'

import Login from '../src/screen/Login'

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

describe('Login Form', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    expect(component).toMatchSnapshot()

    expect(component.root.findAllByType(Field)).toHaveLength(2)
  })
})
