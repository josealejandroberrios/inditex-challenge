import { useMemo } from 'react';
import { useSnackbar } from 'notistack';

import { useAppSelector, useAppDispatch, useRequest } from '~hooks/index';
import { selectPodcastState, updatePodcast } from '~store/slices/podcast';
import { getPodcastById } from '~services/podcasts';
import {
  ApplePodcastResponse,
  ApplePodcastResult,
  ApplePodcastEpisodeResult,
} from '~services/podcasts/types';
import { LoadingRequest, Nullable } from '~globals/types/commons';
import { validateRequestForDay } from '~utils/validateRequestForDay';

interface RequestPodcast extends LoadingRequest {
  details: Nullable<ApplePodcastResult>;
  episodes: ApplePodcastEpisodeResult[];
}

export const useRequestPodcast = (podcastId: string): RequestPodcast => {
  const { enqueueSnackbar } = useSnackbar();
  const { details, episodes, lastUpdate } = useAppSelector(selectPodcastState);
  const dispatch = useAppDispatch();

  const isValidToSend = useMemo(
    () =>
      !details ||
      details.collectionId.toString() !== podcastId ||
      validateRequestForDay(lastUpdate),
    [details, podcastId, lastUpdate],
  );

  const [, loading] = useRequest({
    request: getPodcastById,
    payload: podcastId,
    isValidToSend,
    initialLoading: isValidToSend ? true : false,
    withPostSuccess: (response) => {
      const podcastResponse = response.data as ApplePodcastResponse;

      const podcastDetails = (
        podcastResponse.results as ApplePodcastResult[]
      ).find((podcast) => podcast.kind === 'podcast');

      const podcastEpisodes = (
        podcastResponse.results as ApplePodcastEpisodeResult[]
      ).filter((podcast) => podcast.kind === 'podcast-episode');

      dispatch(
        updatePodcast({
          lastUpdate: Date.now(),
          details: podcastDetails ?? null,
          episodes: podcastEpisodes,
        }),
      );
    },
    withPostFailure: (err) => {
      console.log(err);

      enqueueSnackbar('An error has occurred try again', {
        variant: 'error',
      });
    },
  });

  return { loading, details, episodes };
};
