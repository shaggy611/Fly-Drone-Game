import './App.css'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'
// import { useEffect } from 'react'
// import { apiInitGame } from './utils/api/apiGameInitialize'

function App() {
  const start = useBoundStore((state) => state.start)
  const setStart = useBoundStore((state) => state.setStart)
  const setId = useBoundStore((state) => state.setId)
  const setToken = useBoundStore((state) => state.setToken)
  const setCaveCoords = useBoundStore((state) => state.setCaveCoords)

  // useEffect(() => {
  //   async function initGame() {
  //     await apiInitGame()
  //     console.log(start, 'Initializing...')
  //   }

  //   if (start) {
  //     initGame()
  //   }
  // }, [start])

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
          <WelcomeBoard></WelcomeBoard>
        </>
      )}
    </>
  )
}

export default App
