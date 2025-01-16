import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistConfig from '../configs/persistConfig';
import actions from './actions';
import reducers from './reducers';
import sagas from './sagas';

const middleware: any = [];

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Create Persist Reducer ------------- */
const persistedReducer = persistCombineReducers(persistConfig, reducers);

/* ------------- Create Store ------------- */
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

/* ------------- Create Persist Store ------------- */
const persistor = persistStore(store);

/* ------------- Kick off root Saga ------------- */
sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor, reducers, actions };
