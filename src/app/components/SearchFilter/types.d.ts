import { ChangeEventHandler } from 'react';

export interface SearchFilterProps {
  podcastCount: number;
  searchValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
