import { screen } from '@testing-library/react';

import { wrapperSetup } from '~utils/testHelpers';

import PodcastDetailsLayout from './index';

describe('<PodcastDetailsLayout />', () => {
  beforeEach(() => {
    wrapperSetup(
      <PodcastDetailsLayout
        details={{
          id: '1685691481',
          title: 'Scamanda',
          author: 'Lionsgate Sound',
          imageUrl:
            // eslint-disable-next-line max-len
            'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/58/94/c4/5894c4d9-ca9f-4f8c-09c4-b283f43e15bc/mza_14757957228535922398.jpg/170x170bb.png',
          description:
            // eslint-disable-next-line max-len
            'Amanda is a wife. A mother. A blogger. A Christian.\nA charming, beautiful, bubbly, young woman who lives life to the fullest.\nBut Amanda is dying, with a secret she doesn’t want anyone to know.\nShe starts a blog detailing her cancer journey, and becomes an inspiration, touching and captivating her local community as well as followers all over the world. \nUntil one day investigative producer Nancy gets an anonymous tip telling her to look at Amanda’s blog, setting Nancy on an unimaginable road to uncover Amanda’s secret. \nAward winning journalist Charlie Webster explores this unbelievable and bizarre, but all-too-real tale, of a woman from San Jose, California whose secret ripped a family apart and left a community in shock.  \nScamanda is the true story of a woman whose own words held the key to her secret. \nNew episodes every Monday.\nFollow Scamanda on Apple Podcasts, Spotify, or wherever you listen.\nAmanda’s blog posts are read by actor Kendall Horn.',
        }}
      >
        <h1>Content</h1>
      </PodcastDetailsLayout>,
    );
  });

  test('should renders the children content', () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });

  test('should renders the PodcastInfo Component', () => {
    expect(screen.getByTestId('PodcastInfo')).toBeDefined();
  });
});
