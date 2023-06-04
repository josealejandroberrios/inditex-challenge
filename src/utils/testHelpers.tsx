import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';

import store from '~store/index';
import { theme } from '~config/index';

export interface WrapperSetupTest extends RenderResult {
  ui: ReactElement;
}

export const wrapperSetup = (component: ReactElement): WrapperSetupTest => {
  const element = (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {component}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

  return {
    ui: element,
    ...render(element),
  };
};
