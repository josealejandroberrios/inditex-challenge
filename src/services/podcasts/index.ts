import API from '~config/api';
import { ApiPromise, ApiError } from '~globals/types/api';

import { ApplePodcastsResponse } from './types';

export const PODCASTS_ENPOINTS = {
  getPodcasts: '/us/rss/toppodcasts/limit=100/genre=1310/json',
};

export const getPodcasts = (): ApiPromise<ApplePodcastsResponse, ApiError> =>
  API.get<ApplePodcastsResponse, ApiError>(PODCASTS_ENPOINTS.getPodcasts);
