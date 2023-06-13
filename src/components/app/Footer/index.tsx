import { Box, Container } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const Footer: FC = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="laptop">footer</Container>
    </Box>
  );
};
