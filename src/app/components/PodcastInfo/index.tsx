import { ReactElement, useMemo } from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { replaceParamsPath } from '~utils/replaceParamsPath';
import { parseStringIntoHtml } from '~utils/parseStringIntoHtml';
import { PATHS } from '~constants/paths';

import { PodcastInfoProps } from './types';
import {
  PodcastInfoContainer,
  PodcastInfoContent,
  PodcastInfoMedia,
  PodcastInfoContentInfo,
} from './styles';

const PodcastInfo = ({
  id,
  title,
  author,
  imageUrl,
  description,
}: PodcastInfoProps): ReactElement => {
  const pathToRedirect = useMemo(
    () => replaceParamsPath(PATHS.PODCAST, { ':podcastId': id }),
    [id],
  );

  return (
    <PodcastInfoContainer data-testid="PodcastInfo">
      <PodcastInfoContent>
        <Link
          component={RouterLink}
          to={pathToRedirect}
          underline="none"
          display="flex"
        >
          <PodcastInfoMedia
            src={imageUrl}
            alt={title}
            data-testid="PodcastInfo-image"
          />
        </Link>

        <Link component={RouterLink} to={pathToRedirect} underline="none">
          <PodcastInfoContentInfo>
            <Typography
              component="h4"
              variant="subtitle1"
              color="text.primary"
              fontWeight="bold"
              data-testid="PodcastInfo-title"
            >
              {title}
            </Typography>

            <Typography
              component="h6"
              variant="subtitle2"
              fontWeight="regular"
              color="text.secondary"
              fontStyle="italic"
              data-testid="PodcastInfo-author"
            >
              by {author}
            </Typography>
          </PodcastInfoContentInfo>
        </Link>

        <PodcastInfoContentInfo>
          <Typography component="h4" variant="subtitle1" fontWeight="bold">
            Description
          </Typography>

          <Typography
            component="p"
            variant="subtitle2"
            fontWeight="regular"
            color="text.secondary"
            fontStyle="italic"
            data-testid="PodcastInfo-description"
          >
            {parseStringIntoHtml(description)}
          </Typography>
        </PodcastInfoContentInfo>
      </PodcastInfoContent>
    </PodcastInfoContainer>
  );
};

export default PodcastInfo;
