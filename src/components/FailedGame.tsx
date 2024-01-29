import { Button } from '@mui/material'
import styled, { keyframes } from 'styled-components'
import { resetAllStore, useBoundStore } from '../store'
import gameOverImage from '../assets/gameover.png'
import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect } from 'react'

export default function FailedGame() {
  const [value, updateLocalStorageValue] = useLocalStorage()
  const gameFailed = useBoundStore((state) => state.gameFailed)
  const playerName = useBoundStore((state) => state.playerName)
  const gameComplexity = useBoundStore((state) => state.gameComplexity)
  const score = useBoundStore((state) => state.score)

  useEffect(() => {
    if (gameFailed) {
      updateLocalStorageValue(playerName, { playerName, gameComplexity, score })
    }
  }, [gameFailed])

  return (
    <>
      {gameFailed ? (
        <StyledFailedGame>
          <StyledImage src={gameOverImage} />

          <Button
            variant='contained'
            size='small'
            sx={{ width: '50%' }}
            onClick={() => {
              resetAllStore()
            }}>
            START AGAIN
          </Button>
        </StyledFailedGame>
      ) : (
        ''
      )}
    </>
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
