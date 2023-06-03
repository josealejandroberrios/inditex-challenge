import { render, screen } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '~config/index';

import Layout from './index';

describe('<Layout />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Layout>
          <h1>Content</h1>
        </Layout>
      </ThemeProvider>,
      { wrapper: BrowserRouter },
    );
  });

  test('should renders the children content', () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });

  test('should renders the Header Component', () => {
    expect(screen.getByRole('banner')).toBeDefined();
  });
});
