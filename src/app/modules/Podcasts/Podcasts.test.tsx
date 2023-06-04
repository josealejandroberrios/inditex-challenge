import { screen, fireEvent } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';
import { useRequestPodcasts } from '~hooks/useRequestPodcasts';
import { PODCASTS_MOCK } from '~constants/podcastsMock';

import Podcasts from './index';

vi.mock('../../hooks/useRequestPodcasts', () => ({
  useRequestPodcasts: vi.fn(),
}));

describe('<Podcasts />', () => {
  test('should render loading podcasts', () => {
    vi.mocked(useRequestPodcasts).mockReturnValue({
      loading: true,
      podcasts: [],
    });

    wrapperSetup(<Podcasts />);

    const loadingMessage = screen.queryByText(/...Loading/i);
    expect(loadingMessage).toBeDefined();
  });

  test('should render podcasts list', () => {
    vi.mocked(useRequestPodcasts).mockReturnValue({
      loading: false,
      podcasts: PODCASTS_MOCK,
    });

    wrapperSetup(<Podcasts />);

    const loadingMessage = screen.queryByText(/...Loading/i);
    expect(loadingMessage).toBeNull();

    const podcastCards = screen.getAllByTestId('PodcastCard');
    expect(podcastCards.length).toBe(PODCASTS_MOCK.length);
  });

  test('should render filtered podcast by title', () => {
    vi.mocked(useRequestPodcasts).mockReturnValue({
      loading: false,
      podcasts: PODCASTS_MOCK,
    });

    wrapperSetup(<Podcasts />);

    const currentPodcastTitle = PODCASTS_MOCK[0]['im:name'].label;

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {
      target: { value: currentPodcastTitle },
    });

    const noPodcastMessage = screen.queryByText(
      /No podcast found, please try again with another search/i,
    );
    expect(noPodcastMessage).toBeNull();

    const podcastCards = screen.getAllByTestId('PodcastCard');
    expect(podcastCards.length).toBe(1);
  });

  test('should render filtered podcast by author', () => {
    vi.mocked(useRequestPodcasts).mockReturnValue({
      loading: false,
      podcasts: PODCASTS_MOCK,
    });

    wrapperSetup(<Podcasts />);

    const currentPodcastAuthor = PODCASTS_MOCK[0]['im:artist'].label;

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {
      target: { value: currentPodcastAuthor },
    });

    const noPodcastMessage = screen.queryByText(
      /No podcast found, please try again with another search/i,
    );
    expect(noPodcastMessage).toBeNull();

    const podcastCards = screen.getAllByTestId('PodcastCard');
    expect(podcastCards.length).toBe(1);
  });

  test('should render not podcast message', () => {
    vi.mocked(useRequestPodcasts).mockReturnValue({
      loading: false,
      podcasts: PODCASTS_MOCK,
    });

    wrapperSetup(<Podcasts />);

    const noValidSearch = '---------------';

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: noValidSearch } });

    const noPodcastMessage = screen.queryByText(
      /No podcast found, please try again with another search/i,
    );
    expect(noPodcastMessage).toBeDefined();
  });
});
