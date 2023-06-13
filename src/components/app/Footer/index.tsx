import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const Footer: FC = () => {
  return (
    <Container maxWidth="laptop" sx={styles.footer}>
      <Button sx={styles.button} variant="text">
        Terms & Conditions
      </Button>
      <Typography variant="body1">|</Typography>
      <Button sx={styles.button} variant="text">
        Privacy Policy
      </Button>
    </Container>
  );
};
