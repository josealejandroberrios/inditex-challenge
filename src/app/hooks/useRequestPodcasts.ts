import { useMemo } from 'react';
import { useSnackbar } from 'notistack';

import { useAppSelector, useAppDispatch, useRequest } from '~hooks/index';
import { selectPodcastsState, updatePodcasts } from '~store/slices/podcasts';
import { getPodcasts } from '~services/podcasts';
import {
  ApplePodcastsResponse,
  ApplePodcastsEntry,
} from '~services/podcasts/types';
import { LoadingRequest } from '~globals/types/commons';
import { validateRequestForDay } from '~utils/validateRequestForDay';

interface RequestPodcasts extends LoadingRequest {
  podcasts: ApplePodcastsEntry[];
}

export const useRequestPodcasts = (): RequestPodcasts => {
  const { enqueueSnackbar } = useSnackbar();
  const { lastUpdate, list } = useAppSelector(selectPodcastsState);
  const dispatch = useAppDispatch();

  const isValidToSend = useMemo(
    () => !list.length || validateRequestForDay(lastUpdate),
    [list, lastUpdate],
  );

  const [, loading] = useRequest({
    request: getPodcasts,
    payload: null,
    isValidToSend,
    initialLoading: isValidToSend ? true : false,
    withPostSuccess: (response) => {
      const podcastsResponse = response.data as ApplePodcastsResponse;

      dispatch(
        updatePodcasts({
          lastUpdate: Date.now(),
          list: podcastsResponse.feed.entry,
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

  return { loading, podcasts: list };
};
