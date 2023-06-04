import { styled, Card, typographyClasses, Box } from '@mui/material';

export const PodcastEpisodePreviewContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [`& .${typographyClasses.root}`]: {
    lineHeight: 1.3,
    wordWrap: 'break-word',
  },
}));

export const PodcastEpisodePreviewAudioContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,

  '& audio': {
    width: '100%',
  },
}));
