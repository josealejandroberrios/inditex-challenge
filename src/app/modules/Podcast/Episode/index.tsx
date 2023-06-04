import { ReactElement, useMemo } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { PodcastDetailsLayout, PodcastEpisodePreview } from '~components/index';
import { useAppSelector, useRequestPodcast } from '~hooks/index';
import { selectPodcastsState } from '~store/slices/podcasts';

const PodcastEpisode = (): ReactElement => {
  const { podcastId, episodeId } = useParams() as {
    podcastId: string;
    episodeId: string;
  };

  const { loading, details, episodes } = useRequestPodcast(podcastId);
  const { list } = useAppSelector(selectPodcastsState);

  const currentPodcast = useMemo(
    () => list.find((podcast) => podcast.id.attributes['im:id'] === podcastId),
    [list, podcastId],
  );

  const currentEpisode = useMemo(
    () => episodes.find((episode) => episode.trackId.toString() === episodeId),
    [episodes, episodeId],
  );

  if (loading) return <Typography>...Loading</Typography>;

  if (!details) return <Typography>Not found podcast</Typography>;

  if (!currentEpisode) return <Typography>Not found episode</Typography>;

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
      <PodcastEpisodePreview
        title={currentEpisode.trackName}
        description={currentEpisode.description}
        episodeUrl={currentEpisode.episodeUrl}
      />
    </PodcastDetailsLayout>
  );
};

export default PodcastEpisode;
