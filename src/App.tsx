import './App.css'
import GameInitializer from './components/GameInitializer'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'

function App() {
  const start = useBoundStore((state) => state.start)
  const setStart = useBoundStore((state) => state.setStart)
  const setId = useBoundStore((state) => state.setId)
  const setToken = useBoundStore((state) => state.setToken)
  const setCaveCoords = useBoundStore((state) => state.setCaveCoords)

  return (
    <>
      <Button
        variant='contained'
        size='large'
        sx={{ width: '100%' }}
        onClick={() => {
          setStart()
          setId('')
          setToken('')
          setCaveCoords([])
        }}>
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
