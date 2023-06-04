import { ReactElement } from 'react';
import { Typography } from '@mui/material';

import { PodcastEpisodesCountProps } from './types';
import { PodcastEpisodesCountContainer } from './styles';

const PodcastEpisodesCount = ({
  count,
}: PodcastEpisodesCountProps): ReactElement => (
  <PodcastEpisodesCountContainer data-testid="PodcastEpisodesCount">
    <Typography variant="h5" fontWeight="bold">
      Episodes: {count}
    </Typography>
  </PodcastEpisodesCountContainer>
);

export default PodcastEpisodesCount;
