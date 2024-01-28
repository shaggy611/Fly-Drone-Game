import { Container, Typography } from '@mui/material'
import styled, { keyframes } from 'styled-components'
import { useBoundStore } from '../store'
import useScore from '../hooks/useScore'

function Score() {
  const score = useBoundStore((state) => state.score)
  const gameDataLoaded = useBoundStore((state) => state.gameDataLoaded)

  useScore()

  return (
    <>
      {gameDataLoaded ? (
        <StyledScore
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
          <Typography sx={{ fontSize: '1.3rem' }} align='left'>
            SCORE: {score}
          </Typography>
        </StyledScore>
      ) : (
        ''
      )}
    </>
  )
}

export default Score

const appearing = keyframes`
    10% { transform:translateX(0%); opacity: 0; }
    30% { transform:translateX(-25%); }
    50% { transform:translateX(0%); }
    60% { transform:translateX(-7%); }
    80% { transform:translateX(0%); }
    98% { transform:translateX(-3%); }
    100% { transform:translateX(0); opacity: 1; }
`

const StyledScore = styled(Container)`
  position: absolute;
  left: 10px;
  top: 170px;
  width: 100%;
  max-width: 280px !important;
  padding: 8px;
  border-radius: 10px;
  animation: ${appearing} 0.5s ease-in 0.2s;
`
