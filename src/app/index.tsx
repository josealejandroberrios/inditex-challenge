import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import store, { persistor } from '~store/index';
import { theme } from '~config/index';
import { CustomSnackbarProvider } from '~providers/index';

import Routes from './routes';

const App = (): ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <CustomSnackbarProvider>
            <Routes />
          </CustomSnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
