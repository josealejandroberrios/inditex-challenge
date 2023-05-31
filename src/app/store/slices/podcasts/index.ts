import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState, AppThunk } from '~store/types';

import { PodcastsState } from './types';

const initialState: PodcastsState = {
  list: [],
  lastUpdate: null,
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setPodcastsList: (state, action: PayloadAction<PodcastsState['list']>) => {
      state.list = action.payload;
    },
    setPodcastsLastUpdate: (
      state,
      action: PayloadAction<PodcastsState['lastUpdate']>,
    ) => {
      state.lastUpdate = action.payload;
    },
  },
});

export const { setPodcastsList, setPodcastsLastUpdate } = podcastsSlice.actions;

export const updatePodcasts =
  (data: PodcastsState): AppThunk =>
  (dispatch) => {
    dispatch(setPodcastsLastUpdate(data.lastUpdate));
    dispatch(setPodcastsList(data.list));
  };

const persistPodcastsConfig: PersistConfig<PodcastsState> = {
  key: 'app-podcasts',
  storage,
};

const persistPodcastsReducer = persistReducer(
  persistPodcastsConfig,
  podcastsSlice.reducer,
);

export const selectPodcastsState = (state: RootState): PodcastsState =>
  state.podcasts;

export default persistPodcastsReducer;
