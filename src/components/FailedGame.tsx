import { Button, Typography } from '@mui/material'
import styled from 'styled-components'
import { useBoundStore } from '../store'

export default function FailedGame() {
  const setGameFailed = useBoundStore((state) => state.setGameFailed)
  const setId = useBoundStore((state) => state.setId)
  const setToken = useBoundStore((state) => state.setToken)
  const setCaveCoords = useBoundStore((state) => state.setCaveCoords)
  //const setPosition = useBoundStore((state) => state.setPosition)

  return (
    <StyledFailedGame>
      <Typography
        sx={{ fontSize: '1.5rem', width: '100%' }}
        p={0}
        align='center'
        gutterBottom>
        Failed! The drone collided with the wall
      </Typography>

      <Button
        variant='contained'
        size='small'
        sx={{ width: '100%' }}
        onClick={() => {
          setGameFailed()
          setId('')
          setToken('')
          setCaveCoords([])
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
