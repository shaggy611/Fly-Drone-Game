import './App.css'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'
import Drone from './components/Drone'
import styled from 'styled-components'
import FailedGame from './components/FailedGame'

function App() {
  const start = useBoundStore((state) => state.start)
  const setStart = useBoundStore((state) => state.setStart)
  const setId = useBoundStore((state) => state.setId)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  const gameSuccess = useBoundStore((state) => state.gameSuccess)
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
        <CaveWrapper>
          <Cave />
          <Drone />
        </CaveWrapper>
      ) : (
        <>{gameFailed ? <FailedGame /> : <WelcomeBoard />}</>
      )}
    </>
  )
}

export default App

const CaveWrapper = styled.div`
  position: relative;
`
