// Imports: Dependencies
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import {createLogger} from 'redux-logger'
import {persistReducer, persistStore} from 'redux-persist'
import {reducer as formReducer} from 'redux-form'

// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
	form: formReducer
});


// Middleware: Redux Thunk (Async/Await)
const middleware: any = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
	// Root?
	key: 'root',
	// Storage Method (React Native)
	storage: AsyncStorage,
	// Whitelist (Save Specific Reducers)
	whitelist: [
		'authReducer',
	],
	// Blacklist (Don't Save Specific Reducers)
	blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
	persistedReducer,
	applyMiddleware(...middleware),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
	store,
	persistor,
};
