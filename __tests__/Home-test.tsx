/**
 * @format
 */

import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Home from '../src/screen/Home'
import {rootReducer} from '../src/redux'

const store = createStore(rootReducer)

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
