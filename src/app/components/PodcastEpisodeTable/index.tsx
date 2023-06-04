import { ReactElement, useMemo } from 'react';
import { Link } from '@mui/material';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Link as RouterLink } from 'react-router-dom';

import { ApplePodcastEpisodeResult } from '~services/podcasts/types';
import { replaceParamsPath } from '~utils/replaceParamsPath';
import { PATHS } from '~constants/paths';

import { PodcastEpisodesTableProps } from './types';
import { PodcastEpisodesTableContainer } from './styles';

const PodcastEpisodesTable = ({
  podcastId,
  episodes,
}: PodcastEpisodesTableProps): ReactElement => {
  const columns = useMemo<TableColumn<ApplePodcastEpisodeResult>[]>(
    () => [
      {
        name: 'Title',
        cell: (row) => (
          <Link
            component={RouterLink}
            to={replaceParamsPath(PATHS.EPISODE, {
              ':podcastId': podcastId,
              ':episodeId': row.trackId,
            })}
            underline="none"
            color="primary"
            variant="inherit"
          >
            {row.trackName}
          </Link>
        ),
      },
      {
        name: 'Date',
        selector: (row) => new Date(row.releaseDate).toLocaleDateString(),
        width: '150px',
        center: true,
      },
      {
        name: 'Duration',
        selector: (row) => {
          if (row.trackTimeMillis) {
            return new Date(row.trackTimeMillis).toISOString().slice(11, 19);
          }

          return 'N/A';
        },
        width: '150px',
        center: true,
      },
    ],
    [podcastId],
  );

  return (
    <PodcastEpisodesTableContainer>
      <DataTable
        keyField="trackId"
        data={episodes}
        columns={columns}
        striped
        dense
        customStyles={{
          head: {
            style: {
              fontSize: '14px',
              fontWeight: '700',
            },
          },
        }}
      />
    </PodcastEpisodesTableContainer>
  );
};

export default PodcastEpisodesTable;
