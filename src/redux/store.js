import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const eventsPersistConfig = {
  key: 'events',
  storage,
  whitelist: ['items'],
};

import eventsReducer from './events/events-slice';
import filterReducer from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    events: persistReducer(eventsPersistConfig, eventsReducer),
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
