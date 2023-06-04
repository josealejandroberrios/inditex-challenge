import { ReactElement, useMemo } from 'react';
import { Typography } from '@mui/material';

import { replaceParamsPath } from '~utils/replaceParamsPath';
import { PATHS } from '~constants/paths';

import { PodcastCardProps } from './types';
import {
  PodcastCardContainer,
  PodcastCardMedia,
  PodcastCardContent,
} from './styles';

const PodcastCard = ({
  id,
  title,
  author,
  imageUrl,
}: PodcastCardProps): ReactElement => {
  const pathToRedirect = useMemo(
    () => replaceParamsPath(PATHS.PODCAST, { ':podcastId': id }),
    [id],
  );

  return (
    <PodcastCardContainer to={pathToRedirect} data-testid="PodcastCard">
      <PodcastCardMedia src={imageUrl} alt={title} />

      <PodcastCardContent>
        <Typography
          component="h4"
          variant="subtitle1"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {title}
        </Typography>

        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight="regular"
          color="text.secondary"
        >
          Author: {author}
        </Typography>
      </PodcastCardContent>
    </PodcastCardContainer>
  );
};

export default PodcastCard;
