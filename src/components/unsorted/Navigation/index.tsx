import { Box, BoxProps, Button } from '@mui/material';
import { FC } from 'react';

export interface NavigationProps extends BoxProps {
  items: string[];
}

export const Navigation: FC<NavigationProps> = ({ items, ...rest }) => {
  return (
    <Box {...rest}>
      {items.map((item) => (
        <Button key={item} color="secondary">
          {item}
        </Button>
      ))}
    </Box>
  );
};
