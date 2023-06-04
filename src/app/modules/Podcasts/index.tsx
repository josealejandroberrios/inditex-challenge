/* eslint-disable max-len */
import {
  ReactElement,
  ChangeEvent,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Stack, Grid, Typography } from '@mui/material';

import { SearchFilter, PodcastCard } from '~components/index';
import { useRequestPodcasts } from '~hooks/index';

const Podcasts = (): ReactElement => {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [],
  );

  const { loading, podcasts } = useRequestPodcasts();

  const filteredPodcasts = useMemo(() => {
    const searchRegex = new RegExp(searchText, 'i');

    return podcasts.filter(
      (podcast) =>
        searchRegex.test(podcast['im:name'].label) ||
        searchRegex.test(podcast['im:artist'].label),
    );
  }, [searchText, podcasts]);

  if (loading) return <Typography>...Loading</Typography>;

  return (
    <Stack spacing={4}>
      <SearchFilter
        podcastCount={filteredPodcasts.length}
        searchValue={searchText}
        onChange={handleChangeSearch}
      />

      {!filteredPodcasts.length && (
        <Typography variant="h6">
          No podcast found, please try again with another search
        </Typography>
      )}

      <Stack direction="row">
        <Grid container spacing={4}>
          {filteredPodcasts.map((podcast) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`podcast-${podcast.id.attributes['im:id']}`}
            >
              <PodcastCard
                id={podcast.id.attributes['im:id']}
                title={podcast['im:name'].label}
                author={podcast['im:artist'].label}
                imageUrl={podcast['im:image'][2].label}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Podcasts;
