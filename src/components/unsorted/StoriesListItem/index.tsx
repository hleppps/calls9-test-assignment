import { Box, Card, Chip, Typography } from '@mui/material';
import playIcon from 'assets/icons/play.png';
import notFoundImage from 'assets/images/not-found-image.png';
import { FC } from 'react';
import { ContentType } from 'utils/constants';

import { styles } from './styles';

export interface StoriesListItemProps {
  image: { src: string; alt: string };
  title: string;
  text: string;
  tags: string[];
  contentType: ContentType;
}

export const StoriesListItem: FC<StoriesListItemProps> = ({
  contentType,
  image,
  tags,
  text,
  title,
}) => {
  const getVideoIcon = (contentType: ContentType) => {
    if (contentType === ContentType.VIDEO) {
      return (
        <Box sx={styles.playIcon} component="img" src={playIcon} alt="Play" />
      );
    }
  };

  return (
    <Card sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        <Box
          sx={styles.image}
          component="img"
          alt={image.alt}
          src={image.src}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = notFoundImage;
          }}
        />
        {getVideoIcon(contentType)}
      </Box>
      <Box className="cardContent" sx={styles.content}>
        <Box>
          <Typography variant="h3" sx={styles.title}>
            {title}
          </Typography>
          <Typography sx={styles.text} variant="body2">
            {text}
          </Typography>
        </Box>
        <Box sx={styles.tags}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag}></Chip>
          ))}
        </Box>
      </Box>
    </Card>
  );
};
