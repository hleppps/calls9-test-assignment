import { AppBar, Box, Container } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const Header: FC = () => {
  return (
    <AppBar position="sticky" sx={styles.header}>
      <Container maxWidth="laptop" sx={styles.content}>
        <div>Logo</div>
        <div>Navigation</div>
      </Container>
    </AppBar>
  );
};
