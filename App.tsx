/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux';

import {persistor, store} from './src/config/redux';
import Navigation from './src/config/navigation'
import {StatusBar} from "react-native"

export default () => (
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
		>
			<StatusBar barStyle="dark-content"/>
			<Navigation/>
		</PersistGate>
	</Provider>
)
