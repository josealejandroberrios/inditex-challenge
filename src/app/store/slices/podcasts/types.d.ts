import { Nullable } from '~globals/types/commons';

export interface PodcastsState {
  list: Record<string, string>[]; // @ Todo: Change before by correct typed
  lastUpdate: Nullable<number>;
}
