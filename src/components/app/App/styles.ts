import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py: 10,
  },
  title: {
    fontSize: '24px',
    color: theme.palette.custom.grey,
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
