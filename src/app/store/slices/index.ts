import { combineReducers } from '@reduxjs/toolkit';

import podcastsReducer from './podcasts';
import podcastReducer from './podcast';

const rootReducers = combineReducers({
  podcasts: podcastsReducer,
  podcast: podcastReducer,
});

export default rootReducers;
