import { ReactElement } from 'react';

import { SearchFilterProps } from './types';
import {
  SearchFilterContainer,
  SearchFilterChip,
  SearchFilterInputContainer,
  SearchFilterInputField,
} from './styles';

const SearchFilter = ({
  podcastCount,
  searchValue,
  onChange,
}: SearchFilterProps): ReactElement => {
  return (
    <SearchFilterContainer data-testid="SearchFilter">
      <SearchFilterChip label={podcastCount} color="primary" size="small" />

      <SearchFilterInputContainer variant="outlined">
        <SearchFilterInputField
          value={searchValue}
          onChange={onChange}
          placeholder="Filter podcasts..."
          inputProps={{ 'aria-label': 'search filter podcasts' }}
        />
      </SearchFilterInputContainer>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
