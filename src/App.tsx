import './App.css'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'
import Drone from './components/Drone'
import styled from 'styled-components'
import FailedGame from './components/FailedGame'
import { LinearProgress, Typography } from '@mui/material'

function App() {
  const start = useBoundStore((state) => state.start)
  const setStart = useBoundStore((state) => state.setStart)
  const setId = useBoundStore((state) => state.setId)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  // const gameSuccess = useBoundStore((state) => state.gameSuccess)
  const setToken = useBoundStore((state) => state.setToken)
  const setCaveCoords = useBoundStore((state) => state.setCaveCoords)
  const loading = useBoundStore((state) => state.loading)

  return (
    <>
      {loading ? (
        <>
          <StyledLinearProgress color='success' />
          <StyledTypography variant='h4'>Loading game...</StyledTypography>
        </>
      ) : (
        ''
      )}

      {start ? (
        <CaveWrapper>
          <Cave />
          <Drone />
        </CaveWrapper>
      ) : (
        <>{gameFailed ? <FailedGame /> : <WelcomeBoard />}</>
      )}

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
    </>
  )
}

export default App

const CaveWrapper = styled.div`
  position: relative;
`

const StyledButton = styled(Button)`
  max-width: 200px;
  width: 100%;
  position: absolute !important;
  top: 95%;
  left: 50%;
  transform: translate(-50%, 0%);
`

const StyledLinearProgress = styled(LinearProgress)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 7px !important;
`

const StyledTypography = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`
