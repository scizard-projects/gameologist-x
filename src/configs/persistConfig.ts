import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';
// import createFilter from 'redux-persist-transform-filter';

const storage = new MMKV();

const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  throttle: 500,
  storage: reduxStorage,
  transforms: [
    // createFilter('user', ['data']),
  ],
};

export default persistConfig;
