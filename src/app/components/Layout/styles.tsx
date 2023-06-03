import { styled, Box, BoxProps } from '@mui/material';

export const LayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
});

export const LayoutContent = styled((props: BoxProps) => (
  <Box {...props} component="main" />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(2),
  marginTop: theme.maxHeights.header,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
}));
