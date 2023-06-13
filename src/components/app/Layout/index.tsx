import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { styles } from './styles';

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container sx={styles.container}>
      <Header />
      <Container maxWidth="laptop" component="main" sx={styles.main}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
};
