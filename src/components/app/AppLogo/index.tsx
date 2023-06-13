import { Box } from '@mui/material';
import logo from 'assets/images/logo-small.png';
import { FC } from 'react';

export const AppLogo: FC = () => (
  <Box component="img" alt="Logo" src={logo} />
);
