import API from '~config/api';
import { ApiPromise, ApiError } from '~globals/types/api';

import { ApplePodcastsResponse, ApplePodcastResponse } from './types';

export const PODCASTS_ENPOINTS = {
  getPodcasts: '/us/rss/toppodcasts/limit=100/genre=1310/json',
  getPodcastById: '/lookup',
};

export const getPodcasts = (): ApiPromise<ApplePodcastsResponse, ApiError> =>
  API.get<ApplePodcastsResponse, ApiError>(PODCASTS_ENPOINTS.getPodcasts);

export const getPodcastById = (
  podcastId: string,
): ApiPromise<ApplePodcastResponse, ApiError> =>
  API.get<ApplePodcastResponse, ApiError>(PODCASTS_ENPOINTS.getPodcastById, {
    id: podcastId,
    media: 'podcast',
    entity: 'podcastEpisode',
    country: 'US',
    limit: 20,
  });
