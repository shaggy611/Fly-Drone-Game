import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { CssBaseline, Typography } from '@mui/material'
import Cave from './components/Cave'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Typography
          sx={{ fontSize: '1.5rem' }}
          p={0}
          align='center'
          gutterBottom>
          Through the Cave
        </Typography>

        <Cave></Cave>
      </ThemeProvider>
    </>
  )
}

export default App
