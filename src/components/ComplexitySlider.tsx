import Slider from '@mui/material/Slider'
import styled from 'styled-components'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { useBoundStore } from '../store'

function ComplexitySlider() {
  const theme = useTheme()
  const gameComplexity = useBoundStore((state) => state.gameComplexity)
  const setGameComplexity = useBoundStore((state) => state.setGameComplexity)

  return (
    <>
      <Typography
        sx={{ fontSize: '1.2rem' }}
        pt={3}
        align='center'
        gutterBottom>
        Choose difficulty level:
      </Typography>

      <StyledSlider
        onChange={(event: Event, newValue: number | number[]) => {
          setGameComplexity(newValue as number)
        }}
        value={gameComplexity}
        aria-label='Complexity level'
        valueLabelDisplay='auto'
        step={1}
        marks
        min={1}
        max={10}
        theme={theme}
      />
    </>
  )
}

export default ComplexitySlider

const StyledSlider = styled(Slider)`
  & .MuiSlider-thumb,
  & .MuiSlider-rail,
  & .MuiSlider-track {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  & .MuiSlider-mark {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`
