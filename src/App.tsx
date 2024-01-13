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
  // const gameSuccess = useBoundStore((state) => state.gameSuccess)
  const setToken = useBoundStore((state) => state.setToken)
  const setCaveCoords = useBoundStore((state) => state.setCaveCoords)

  return (
    <>
      <StyledButton
        variant='contained'
        size='small'
        onClick={() => {
          setStart()
          setId('')
          setToken('')
          setCaveCoords([])
        }}>
        RESET GAME
      </StyledButton>

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

const StyledButton = styled(Button)`
  max-width: 500px;
  width: 100%;
`
