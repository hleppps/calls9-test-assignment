import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    p: 4,
    [theme.breakpoints.up('tablet')]: {
      width: '760px',
    },
  },
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    fontSize: '32px',
    fontWeight: 'bold',
    mb: 4,
  },
  formRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontSize: '16px',
    [theme.breakpoints.up('tablet')]: {
      flexDirection: 'row',
    },
  },
  nameInput: {
    flexBasis: '50%',
    height: '70px',
  },
  storyInput: {
    flexBasis: '50%',
  },
  commentTextInput: {
    minHeight: '80px',
  },
};
