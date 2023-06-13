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
    custom: { grey: '#ACACAC', lightGrey: '##f2f2f2', darkGrey: '#3c3f43' },
  },
});

export const theme = createTheme(basicTheme);
