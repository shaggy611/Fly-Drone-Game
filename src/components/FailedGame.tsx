import { Button } from '@mui/material'
import styled, { keyframes } from 'styled-components'
import { resetAllStore } from '../store'
import gameOverImage from '../assets/game_over.png'

export default function FailedGame() {
  // const setGameFailed = useBoundStore((state) => state.setGameFailed)
  // const setId = useBoundStore((state) => state.setId)
  // const setToken = useBoundStore((state) => state.setToken)
  // const setCaveCoords = useBoundStore((state) => state.setCaveCoords)

  return (
    <StyledFailedGame>
      <StyledImage src={gameOverImage} />

      <Button
        variant='contained'
        size='small'
        sx={{ width: '50%' }}
        onClick={() => {
          resetAllStore()
          // setGameFailed()
          // setId('')
          // setToken('')
          // setCaveCoords([])
          //setPosition([0, 0])
        }}>
        START AGAIN
      </Button>
    </StyledFailedGame>
  )
}

const appearing = keyframes`
    10% { transform:translateY(0%); opacity: 0; }
    30% { transform:translateY(-15%); }
    50% { transform:translateY(0%); }
    60% { transform:translateY(-7%); }
    80% { transform:translateY(0%); }
    98% { transform:translateY(-3%); }
    100% { transform:translateY(0); opacity: 1; }
`

const StyledFailedGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledImage = styled.img`
  max-width: 300px;
  width: 100%;
  animation: ${appearing} 0.5s ease-in;
`
