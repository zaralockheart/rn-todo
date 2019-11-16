/**
 * @format
 * @jest-environment jsdom
 */

import React from 'react'
import 'react-native'
import {mount} from 'enzyme'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {Field, reducer as formReducer} from 'redux-form'

import AddTodo from '../src/screen/AddTodo'
import renderer from "react-test-renderer";

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

describe('Add Todo Form', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
