import { ReactNode } from 'react';

import { PodcastInfoProps } from '~components/PodcastInfo/types';

interface PodcastDetailsLayoutProps {
  children: ReactNode;
  details: PodcastInfoProps;
}
