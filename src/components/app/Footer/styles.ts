import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  wrapper: {
    bgcolor: theme.palette.custom.darkGrey,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '48px',
    color: theme.palette.common.white,
  },
  button: {
    textTransform: 'initial',
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  },
};
