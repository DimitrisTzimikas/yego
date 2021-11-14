import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

/* Local Files */
import reducers from './ducks/index';

const middlewares = [];
const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''], // 'vehicles', 'user'
  blacklist: [''],
};

// Configure persist store
const persistedReducer = persistReducer(config, reducers);

middlewares.push(thunk);

// Setup redux store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export {store, persistor};
