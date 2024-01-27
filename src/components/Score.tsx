import { Container, Typography } from '@mui/material'
import styled from 'styled-components'
import { useBoundStore } from '../store'

function Score() {
  const score = useBoundStore((state) => state.score)
  const gameDataLoaded = useBoundStore((state) => state.gameDataLoaded)

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

const StyledScore = styled(Container)`
  position: absolute;
  left: 10px;
  top: 170px;
  width: 100%;
  max-width: 280px !important;
  padding: 8px;
  border-radius: 10px;
`
