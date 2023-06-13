import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
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
    gap: '16px',
  },
  nameInput: {
    width: '300px',
    height: '70px',
  },
  storyInput: {
    width: '300px',
  },
  commentTextInput: {
    minHeight: '80px',
  },
};
