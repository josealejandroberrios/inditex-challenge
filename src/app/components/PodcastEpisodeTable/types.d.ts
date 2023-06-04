import { ApplePodcastEpisodeResult } from '~services/podcasts/types';

export interface PodcastEpisodesTableProps {
  episodes: ApplePodcastEpisodeResult[];
  podcastId: string;
}
