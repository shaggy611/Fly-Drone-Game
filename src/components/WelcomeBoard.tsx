import { Button, Container, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import ScoreTable from './ScoreTable'
import ComplexitySlider from './ComplexitySlider'

function WelcomeBoard() {
  return (
    <StledWelcomeBoard>
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
        <ComplexitySlider />
      </StyledContainer>

      <Button variant='contained' size='large' sx={{ width: '100%' }}>
        START GAME
      </Button>
    </StledWelcomeBoard>
  )
}

export default WelcomeBoard

const StyledContainer = styled(Container)`
  width: 100%;
  /* height: 300px; */
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`

const StledWelcomeBoard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
