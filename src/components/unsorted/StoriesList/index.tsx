import { Grid } from '@mui/material';
import { FC } from 'react';
import { Story } from 'types/global';

import { StoriesListItem } from '../StoriesListItem';

export interface StoriesListProps {
  stories: Story[];
}

export const StoriesList: FC<StoriesListProps> = ({ stories }) => {
  return (
    <Grid
      container
      spacing={2}
      rowGap={6}
      columns={{ mobile: 1, tablet: 2, laptop: 3 }}
      sx={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      {stories.map((story) => (
        <Grid key={story.id} item>
          <StoriesListItem {...story} />
        </Grid>
      ))}
    </Grid>
  );
};
