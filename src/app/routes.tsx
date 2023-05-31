import { ReactElement, lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { ComponentWithSupense } from '~components/index';
import { PATHS } from '~constants/paths';
import { Nullable } from '~globals/types/commons';

const Podcasts = lazy(() => import('~modules/Podcasts'));
const Podcast = lazy(() => import('~modules/Podcast'));
const PodcastEpisode = lazy(() => import('~modules/Podcast/Episode'));
const NotFound = lazy(() => import('~modules/NotFound'));

const routes: RouteObject[] = [
  {
    children: [
      {
        path: PATHS.HOME,
        element: <ComponentWithSupense component={<Podcasts />} />,
      },
      {
        path: PATHS.PODCAST,
        element: <ComponentWithSupense component={<Podcast />} />,
      },
      {
        path: PATHS.EPISODE,
        element: <ComponentWithSupense component={<PodcastEpisode />} />,
      },
      {
        path: '*',
        element: <ComponentWithSupense component={<NotFound />} />,
      },
    ],
  },
];

const BaseRoutes = (): Nullable<ReactElement> => {
  const pages = useRoutes(routes);

  return pages;
};

export default BaseRoutes;
