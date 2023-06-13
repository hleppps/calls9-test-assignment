import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    p: 0,
  },
  main: {
    flexGrow: 1,
    background: theme.palette.custom.lightGrey,
  },
};
