import { screen } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';

import PodcastEpisodesCount from './index';

describe('<PodcastEpisodesCount />', () => {
  const count = 66;
  test('should render the title', () => {
    wrapperSetup(<PodcastEpisodesCount count={count} />);

    expect(screen.queryByText(`Episodes: ${count}`)).toBeDefined();
  });
});
