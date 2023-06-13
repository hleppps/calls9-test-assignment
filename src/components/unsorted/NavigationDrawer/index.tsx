import { Drawer } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface NavigationDrawerProps {
  open: boolean;
  children: ReactNode;
  handleClose:
    | ((event: object, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  open,
  children,
  handleClose,
}) => {
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="right"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      {children}
    </Drawer>
  );
};
