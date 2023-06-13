import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from '@mui/material';
import { Navigation } from 'components/unsorted/Navigation';
import { NavigationDrawer } from 'components/unsorted/NavigationDrawer';
import { FC, useState } from 'react';

import { AppLogo } from '../AppLogo';
import { styles } from './styles';

const navigationItems = ['About us', 'What we do', 'Our stuff', 'Contact us'];

export const Header: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <AppBar position="sticky" sx={styles.header}>
      <Container maxWidth="laptop">
        <Toolbar sx={styles.content}>
          <AppLogo />
          <IconButton onClick={handleDrawerToggle} sx={styles.menuButton}>
            <MenuIcon />
          </IconButton>
          <Navigation items={navigationItems} sx={styles.navigation} />
          <NavigationDrawer handleClose={handleDrawerToggle} open={showDrawer}>
            <Box onClick={handleDrawerToggle} sx={styles.navigationDrawer}>
              <AppLogo />
              <List>
                {navigationItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={styles.navigationDrawerListItem}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </NavigationDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
