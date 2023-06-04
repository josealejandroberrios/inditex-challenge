import { Nullable } from '~globals/types/commons';
import {
  ApplePodcastResult,
  ApplePodcastEpisodeResult,
} from '~services/podcasts/types';

export interface PodcastState {
  details: Nullable<ApplePodcastResult>;
  episodes: ApplePodcastEpisodeResult[];
  lastUpdate: Nullable<number>;
}
