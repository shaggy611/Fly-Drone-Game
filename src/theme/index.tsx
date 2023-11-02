import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#F7E987',
      main: '#071952',
      dark: '#35A29F',
      contrastText: '#97FEED',
    },
    background: {
      default: '#0B666A',
      paper: '#35A29F',
    },
  },
  typography: {
    button: {
      fontSize: '1.2rem',
    },
    allVariants: {
      color: '#F7E987',
    },
  },
})
