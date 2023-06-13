import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

interface CustomColors {
  grey: string;
  lightGrey: string;
  darkGrey: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: CustomColors;
  }

  interface PaletteOptions {
    custom?: CustomColors;
  }
}

export const basicTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1200,
      desktop: 1680,
    },
  },
  palette: {
    primary: {
      main: '#6fbadf',
    },
    secondary: {
      main: '#3c3f43',
    },
    custom: { grey: '#b1b2b6', lightGrey: '#f2f2f2', darkGrey: '#3c3f43' },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: basicTheme.palette.custom.grey,
            color: basicTheme.palette.common.white,
            borderRadius: 0,
            height: '24px',
            lineHeight: '16px',
            textTransform: 'uppercase',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            borderRadius: '2px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: basicTheme.palette.common.white,
              cursor: 'pointer',
            },
          },
        },
      },
    },
  },
  basicTheme,
);
