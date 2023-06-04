import { createTheme } from '@mui/material';
import { blue, common } from '@mui/material/colors';

import { ExtendTheme } from '~globals/types/theme';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends ExtendTheme {}
}

const theme = createTheme({
  palette: {
    tonalOffset: 0.2,
    contrastThreshold: 3,
    primary: { main: blue['500'], contrastText: common.white },
    secondary: { main: common.black, contrastText: common.white },
    background: { paper: common.white, default: common.white },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  },
  shape: { borderRadius: 4 },
  maxHeights: { header: 48 },
});

export default theme;
