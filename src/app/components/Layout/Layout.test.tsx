import { screen } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';

import Layout from './index';

describe('<Layout />', () => {
  beforeEach(() => {
    wrapperSetup(
      <Layout>
        <h1>Content</h1>
      </Layout>,
    );
  });

  test('should renders the children content', () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });

  test('should renders the Header Component', () => {
    expect(screen.getByTestId('Header')).toBeDefined();
  });
});
