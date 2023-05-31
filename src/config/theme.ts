import { createTheme } from '@mui/material';
import { lightBlue, common } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    tonalOffset: 0.2,
    contrastThreshold: 3,
    primary: { main: lightBlue['500'] },
    secondary: { main: common.black },
    background: { paper: common.white, default: common.white },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  },
  shape: { borderRadius: 4 },
});

export default theme;
