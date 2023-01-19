import { createTheme, styled } from '@mui/material';

export const BoxSprayLayout = styled('div')(({ theme }) => ({
  // [theme.breakpoints.between('laptop', 'desktop')]: {} /* 필요시 사용, 크기 조정*/,
  [theme.breakpoints.up('desktop')]: {
    display: 'inLine',
  },
}));

export const theme = createTheme({
  /* custom MediaQuery */
  breakpoints: {
    values: {
      mobile: 480,
      tablet: 768,
      laptop: 0,
      desktop: 1024,
    },
  },
});

declare module '@mui/material/styles' {
  /* 타입 스크립트때문에 사용 */
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
