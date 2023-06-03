import { ReactElement, lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Layout } from '~components/index';
import { PATHS } from '~constants/paths';
import { Nullable } from '~globals/types/commons';

const Podcasts = lazy(() => import('~modules/Podcasts'));
const Podcast = lazy(() => import('~modules/Podcast'));
const PodcastEpisode = lazy(() => import('~modules/Podcast/Episode'));
const NotFound = lazy(() => import('~modules/NotFound'));

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Podcasts />,
      },
      {
        path: PATHS.PODCAST,
        element: <Podcast />,
      },
      {
        path: PATHS.EPISODE,
        element: <PodcastEpisode />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const BaseRoutes = (): Nullable<ReactElement> => {
  const pages = useRoutes(routes);

  return pages;
};

export default BaseRoutes;
