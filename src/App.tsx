import './App.css'
import { Typography } from '@mui/material'
import GameInitializer from './components/GameInitializer'

function App() {
  return (
    <>
        <Typography
          sx={{ fontSize: '1.5rem' }}
          p={0}
          align='center'
          gutterBottom>
          Through the Cave
        </Typography>

        <GameInitializer></GameInitializer>

    </>
  )
}

export default App
