import { screen, fireEvent } from '@testing-library/react';

import { WrapperSetupTest, wrapperSetup } from '~utils/testHelpers';

import SearchFilter from './index';
import { SearchFilterProps } from './types';

describe('<SearchFilter />', () => {
  let searchValue = '';
  const handleChangeMock: SearchFilterProps['onChange'] = vi.fn(
    (event) => (searchValue = event.target.value),
  );
  let wrapper: WrapperSetupTest | null = null;

  beforeEach(() => {
    vi.clearAllMocks();

    wrapper = wrapperSetup(
      <SearchFilter
        podcastCount={100}
        searchValue={searchValue}
        onChange={handleChangeMock}
      />,
    );
  });

  test('should render with props', () => {
    const chip = screen.getByText('100');

    expect(chip).toBeDefined();

    const searchInput = screen.getByPlaceholderText(
      'Filter podcasts...',
    ) as HTMLInputElement;

    expect(searchInput).toBeDefined();
    expect(searchInput.value).toBe('');
  });

  test('should change search text', () => {
    const searchInput = screen.getByPlaceholderText(
      'Filter podcasts...',
    ) as HTMLInputElement;

    const newValue = 'new value';

    fireEvent.change(searchInput, { target: { value: newValue } });

    wrapper?.rerender(
      wrapperSetup(
        <SearchFilter
          podcastCount={100}
          searchValue={searchValue}
          onChange={handleChangeMock}
        />,
      ).ui,
    );

    expect(searchInput.value).toBe(newValue);
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
