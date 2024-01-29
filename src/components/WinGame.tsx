import { Button } from '@mui/material'
import styled, { keyframes } from 'styled-components'
import { resetAllStore, useBoundStore } from '../store'
import winGameImage from '../assets/win.png'
import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect } from 'react'

export default function WinGame() {
  const [, updateLocalStorageValue] = useLocalStorage()
  const gameSuccess = useBoundStore((state) => state.gameSuccess)
  const playerName = useBoundStore((state) => state.playerName)
  const gameComplexity = useBoundStore((state) => state.gameComplexity)
  const score = useBoundStore((state) => state.score)

  useEffect(() => {
    if (gameSuccess) {
      updateLocalStorageValue(playerName, { playerName, gameComplexity, score })
    }
  }, [gameSuccess])

  return (
    <>
      {gameSuccess ? (
        <StyledWinGame>
          <StyledImage src={winGameImage} />

          <Button
            variant='contained'
            size='small'
            sx={{ width: '50%' }}
            onClick={() => {
              resetAllStore()
            }}>
            NEW GAME
          </Button>
        </StyledWinGame>
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

const StyledWinGame = styled.div`
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
