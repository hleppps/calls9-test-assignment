import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  header: {
    bgcolor: theme.palette.common.white,
    color: theme.palette.common.black,
    boxShadow: 2,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: 0,
  },
  menuButton: {
    display: { tablet: 'none' },
  },
  navigation: {
    display: { mobile: 'none', tablet: 'block' },
  },
  navigationDrawerListItem: {
    textAlign: 'center',
  },
  navigationDrawer: {
    textAlign: 'center',
  },
};
