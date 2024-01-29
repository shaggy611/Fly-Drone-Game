import { Button, Container, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styled, { keyframes } from 'styled-components'
import ScoreTable from './ScoreTable'
import { useBoundStore } from '../store'
import ComplexitySlider from './ComplexitySlider'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function WelcomeBoard() {
  const setStart = useBoundStore((state) => state.setStart)
  const playerName = useBoundStore((state) => state.playerName)
  const setPlayerName = useBoundStore((state) => state.setPlayerName)
  const gameDataLoaded = useBoundStore((state) => state.gameDataLoaded)
  const loading = useBoundStore((state) => state.loading)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  const gameSuccess = useBoundStore((state) => state.gameSuccess)

  const pattern = /^[a-zA-Z0-9]+$/

  function startGame() {
    setStart()
  }

  return (
    <>
      {!gameDataLoaded && !loading && !gameFailed && !gameSuccess ? (
        <StyledWelcomeBoard>
          <StyledContainer
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            maxWidth='sm'>
            <Typography
              sx={{ fontSize: '1.5rem' }}
              p={0}
              align='center'
              gutterBottom>
              Through the Cave
            </Typography>

            <Typography
              sx={{ fontSize: '1.2rem' }}
              pt={3}
              align='center'
              gutterBottom>
              Score:
            </Typography>
            <Divider />
            <ScoreTable />
          </StyledContainer>

          <StyledContainer
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            maxWidth='sm'>
            <Box component='form' noValidate autoComplete='off'>
              <TextField
                sx={{
                  input: { color: (theme) => theme.palette.text.secondary },
                }}
                id='outlined-basic'
                label='Write your name'
                variant='outlined'
                color='secondary'
                value={playerName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPlayerName(event.target.value)
                }}
                fullWidth
              />
            </Box>

            <ComplexitySlider />
          </StyledContainer>

          <Button
            variant='contained'
            size='large'
            sx={{ width: '100%' }}
            onClick={() => startGame()}
            disabled={
              playerName.length > 2 && pattern.test(playerName) ? false : true
            }>
            START GAME
          </Button>
        </StyledWelcomeBoard>
      ) : (
        ''
      )}
    </>
  )
}

export default WelcomeBoard

const appearingBoard = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`

const StyledWelcomeBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  width: 100%;
  height: 100%;
  animation: ${appearingBoard} 0.4s ease;
`
