import './App.css'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'
import Drone from './components/Drone'
import styled from 'styled-components'
import FailedGame from './components/FailedGame'
import { LinearProgress, Typography } from '@mui/material'
import { resetAllStore } from './store'

function App() {
  const start = useBoundStore((state) => state.start)
  const loading = useBoundStore((state) => state.loading)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  // const setStart = useBoundStore((state) => state.setStart)
  // const setId = useBoundStore((state) => state.setId)
  // const gameSuccess = useBoundStore((state) => state.gameSuccess)
  // const setToken = useBoundStore((state) => state.setToken)
  // const setCaveCoords = useBoundStore((state) => state.setCaveCoords)

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
        disabled={!start || loading}
        onClick={() => {
          resetAllStore()
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
  max-width: 110px;
  width: 100%;
  position: absolute !important;
  bottom: 12px;
  right: 10px;

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
