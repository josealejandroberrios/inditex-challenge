import { ReactElement } from 'react';

import PodcastInfo from '~components/PodcastInfo';

import { PodcastDetailsLayoutProps } from './types';
import {
  PodcastDetailsLayoutContainer,
  PodcastDetailsLayoutContent,
} from './styles';

const PodcastDetailsLayout = ({
  children,
  details,
}: PodcastDetailsLayoutProps): ReactElement => (
  <PodcastDetailsLayoutContainer data-testid="PodcastDetailsLayout">
    <PodcastInfo {...details} />

    <PodcastDetailsLayoutContent>{children}</PodcastDetailsLayoutContent>
  </PodcastDetailsLayoutContainer>
);

export default PodcastDetailsLayout;
