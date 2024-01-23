import { Button } from '@mui/material'
import styled from 'styled-components'
import { resetAllSlices } from '../store'
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
          resetAllSlices()
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

const StyledFailedGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledImage = styled.img`
  max-width: 300px;
  width: 100%;
`
