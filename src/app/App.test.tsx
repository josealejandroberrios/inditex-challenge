import { render } from '@testing-library/react';

import App from '~app/index';

describe('<App />', () => {
  test('should mounts properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
