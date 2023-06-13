import { Box, Container, Link, Typography } from '@mui/material';
import windowIcon from 'assets/icons/window.png';
import { Loader } from 'components/ui/Loader';
import { CommentForm } from 'components/unsorted/CommentForm';
import { StoriesList } from 'components/unsorted/StoriesList';
import { FC, useEffect, useMemo, useState } from 'react';
import { Story } from 'types/global';
import { getTopStories } from 'utils/api/storyService';
import { dummyStories } from 'utils/dummyStories';

import { Layout } from '../Layout';
import { styles } from './styles';

export const App: FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  const storiesList = useMemo(
    () => (loading ? <Loader /> : <StoriesList stories={stories} />),
    [stories, loading],
  );

  useEffect(() => {
    // postComment().then((data) => {
    //   console.log(data);
    // });
    getTopStories().then((fetchedStories) => {
      setStories(fetchedStories);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Container maxWidth="laptop" sx={styles.topSection}>
        <Typography variant="h2" sx={styles.title}>
          News
        </Typography>
        {storiesList}
      </Container>
      <Box sx={styles.bottomSectionWrapper}>
        <Container maxWidth="laptop" sx={styles.bottomSection}>
          <Box sx={styles.icon} component="img" src={windowIcon} />
          <Typography sx={styles.bottomSectionText} variant="h6">
            Find out more at
          </Typography>

          <Link component="a">
            <Typography sx={styles.bottomSectionText} variant="h6">
              www.people.com
            </Typography>
          </Link>
        </Container>
      </Box>
        <Container maxWidth="laptop" sx={styles.topSection}>
          {stories.length !== 0 && <CommentForm stories={stories} />}
        </Container>
    </Layout>
  );
};

export default App;
