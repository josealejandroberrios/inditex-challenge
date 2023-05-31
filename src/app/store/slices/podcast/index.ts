import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState, AppThunk } from '~store/types';

import { PodcastState } from './types';

const initialState: PodcastState = {
  details: null,
  lastUpdate: null,
};

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setPodcastDetails: (
      state,
      action: PayloadAction<PodcastState['details']>,
    ) => {
      state.details = action.payload;
    },
    setPodcastLastUpdate: (
      state,
      action: PayloadAction<PodcastState['lastUpdate']>,
    ) => {
      state.lastUpdate = action.payload;
    },
  },
});

export const { setPodcastDetails, setPodcastLastUpdate } = podcastSlice.actions;

export const updatePodcast =
  (data: PodcastState): AppThunk =>
  (dispatch) => {
    dispatch(setPodcastLastUpdate(data.lastUpdate));
    dispatch(setPodcastDetails(data.details));
  };

const persistPodcastConfig: PersistConfig<PodcastState> = {
  key: 'app-podcast',
  storage,
};

const persistPodcastReducer = persistReducer(
  persistPodcastConfig,
  podcastSlice.reducer,
);

export const selectPodcastState = (state: RootState): PodcastState =>
  state.podcast;

export default persistPodcastReducer;
