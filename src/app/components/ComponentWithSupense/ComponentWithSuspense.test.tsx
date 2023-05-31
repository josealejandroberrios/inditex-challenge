import { lazy } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

const LazyComponent = lazy(() => import('./TestLazyComponent'));

describe('<ComponentWithSupense />', () => {
  beforeEach(() => {
    render(<LazyComponent />);
  });

  test('should render component with load lazy', async () => {
    await waitFor(() => {
      expect(screen.getByText(/Test Lazy Component/i)).toBeDefined();
    });
  });
});
