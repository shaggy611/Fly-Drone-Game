import './App.css'
import GameInitializer from './components/GameInitializer'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'

function App() {
  const start = useBoundStore((state) => state.start)
  const setStart = useBoundStore((state) => state.setStart)

  return (
    <>
      <Button
        variant='contained'
        size='large'
        sx={{ width: '100%' }}
        onClick={() => setStart()}>
        RESET GAME
      </Button>

      {start ? (
        <Cave />
      ) : (
        <>
          <GameInitializer></GameInitializer>
          <WelcomeBoard></WelcomeBoard>
        </>
      )}
    </>
  )
}

export default App
