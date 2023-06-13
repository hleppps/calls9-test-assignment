import { Box, CircularProgress } from '@mui/material';

import { styles } from './styles';

export const Loader = () => {
  return (
    <Box sx={styles.loader}>
      <CircularProgress color="primary" />
    </Box>
  );
};
