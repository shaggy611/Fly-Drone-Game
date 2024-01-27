import './App.css'
import WelcomeBoard from './components/WelcomeBoard'
import Cave from './components/Cave'
import { useBoundStore } from './store'
import { Button } from '@mui/material'
import Drone from './components/Drone'
import styled from 'styled-components'
import FailedGame from './components/FailedGame'
import { resetAllStore } from './store'
import GaugesBlock from './components/GaugesBlock'
import WinGame from './components/WinGame'
import Loader from './components/Loader'
import KeyboardTip from './components/KeyboardTip'

function App() {
  const start = useBoundStore((state) => state.start)
  const loading = useBoundStore((state) => state.loading)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  const gameSuccess = useBoundStore((state) => state.gameSuccess)

  return (
    <>
      {start && !gameSuccess && !gameFailed ? (
        <CaveWrapper>
          <Cave />
          <Drone />
        </CaveWrapper>
      ) : (
        ''
      )}

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        ''
      )}

      <KeyboardTip />

      <WelcomeBoard />

      <FailedGame />

      <WinGame />

      <GaugesBlock />

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

// const StyledLinearProgress = styled(LinearProgress)`
//   position: absolute !important;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 7px !important;
// `

// const StyledImage = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   max-width: 300px;
// `
