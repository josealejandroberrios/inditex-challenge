import { screen } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';

import Header from './index';

describe('<Header />', () => {
  beforeEach(() => {
    wrapperSetup(<Header />);
  });

  test('should render the title', () => {
    expect(screen.getAllByText(/Podcaster/i)).toBeDefined();
  });

  test('should render the NavigationIcon', () => {
    expect(screen.getByTestId('MyLocationIcon')).toBeDefined();
  });
});
