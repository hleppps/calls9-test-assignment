import { Container, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const Footer: FC = () => {
  return (
    <Container maxWidth="laptop" sx={styles.footer}>
      <Typography variant="caption">
        Terms & Conditions | Privacy Policy
      </Typography>
    </Container>
  );
};
