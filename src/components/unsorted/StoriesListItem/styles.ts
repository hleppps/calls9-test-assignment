import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  card: {
    maxWidth: '300px',
    width: '100%',
    height: '420px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.1, 1.05, 1)',
      boxShadow: 2,
      '& .cardContent': {
        transform: 'scale3d(0.909, 0.98, 1)',
      },
    },
  },
  imageWrapper: {
    position: 'relative',
    height: '160px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  playIcon: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    right: 8,
    bottom: 8,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    transition: 'transform 0.15s ease-in-out',
    py: 5,
  },
  title: {
    mb: 4,
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  },
  text: {
    mb: 8,
    fontSize: '12px',
    lineHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
  },
  tags: {
    display: 'flex',
    gap: 2,
  },
};
