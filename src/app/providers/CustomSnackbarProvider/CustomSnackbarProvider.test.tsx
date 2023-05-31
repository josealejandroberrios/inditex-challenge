import { RenderResult, render } from '@testing-library/react';

import CustomSnackbarProvider from './index';

describe('<CustomSnackbarProvider />', () => {
  let wrapper: RenderResult | null = null;

  beforeEach(() => {
    wrapper = render(
      <CustomSnackbarProvider>
        <div>Children</div>
      </CustomSnackbarProvider>,
    );
  });

  test('should mounts properly', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should rendering children', () => {
    expect(wrapper?.container.children).to.have.length(1);
  });
});
