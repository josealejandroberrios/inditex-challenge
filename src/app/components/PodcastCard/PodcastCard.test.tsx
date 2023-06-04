import { screen } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';

import PodcastCard from './index';
import { PodcastCardProps } from './types';

const defaultProps: PodcastCardProps = {
  id: '1689102827',
  title: 'Rap Stories',
  author: 'ESPN, Andscape, David Dennis Jr.',
  imageUrl:
    // eslint-disable-next-line max-len
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png',
};

describe('<PodcastCard />', () => {
  beforeEach(() => {
    wrapperSetup(<PodcastCard {...defaultProps} />);
  });

  test('should render with props', () => {
    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link).toBeDefined();
    expect(link.href).toContain(defaultProps.id);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeDefined();

    const author = screen.getByText(`Author: ${defaultProps.author}`);
    expect(author).toBeDefined();

    const image = screen.getByAltText(defaultProps.title) as HTMLImageElement;
    expect(image).toBeDefined();
    expect(image.src).toBe(defaultProps.imageUrl);
  });
});
