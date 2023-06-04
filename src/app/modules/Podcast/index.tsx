import { ReactElement, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  PodcastDetailsLayout,
  PodcastEpisodesCount,
  PodcastEpisodeTable,
} from '~components/index';
import { useAppSelector, useRequestPodcast } from '~hooks/index';
import { selectPodcastsState } from '~store/slices/podcasts';

const Podcast = (): ReactElement => {
  const { podcastId } = useParams() as { podcastId: string };

  const { loading, details, episodes } = useRequestPodcast(podcastId);
  const { list } = useAppSelector(selectPodcastsState);

  const currentPodcast = useMemo(
    () => list.find((podcast) => podcast.id.attributes['im:id'] === podcastId),
    [list, podcastId],
  );

  if (loading) return <Typography>...Loading</Typography>;

  if (!details) return <Typography>Not found podcast</Typography>;

  return (
    <PodcastDetailsLayout
      details={{
        id: podcastId,
        title: details.trackName,
        author: details.artistName,
        description: currentPodcast?.summary.label ?? '',
        imageUrl: details.artworkUrl600,
      }}
    >
      <Stack spacing={4}>
        <PodcastEpisodesCount count={episodes.length} />

        <PodcastEpisodeTable episodes={episodes} podcastId={podcastId} />
      </Stack>
    </PodcastDetailsLayout>
  );
};

export default Podcast;
