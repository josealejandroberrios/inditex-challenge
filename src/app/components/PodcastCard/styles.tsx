import { styled, Box, typographyClasses } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const marginTopMedia = 50;

export const PodcastCardContainer = styled(RouterLink)(({ theme }) => ({
  marginTop: marginTopMedia,
  position: 'relative',
  display: 'flex',
  textDecoration: 'none',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export const PodcastCardMedia = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  position: 'absolute',
  width: marginTopMedia * 2,
  height: marginTopMedia * 2,
  borderRadius: '50%',
  top: -marginTopMedia,
  left: '50%',
  transform: 'translateX(-50%)',
  border: `1px solid ${theme.palette.divider}`,
}));

export const PodcastCardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  paddingTop: `calc(${marginTopMedia}px + ${theme.spacing(1)})`,
  flex: 1,
  alignItems: 'center',

  [`& .${typographyClasses.root}`]: {
    lineHeight: 1,
  },
}));
