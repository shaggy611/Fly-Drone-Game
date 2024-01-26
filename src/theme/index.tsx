import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#E55604',
      main: '#002B5B',
      dark: '#2B2A4C',
      contrastText: '#FF9130',
    },
    text: {
      primary: '#2B2A4C',
      secondary: '#FF9130',
    },
    secondary: {
      main: '#FF9130',
      light: '#e33371',
      dark: '#9a0036',
      contrastText: '#fff',
    },
    background: {
      default: '#26577C',
      paper: '#EA906C',
    },
  },
  typography: {
    button: {
      fontSize: '1.2rem',
    },
    allVariants: {
      color: '#fd841a',
    },
  },
})

// export const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       light: '#F7E987',
//       main: '#071952',
//       dark: '#35A29F',
//       contrastText: '#97FEED',
//     },
//     secondary: {
//       main: '#F7E987',
//       light: '#e33371',
//       dark: '#9a0036',
//       contrastText: '#fff',
//     },
//     background: {
//       default: '#0B666A',
//       paper: '#35A29F',
//     },
//   },
//   typography: {
//     button: {
//       fontSize: '1.2rem',
//     },
//     allVariants: {
//       color: '#F7E987',
//     },
//   },
// })
