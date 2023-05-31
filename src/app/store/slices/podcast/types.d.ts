import { Nullable } from '~globals/types/commons';

export interface PodcastState {
  details: Nullable<Record<string, string>>; // @ Todo: Change before by correct typed
  lastUpdate: Nullable<number>;
}
