import { styled, Box } from '@mui/material';

export const PodcastDetailsLayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(10),
  width: '100%',
  boxSizing: 'border-box',
  alignItems: 'flex-start',
}));

export const PodcastDetailsLayoutContent = styled(Box)({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});
