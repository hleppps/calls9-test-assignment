import { Box, Container, Link, Typography } from '@mui/material';
import windowIcon from 'assets/icons/window.png';
import { StoriesList } from 'components/unsorted/StoriesList';
import { FC } from 'react';
import { dummyStories } from 'utils/dummyStories';

import { Layout } from '../Layout';
import { styles } from './styles';

export const App: FC = () => {
  return (
    <Layout>
      <Container maxWidth="laptop" sx={styles.topSection}>
        <Typography variant="h2" sx={styles.title}>
          News
        </Typography>
        <StoriesList stories={dummyStories} />
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
    </Layout>
  );
};

export default App;
