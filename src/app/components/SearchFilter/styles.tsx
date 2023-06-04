import { styled, Box, Chip, chipClasses, Card, InputBase } from '@mui/material';

export const SearchFilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(1),
}));

export const SearchFilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  fontSize: theme.typography.pxToRem(18),
  fontWeight: theme.typography.fontWeightBold,
  height: 'auto',
  minWidth: 40,

  [`& .${chipClasses.label}`]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));

export const SearchFilterInputContainer = styled(Card)({
  display: 'flex',
  width: '100%',
  maxWidth: 300,
});

export const SearchFilterInputField = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0.5, 1),
}));
