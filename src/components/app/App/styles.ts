import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: '24px',
    color: theme.palette.custom.grey,
    mb: 10,
  },
  bottomSectionWrapper: {
    bgcolor: theme.palette.common.white,
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    py: 16,
  },
  icon: {
    height: '24px',
  },
  bottomSectionText: {
    fontSize: '16px',
    [theme.breakpoints.up('tablet')]: {
      fontSize: '20px',
    },
  },
};
