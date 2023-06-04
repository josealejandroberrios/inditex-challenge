import { Nullable } from '~globals/types/commons';
import { ApplePodcastsEntry } from '~services/podcasts/types';

export interface PodcastsState {
  list: ApplePodcastsEntry[];
  lastUpdate: Nullable<number>;
}
