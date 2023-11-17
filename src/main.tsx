import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { CssBaseline } from '@mui/material'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
)
