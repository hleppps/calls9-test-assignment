import { theme } from 'theme';
import { SxStyles } from 'types/styles';

export const styles: SxStyles = {
  card: {
    width: '300px',
    height: '360px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      boxShadow: 2,
    },
  },
  imageWrapper: {
    position: 'relative',
    height: '120px',
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
    p: 4,
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
