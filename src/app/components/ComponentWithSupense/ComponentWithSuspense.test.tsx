import { lazy } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

const LazyComponent = lazy(() => import('./TestLazyComponent'));

describe('<ComponentWithSupense />', () => {
  test('should render component with load lazy', async () => {
    render(<LazyComponent />);

    await waitFor(() => {
      expect(screen.getByText(/Test Lazy Component/i)).toBeDefined();
    });
  });
});
