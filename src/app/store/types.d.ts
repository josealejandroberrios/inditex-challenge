import { ThunkAction, Action } from '@reduxjs/toolkit';

import rootStore from './index';

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export type AppThunk<ReturnType = Promise<void> | void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
