import { Store, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducers from './slices';

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = Store<RootState>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = Promise<void> | void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
