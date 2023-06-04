import {
  styled,
  Card,
  CardContent,
  Box,
  typographyClasses,
} from '@mui/material';

export const PodcastInfoContainer = styled(Card)({
  maxWidth: 300,
});

export const PodcastInfoContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),

  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const PodcastInfoMedia = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
}));

export const PodcastInfoContentInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,

  [`& .${typographyClasses.root}`]: {
    lineHeight: 1.3,
    wordWrap: 'break-word',
  },
}));
