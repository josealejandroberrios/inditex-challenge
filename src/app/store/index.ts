import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

import rootReducers from './slices';

const isDevelopment = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (isDevelopment) {
      return defaultMiddleware.concat(logger);
    }

    return defaultMiddleware;
  },
  devTools: isDevelopment,
});

export const persistor = persistStore(store);

export default store;
