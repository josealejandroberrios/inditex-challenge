import { ReactElement } from 'react';
import { Typography } from '@mui/material';

import { parseStringIntoHtml } from '~utils/parseStringIntoHtml';

import { PodcastEpisodePreviewProps } from './types';
import {
  PodcastEpisodePreviewContainer,
  PodcastEpisodePreviewAudioContainer,
} from './styles';

const PodcastEpisodePreview = ({
  title,
  description,
  episodeUrl,
}: PodcastEpisodePreviewProps): ReactElement => (
  <PodcastEpisodePreviewContainer>
    <Typography variant="h5" fontWeight="bold">
      {title}
    </Typography>

    <Typography
      component="p"
      variant="subtitle2"
      fontWeight="regular"
      color="text.secondary"
      fontStyle="italic"
    >
      {parseStringIntoHtml(description)}
    </Typography>

    <PodcastEpisodePreviewAudioContainer>
      <audio controls src={episodeUrl}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </PodcastEpisodePreviewAudioContainer>
  </PodcastEpisodePreviewContainer>
);

export default PodcastEpisodePreview;
