import { render, screen } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '~config/index';

import Header from './index';

describe('<Header />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
      </ThemeProvider>,
      { wrapper: BrowserRouter },
    );
  });

  test('should render the title', () => {
    expect(screen.getAllByText(/Podcaster/i)).toBeDefined();
  });

  test('should render the NavigationIcon', () => {
    expect(screen.getByTestId('MyLocationIcon')).toBeDefined();
  });
});
