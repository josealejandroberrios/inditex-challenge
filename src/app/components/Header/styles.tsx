import { styled, AppBar, Toolbar } from '@mui/material';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export const HeaderContent = styled(Toolbar)(({ theme }) => ({
  height: theme.maxHeights.header,
  minHeight: theme.maxHeights.header,
  justifyContent: 'space-between',
}));
